BIN         = ./node_modules/.bin
PATH       := $(BIN):$(PATH)
LIB         = $(shell find lib -name "*.js")
DIST        = $(patsubst lib/%.js,dist/%.js,$(LIB))

dist: $(DIST)
dist/%.js: lib/%.js
	@mkdir -p $(@D)
	$(BIN)/babel $< -o $@ --stage 0

clean:
	@rm -rf ./dist

link:
	@npm link

build: clean dist test-dist

build-local: dist test-dist link

publish:
	@git push && git push --tags && npm publish

.PHONY:         \
  build         \
  build-local   \
  install       \
  link          \
  publish       \

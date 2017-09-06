'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaceholderImage = function (_React$Component) {
  _inherits(PlaceholderImage, _React$Component);

  function PlaceholderImage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlaceholderImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlaceholderImage.__proto__ || Object.getPrototypeOf(PlaceholderImage)).call.apply(_ref, [this].concat(args))), _this), _this.imageURL = function () {
      var url = 'http://via.placeholder.com';
      if (_this.props.width) {
        url += '/' + _this.props.width;
        // Width is mandatory, but height is optional.
        if (_this.props.height) {
          url += 'x' + _this.props.height;
        }
      }
      if (_this.props.color) {
        url += '/' + _this.props.color;
        // Text color is only possible if we have a background color.
        if (_this.props.textColor) {
          url += '/' + _this.props.textColor;
        }
      }
      if (_this.props.format) {
        url += '.' + _this.props.format;
      }
      if (_this.props.text) {
        // Encode text for URL formatting.
        url += '?text=' + encodeURI(_this.props.text);
      }

      return url;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlaceholderImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', {
        alt: this.props.text || this.props.width + 'x' + this.props.height,
        src: this.imageURL(),
        width: this.props.width,
        height: this.props.height
      });
    }
  }]);

  return PlaceholderImage;
}(_react2.default.Component);

PlaceholderImage.propTypes = {
  text: _react.PropTypes.string,
  height: _react.PropTypes.number,
  width: _react.PropTypes.number,
  color: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  format: _react.PropTypes.string
};
exports.default = PlaceholderImage;
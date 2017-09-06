# React Placeholder Images [![Build Status](https://travis-ci.org/zhuber/react-placeholder-images.svg)](https://travis-ci.org/zhuber/react-placeholder-images) [![npm version](https://badge.fury.io/js/react-placeholder-images)](http://badge.fury.io/js/react-placeholder-images)

<img src="https://via.placeholder.com/500x200/F48942?text=Cool,+component+bro" />

Image placeholder component, utilizing images from placeholder.com (formerly placehold.it).

# Options
- text
- width
- height (optional)
- color
- textColor
- format

# Usage

```javascript
import { PlaceholderImage } from 'react-placeholder-images';

class Demo extends React.Component {
  render() {
    return (
      <PlaceholderImage
        width={500}
        height={225}
        color="F48942"
        textColor="FFFFFF"
        text="Text, color & textColor"
      />
      <br />
      <PlaceholderImage
        width={500}
        height={100}
        text="Text, no color"
      />
      <br />
      <PlaceholderImage
        width={500}
        height={100}
        color="1E5EFF"
      />
      <br />
      <PlaceholderImage
        width={500}
        format="png"
      />
    );
  }
}
```

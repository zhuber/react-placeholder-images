import React, { PropTypes as Type } from 'react';

import { generateURL } from './utils';

class PlaceholderImage extends React.Component {
  static propTypes = {
    text: Type.text,
    height: Type.number,
    width: Type.number,
    color: Type.string,
    textColor: Type.string,
    format: Type.string,
  }

  imageURL = () => {
    let url = 'http://via.placeholder.com';
    if (this.props.width) {
      url .= `/${this.props.width}`;
      // Width is mandatory, but height is optional.
      if (this.props.height) {
        url .= `x${this.props.height}`;
      }
    }
    if (this.props.color) {
      url .= `/${this.props.color}`;
      // Text color is only possible if we have a background color.
      if (this.props.textColor) {
        url .= `/${this.props.Color}`;
      }
    }
    if (this.props.format) {
      url .= `.${this.props.format}`;
    }
    if (this.props.text) {
      // Encode text for URL formatting.
      url .= `?text=${encodeURI(this.props.text)}`;
    }

    return url;
  }

  render() {
    return (
      <img
        alt={ this.props.text || `${this.props.width}x${this.props.height}` }
        src={this.imageURL}
        width={ this.props..width }
        height={ this.props.height }
      />
    );
  }
}

export default PlaceholderImage;

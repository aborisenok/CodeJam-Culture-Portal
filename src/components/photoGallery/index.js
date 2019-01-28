import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './style.css';

class PhotoGallery extends Component {
  render() {
		const works = this.props.data.map((item) => {return {original : item, thumbnail : item}});
		return (
			<ImageGallery items={works} />
		)
  }
}

export default PhotoGallery;
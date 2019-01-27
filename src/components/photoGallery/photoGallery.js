import React from 'react';
import './style.css';

function PhotoGallery(props) {
  return (
        <section className="photo-gallery">
            <h2 className="gallery-title">Работы Автора:</h2>
		    <div className="gallery-container">
                {props.data.map(elem => <img src={elem}/>)}
            </div>
        </section>
    )
}

export default PhotoGallery;
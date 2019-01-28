import React, {Component} from 'react';
import Slider from "react-slick";
import './style.css';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <h2>Adaptive height</h2>
        <Slider {...settings}>
          <div>
            <img src='./img/person_1/portfolio/work2.jpg' alt='Первое фото'/>
          </div>
          <div>
            <img src='./img/person_1/portfolio/work2.jpg' alt='Первое фото'/>
          </div>
          <div>
            <img src='./img/person_1/portfolio/work3.jpg' alt='Первое фото'/>
          </div>
          <div>
            <img src='./img/person_1/portfolio/work4.jpg' alt='Первое фото'/>
          </div>
          <div>
            <img src='./img/person_1/portfolio/work5.jpg' alt='Первое фото'/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
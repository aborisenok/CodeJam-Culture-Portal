import React, { Component } from 'react';
import './style.scss';
import './style.css';
import ModalVideo from 'react-modal-video'

class VideoOverlay extends Component {
	constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal () {
    this.setState({isOpen: true})
  }  
  render () {
  	return (
    	<div>
      	<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.data} onClose={() => this.setState({isOpen: false})} />
				<div className='video-overlay'>
				<h3> Видео о фотографе: </h3>
        <button onClick={this.openModal}>Show Video</button>	
				</div>
			</div>   
		)		
  }
}

export default VideoOverlay;
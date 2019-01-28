import React, { Component } from 'react';
import Avatar from '../../components/personAvatar/index'
import BiographyTimeLine from '../../components/TimeLine/index';
import PhotoGallery from '../../components/photoGallery/index';
import VideoOverlay from '../../components/videoOverlay/index';
import people from '../../data/people';
import SimpleMap from '../../components/GoogleMap/index'
import './style.css'


class DescriptionPage extends Component {
  render() {
    let personId = parseInt(this.props.match.params.id);
    let profile = people.find((item) => item.id === personId);
    return (
      <main>
        <Avatar data={profile} />
        <BiographyTimeLine data={profile} />
        <SimpleMap data={profile.locationsCoords}/>
        <PhotoGallery data={profile.works} />
        {profile.videoId ? <VideoOverlay data={profile.videoId} /> : <p className='sorry-message'>Извинте, про данного фотографа видео нет :(</p>}
      </main>
    )
  }
}

export default DescriptionPage;
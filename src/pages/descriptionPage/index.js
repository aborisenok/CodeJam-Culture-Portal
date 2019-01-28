import React, { Component } from 'react';
import Avatar from '../../components/personAvatar/index'
import BiographyTimeLine from '../../components/TimeLine/index';
import people from '../../data/people';
import './style.css'

class DescriptionPage extends Component {
  render() {
		let personId = parseInt(this.props.match.params.id);
		let profile = people.find((item) => item.id === personId);
    return (
			<main>
				<Avatar data={profile} />
				<BiographyTimeLine data={profile} />
			</main>
    )
	}
}

export default DescriptionPage;
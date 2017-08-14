import React from 'react';
import PropTypes from 'prop-types';

import {Players} from '../api/players.js'

export default class AddPlayer extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		let playerName = event.target.playerName.value;
		if(playerName) {
			Players.insert({
				name: playerName,
				score: 0
			});
			event.target.playerName.value = '';
		}
	}

	render() {
		return (
			<div className="item">
				<form className='form' onSubmit={this.handleSubmit.bind(this)}>
					<input className='input' type="text" name="playerName" placeholder="Player Name"/>
					<button className='button'>Add Player</button>
				</form>
			</div>
		)
	}
};

AddPlayer.propTypes = {

};


AddPlayer.defaultProps = {

};
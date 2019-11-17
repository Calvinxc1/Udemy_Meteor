import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar.jsx';
import PlayerList from './PlayerList.jsx';
import AddPlayer from './AddPlayer.jsx';

import {Players, calculatePlayerPositions} from './../api/players.js';

export default class App extends React.Component {
	render() {
		var players = calculatePlayerPositions(Players.find({}, {sort: {score: -1}}).fetch())
		return (<div>
			<TitleBar title={'Score Keep'} subtitle="Created by Jason Cherry"/>
			<div className="wrapper">
				<PlayerList
					players={players}
				/>
				<AddPlayer />
			</div>
		</div>);
	}
}
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from '../imports/api/players.js';
import App from '../imports/ui/App.js';


Meteor.startup(() => {
	Tracker.autorun(() => {
		let title = 'Score Keep';
		let subtitle = 'Created by Jason Cherry';
		let players = Players.find({}, {sort: {
			score: -1,
			name: 1
		}}).fetch();
		let positionedPlayers = calculatePlayerPositions(players)
		ReactDOM.render(
			<App title={title} subtitle={subtitle} players={positionedPlayers}/>,
			document.getElementById('app')
		);
	});
});

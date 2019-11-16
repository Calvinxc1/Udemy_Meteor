import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDOM from 'react-dom';

import {Players} from './../imports/api/players.js';

const renderPlayers = function(playersList) {
	return playersList.map(function(player) {
		return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
	});
};

Meteor.startup(function() {
	var title = 'Account Settings';
	var name = 'Jason';
	Tracker.autorun(function () {
		var players = Players.find().fetch();
		var jsx = (<div>
			<h1>{title}</h1>
			<p>Hello {name}!</p>
			<p>This is my second p.</p>
			{renderPlayers(players)}
		</div>);
		ReactDOM.render(jsx, document.getElementById('app'));
	});

	Players.insert({
		name: 'Aardvark',
		score: 123
	});
});
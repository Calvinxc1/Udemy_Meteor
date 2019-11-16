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

const handleSubmit = function(event) {
	event.preventDefault();

	var playerName = event.target.playerName.value;
	if(playerName) {
		event.target.playerName.value = '';
		Players.insert({
			name: playerName,
			score: 0
		});
	}
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
			<form onSubmit={handleSubmit}>
				<input type="text" name="playerName" placeholder="Player name" />
				<button>Add Player</button>
			</form>
		</div>);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
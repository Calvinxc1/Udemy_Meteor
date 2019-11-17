import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDOM from 'react-dom';

import {Players} from './../imports/api/players.js';
import TitleBar from './../imports/ui/TitleBar.jsx';
import AddPlayer from './../imports/ui/AddPlayer.jsx';

const renderPlayers = (playersList) => {
	return playersList.map((player) => {
		return (
			<p key={player._id}>
				{player.name} has {player.score} point(s).
				<button onClick={() => {
					Players.update({'_id': player._id}, {'$inc': {'score': -1}});
				}}>-1</button>
				<button onClick={() => {
					Players.update({'_id': player._id}, {'$inc': {'score': 1}});
				}}>+1</button>
				<button onClick={() => {
					Players.remove({'_id': player._id});
				}}>X</button>
			</p>
		);
	});
};

const handleSubmit = (event) => {
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

Meteor.startup(() => {
	Tracker.autorun(() => {
		var players = Players.find().fetch();
		var jsx = (<div>
			<TitleBar title={'Score Keep'} subtitle={'By Jason M. Cherry'} />
			{renderPlayers(players)}
			<AddPlayer />
			<form onSubmit={handleSubmit}>
				<input type="text" name="playerName" placeholder="Player name" />
				<button>Add Player</button>
			</form>
		</div>);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
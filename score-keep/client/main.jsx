import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDOM from 'react-dom';

import {Players} from './../imports/api/players.js';
import TitleBar from './../imports/ui/TitleBar.jsx';
import AddPlayer from './../imports/ui/AddPlayer.jsx';
import PlayerList from './../imports/ui/PlayerList.jsx';

Meteor.startup(() => {
	Tracker.autorun(() => {
		var jsx = (<div>
			<TitleBar title={'Score Keep'} subtitle={'By Jason M. Cherry'} />
			<PlayerList players={Players.find().fetch()} />
			<AddPlayer />
		</div>);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
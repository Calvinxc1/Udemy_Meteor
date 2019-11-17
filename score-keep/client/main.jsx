import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDOM from 'react-dom';

import {Players} from './../imports/api/players.js';
import App from './../imports/ui/App.jsx';

Meteor.startup(() => {
	Tracker.autorun(() => {
		ReactDOM.render(
			<App title={'Score Keep'} players={Players.find().fetch()} />,
			document.getElementById('app')
		);
	});
});
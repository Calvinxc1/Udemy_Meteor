import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players.js';

Meteor.startup(function() {
	Players.insert({
		name: 'Jason',
		score: 43
	});
	console.log(Players.find().fetch());
});
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [];

Meteor.startup(function() {
	var title = 'Account Settings';
	var name = 'Jason';
	var jsx = (<div>
		<h1>{title}</h1>
		<p>Hello {name}!</p>
		<p>This is my second p.</p>
	</div>);
	ReactDOM.render(jsx, document.getElementById('app'));
});
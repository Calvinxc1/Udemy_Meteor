import React from 'react';
import ReactDOM from 'react-dom';

import {Meteor} from 'meteor/meteor';

import Signup from './../imports/ui/Signup.jsx';
import Link from './../imports/ui/Link.jsx';

Meteor.startup(() => {
	ReactDOM.render(<Link />, document.getElementById('app'));;
});
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Meteor} from 'meteor/meteor';

import Login from './../imports/ui/Login.jsx';
import Signup from './../imports/ui/Signup.jsx';
import Link from './../imports/ui/Link.jsx';
import NotFound from './../imports/ui/NotFound.jsx';

const routes = (<BrowserRouter><Switch>
	<Route exact path="/" component={Login} />
	<Route exact path="/signup" component={Signup} />
	<Route exact path="/links" component={Link} />
	<Route component={NotFound} />
</Switch></BrowserRouter>);

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById('app'));;
});
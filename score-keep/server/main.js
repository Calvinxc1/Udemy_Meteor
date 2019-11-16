import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players.js';

Meteor.startup(function() {
//	Players.insert({
//		name: 'Jason',
//		score: 43
//	});
//	console.log(Players.find().fetch());
	
//	var square = function(x) {
//		return x * x;
//	}
	
//	let square = (x) => x * x;

//	console.log(square(10));

//	var user = {
//		name: 'Jason',
//		sayHi() {
//			setTimeout(() => {
//				console.log(this.name);
//			}, 1000);
//		}
//	};
//	user.sayHi(1, 2)

	var numbers = [9, 99, 4, 56];
	var newNumbers = numbers.map((number) => number + 1);
	console.log(newNumbers)
});
import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players.js';

Meteor.startup(() => {
	class Person {
		constructor(name='Anonymous', age=0) {
			this.name = name;
			this.age = age;
		}

		getGreeting() {
			return `Hi! I am ${this.name}`;
		}

		getPersonDescription() {
			return `${this.name} is ${this.age} year(s) old.`
		}
	}

	var me = new Person('Jason');
	console.log(me.getGreeting());

	var person = new Person('Erin', 36)
	console.log(person.getPersonDescription())
});
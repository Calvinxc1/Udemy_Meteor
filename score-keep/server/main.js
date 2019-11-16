import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players.js';

Meteor.startup(() => {
	class Person {
		constructor(name='Anonymous', age=0) {
			this.name = name;
			this.age = age;
		}

		getGreeting() {
			return `Hi! I am ${this.name}.`;
		}

		getPersonDescription() {
			return `${this.name} is ${this.age} year(s) old.`;
		}
	}

	class Employee extends Person {
		constructor(name, age, title) {
			super(name, age);
			this.title = title;
		}

		getGreeting() {
			if(this.title) {
				return `Hi! I am ${this.name}. I work as a ${this.title}.`;
			} else {
				return super.getGreeting();
			}
		}

		hasJob() {
			return !!this.title;
		}
	}

	class Programmer extends Person {
		constructor(name, age, preferredLanguage='assembly') {
			super(name, age);
			this.preferredLanguage = preferredLanguage;
		}

		getGreeting() {
			return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
		}
	}

	var me = new Employee('Jason', 36, 'db admin');
	console.log(me.getGreeting());

	var person = new Employee('Erin', 36);
	console.log(person.getGreeting());

	var programmer = new Programmer('Cody', 42, 'Python');
	console.log(programmer.getGreeting())
});
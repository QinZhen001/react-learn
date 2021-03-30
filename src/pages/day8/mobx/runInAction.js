import {observable,runInAction,autorun} from 'mobx'


var person = observable({
	firstName: 'Matt',
	lastName: 'Ruby',
	age: 0,
	get fullName () {
		console.count('fullName');
		return this.firstName + ' ' + this.lastName;
	}
});

autorun(function auto_fullNameAge () {
	console.log('autorun: ' + person.fullName + ' ' + person.age);
});


runInAction(()=>{
    person.firstName = 'Jon';
	person.lastName = 'Smith';
})
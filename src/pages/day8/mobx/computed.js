import {observable,autorun} from 'mobx'


var person = observable({
	firstName: 'Matt',
	lastName: 'Ruby',
	age: 0,
    get fullName () {
		// Note how this computed value is cached.
		// We only hit this function 3 times.
		console.log('hit fullName');
		return this.firstName + ' ' + this.lastName;
	}
});


autorun(function auto_fullNameAge () {
	console.log('autorun: ' + person.fullName + ' ' + person.age);
});




person.firstName = 'Mike';
person.firstName = 'Lissy';



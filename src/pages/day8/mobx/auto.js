import _ from 'lodash'
import {observable,autorun} from 'mobx'


const person = observable({
    firstName:"Matt",
    lastName:"Ruby",
    age:0
})



autorun(()=>{
    console.log('autorun: ' + person.firstName + ' ' + person.age);
})


// 这个会触发autorun
_.times(10, function () {
	person.age = _.random(40);
});

// 这个不会触发autorun
_.times(10,()=>{
    person.lastName = _.random(40);
})








import { observable, reaction } from "mobx";
import _ from 'lodash'


const person = observable({
  firstName: "Matt",
  lastName: "Ruby",
  age: 0,
});

// note that this will not fire initially, only on change.
// so you will not see the age 0 run first unlike autorun.
reaction(
  () => {
    return person.firstName + " " + person.age;
  },
  (fnameAndAge) => {
    console.log("reaction: " + fnameAndAge + " " + person.lastName);
  }
);



// this will print Matt NN 10 times
_.times(10, function () {
	person.age = _.random(40);
});



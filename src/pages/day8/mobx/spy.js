import { observable, spy, autorun } from "mobx";
import _ from "lodash";

const person = observable({
  firstName: "Matt",
  lastName: "Ruby",
  age: 0,
});

spy((spyReport) => {
  // dig in here.  Have fun picking through all the different types.
  if (spyReport.type) {
    console.log(spyReport.type + ": rawSpyData: ", spyReport);
  }
});

autorun(() => {
  console.log(person.firstName + " " + person.age);
});

_.times(2, () => {
  person.age = _.random(40);
});

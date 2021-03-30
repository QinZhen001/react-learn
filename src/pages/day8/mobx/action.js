import { action, observable,autorun } from "mobx";
import _ from "lodash";

const person = observable({
  firstName: "Matt",
  lastName: "Ruby",
  age: 0,
  get fullName() {
    console.count("fullName");
    return this.firstName + " " + this.lastName;
  },
  setAge: action(function (age) {
    const self = this;
    // Note how action creates a transaction.
    // none of these random this.age assignments will affect the autorun.
    _.times(10,  function(){
      // 这里不起作用 
      // action 里面只支持同步修改 不支持这种异步修改 （可以采用 runInAction 这种异步修改）  
      self.age = _.random(40);
    });
     // this will set as it's the last part of the transaction
     this.age = age;
  }),
});



autorun(function auto_fullNameAge () {
    console.log('autorun: ' + person.fullName + ' ' + person.age);
});

person.setAge(1111111);

import {observable,autorun,runInAction} from 'mobx'

const person =  observable({
    stats:observable.map({})
})

// console.log(person)
// debugger



autorun(()=>{
    console.log('autorun: ' + person);
})


person.stats.set('height',155)




runInAction(()=>{
    person.stats.set('weight', 160);
})

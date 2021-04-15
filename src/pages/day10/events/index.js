import EventEmitter from 'events'

var ee = new EventEmitter()

ee.on('message',(msg)=>{
    console.log(111,msg)
})


ee.emit('message','hello world')


class MyClass extends EventEmitter{
    constructor(aaa='aaa'){
        super()
        this.aaa = aaa
    }
}

// console.log('MyClass',MyClass)

const my = new MyClass()
my.on('xxx',(msg)=>{
    console.log('xxxx',msg)
})
console.log('my',my)
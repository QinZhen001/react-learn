// 测试 Subject
import { Subject } from 'rxjs'

const subject = new Subject()



subject.subscribe((data)=>{
    console.log('订阅者1 ',data)
})


subject.subscribe((data)=>{
    console.log('订阅者2',data)
})

subject.next(Math.random());

















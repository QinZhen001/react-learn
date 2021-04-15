// BehaviorSubject 例子
import {BehaviorSubject} from 'rxjs'


const subject = new BehaviorSubject(0)


subject.subscribe({
    next:(v) => console.log('observer A ',v)
})



subject.next(1)
subject.next(2)


subject.subscribe({
    next:(v) => console.log('observer B',v)
})


subject.next(3)




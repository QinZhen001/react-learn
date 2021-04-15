// 简单例子
import {Observable} from 'rxjs'

const observable = new Observable((obeserver)=>{
    obeserver.next(1)
    obeserver.next(2)
    obeserver.next(3)
})


const obeserver = {
    next: (x) => console.log('got value ' + x )
}



observable.subscribe(obeserver)














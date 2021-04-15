import { Observable } from 'rxjs'
import { clearInterval } from 'timers'

const observable = new Observable((observer)=>{
    let num = 1 
    let handle = setInterval(()=>{
        observer.next(num++)
        if(num > 10){
            clearInterval(handle)
            observer.error("something wrong");
            observer.complete();
        }
    },1000)

   
    return {
        unsubscribe:()=>{
            console.log('unsubscribe unsubscribe unsubscribe')
        }
    }

})


const observer = {
    next:(x) => console.log('xxxx ',x),
    error:(err)=> console.log(err),
    complete: () => console.log("complete")
}


const subscription = observable.subscribe(observer);
setTimeout(()=>{
    subscription.unsubscribe()
},5000)




























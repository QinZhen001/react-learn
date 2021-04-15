# 白板

## events

https://www.npmjs.com/package/events

这为没有该模块的环境(如浏览器)实现了Node.js事件模块。

https://nodejs.org/dist/v11.13.0/docs/api/events.html

## rxjs

https://juejin.cn/post/6889685748358840327


在 RxJS 中，一个 Observable 对象只有一种终结状态，要么是完结（complete），要么是出错（error）。一旦进入完结状态，不论是 error 还是 complete 都将不再调用 observer 的其他函数。


Observable 产生的事件，只有 Observer 通过 subscribe 订阅之后才会收到，在 unsubscribe 之后就不会再收到。

如果没有主动unsubscribe，observer.complete之后也会触发unsubscribe事件


每个 Observable 仅会被退订一次，complete 和 error 这两个代表结束的函数调用后紧接会着调用 unsubscribe。另一种情况，如果在 complete 或 error 前主动进行 subscription.unsubscribe 退订，那么 complete 或 error 都不会执行并且退订。

### Subject

Subject可以实现一个消息向多个订阅者推送消息

Subject 主要是为了多播（multicast）Observable 默认是单播（unicast）的

```js
import * as Rx from "rxjs";

const subject = new Rx.Subject();

// 订阅者 1
subject.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (随机数)
});

// 订阅者 2
subject.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (随机数)
});

subject.next(Math.random());
```



#### BehaviorSubject

Subject 的其中一个变体就是 `BehaviorSubject`，它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 `BehaviorSubject` 那接收到“当前值”。

BehaviorSubjects 适合用来表示“随时间推移的值”。举例来说，生日的流是一个 Subject，但年龄的流应该是一个 BehaviorSubject 。
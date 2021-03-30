# mobx 和 mobx-react

https://my.oschina.net/u/4581386/blog/4368586

## mobx-react

react-redux通过`setState({})`来触发Container更新，而mobx-react通过`forceUpdate`来触发被劫持的View更新：

```js
const initialRender = () => {
    if (this.__$mobxIsUnmounted !== true) {
        let hasError = true
        try {
            isForcingUpdate = true
            if (!skipRender) Component.prototype.forceUpdate.call(this)
            hasError = false
        } finally {
            isForcingUpdate = false
            if (hasError) reaction.dispose()
        }
    }
}
```












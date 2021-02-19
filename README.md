# react-learn

此项目用来学习react，写一些react的demo

## day1



## day2



## day3



## day4



## day5

改变父组件state，触发子组件重新渲染



可控性组件和非可控性的区别就是`dom`元素值是否与受到`react`数据状态`state`控制。一旦由`react的state`控制数据状态，比如`input`输入框的值，就会造成这样一个场景，为了使`input`值实时变化，会不断`setState`，就会不断触发`render`函数，如果父组件内容简单还好，如果父组件比较复杂，会造成牵一发动全身，如果其他的子组件中`componentWillReceiveProps`这种带有副作用的钩子，那么引发的蝴蝶效应不敢想象。比如如下`demo`。


作者：我不是外星人
链接：https://juejin.cn/post/6908895801116721160
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
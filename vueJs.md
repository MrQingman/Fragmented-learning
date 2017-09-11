# 9.11学习笔记
## markdown
> [快速学习地址](http://www.cnblogs.com/liugang-vip/p/6337580.html)
---
<br>

---
# v-cloak
## Useage
><font size=3>&nbsp;&nbsp;&nbsp;这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
* [示例](https://cn.vuejs.org/v2/api/#v-pre)
```
<!-- Css -->
[v-cloak]{
    display:none;
}
```
```
<!-- html -->
<div v-cloak>
{{message}}
</div>
```
## Tip
> * @import 是在页面 DOM 完全载入后才会进行加载，如果我们将 [v-cloak] 写在 @import 加载的 css 文件中，就会导致页面仍旧闪烁。
> * 为了避免这种情况，我们可以将 [v-cloak] 写在 link 引入的 css 中，或者写一个内联 css 样式，这样就得到了解决。
> * Vue1.x 与 Vue2 中 v-cloak 的不同,Vue1 中，允许将 Vue 实例挂载在 body 上，而 Vue2 是不允许的，想对整个页面实例化，需要另外用一个 div 来容纳整个页面内容，对其进行实例化
---
## 事件修饰符
#### v-on提供事件修饰符
>- .stop  阻止冒泡事件流
>- .prevent 阻止默认事件
>- .capture 添加事件监听器使用事件捕获模式
>- .self   只有当事件在元素本身上，才会触发回调函数    
>- .once  点击事件将只会触发一次
#### demo
```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（比如不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```
> tip
    >><font size=3 color=red>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 @click.prevent.self 会阻止所有的点击，而 @click.self.prevent 只会阻止元素上的点击。</font>
## [键值修饰符](https://cn.vuejs.org/v2/guide/events.html#修饰键)
>按键别名
* >>*.enter*
* >>*.tab*
* >>*.delete*(捕获 “删除” 和 “退格” 键)
* >>*.esc*
* >>*.space*
* >>*.up*
* >>*.down*
* >>*.left*
* >>*.right*
### 全局config.keyCodes对象自定义键值修饰符别名
```
Vue.config.keyCodes.f1 = 112
```
## 修饰键
>可以用如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应。
* .ctrl
* .alt
* .shift
* .meta
>修饰键比正常的按键不同；修饰键和 keyup 事件一起用时，事件引发时必须按下正常的按键。换一种说法：如果要引发 keyup.ctrl，必须按下 ctrl 时释放其他的按键；单单释放 ctrl 不会引发事件。
>>个人理解只能按目标的键位，来触发事件。
* [demo](https://cn.vuejs.org/v2/guide/events.html#修饰键)
## 鼠标按钮修饰符
* .left
* .right
* .middle
>这些修饰符会限制处理程序监听特定的滑鼠按键。
---
## [vm.$set](https://cn.vuejs.org/v2/api/#vm-set)
### 全局API Vue.set(target,key,vakue)别名vm.$set
#### 参数
 * {Object | Array} target
 * {string | number} key
 * {any} value
#### 返回值
* 设置的值
#### 用法
>&nbsp;&nbsp;&nbsp;设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。
>>注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
---
## [vm.$refs](https://cn.vuejs.org/v2/api/#ref)
> 一个对象，其中包含了所有拥有 ref 注册的子组件。
### [子组件引用](https://cn.vuejs.org/v2/guide/components.html#子组件索引)
> &nbsp;&nbsp;Javascript直接访问子组件,使用ref为子组件指定组件一个索引ID。
#### tips
><font color="red">当 ref 和 v-for 一起使用时，ref 是一个数组，包含相应的子组件。
>>$refs只能在组件渲染完成后才填充,非响应式的
</font>
### [特殊特性ref](https://cn.vuejs.org/v2/api/#ref)
>&nbsp;&nbsp;&nbsp;ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例:
>当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

>关于ref注册时间的重要说明: 因为ref本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。

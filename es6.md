## [合并数组](http://es6.ruanyifeng.com/#docs/array)
# 9.12学习笔记
## [变量的解构赋值](http://es6.ruanyifeng.com/?search=bable&x=0&y=0#docs/destructuring)
### 数组解构赋值
#### useage
> ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被称为解构(Destructuring)
```
let=[a,b,c]=[1,2,3];
````
* *要点一：* 如果结构不成功，变量的值就等于undefined
```
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4] 内部将[2,3,4]作为数组赋值给tail，在进行合并，控制台不能输出变化，个人理解

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []   如果没有值匹配的数组变量，默认作为空数组
```
* *要点二：* 不完全解构，即等号左边的模式，只匹配一部分等号右边的数组。这种情况下，解构依然成功。
```
let [x,y]=[1,2,3];
//[1,2]
let [a,b,c]=[1,[2,3],4];
//[1,2,4]
```
* *要点三:* 如果等号的右边不是数组,那么将会报错
```
let [foo]=1;
let [foo]=false;
let [foo]=NaN;
let [foo]=undefined;
let [foo]=null;
//上面四个表达式转换为对象之后，不具备iterator接口
let [foo]={};//本身不具备iterator接口
```
#### [iterator概念](http://es6.ruanyifeng.com/?search=bable&x=0&y=0#docs/iterator)
* *要点四：* 只要某种数据结构具有Iterator接口,都可以采用数组形式的解构赋值。
### <font color="pink">数组解构默认值</font>
* *要点一：* 解构赋值允许指定默认值。
```
let [x = 1,y = 2]=[];
//默认[1,2]
```
* *要点二：* 默认值生效条件。ES6内部使用严格相等运算符===，判断一个位置是否有值，不严格相等，默认值不生效。例如null.
```
let [x = 1,y = 2]=[undefined]; //x = 1 y = 2
let [x = 1,y = 2]=[null]; // x = null y = 2
```
* *要点三：* 默认是表达式，会惰性求值。
```
function aa(){
    console.log("aaa");
}
let [x = aa()]=[1];
//等价于
if ([1][0] === undefined){
    x = aa();
} else {
    x = [1][0]
}
```
* *要点四：* 解构赋值在使用默认值时，可以使用前面声明的变量进行赋值，如果使用后面的变量赋值给前面变量会出现undefined.总之变量使用不能调用未声明的变量。
```
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError
```
* *总结：* 解构赋值过程中声明的变量在相同的作用域内，*声明的变量名可以调用*在其他解构赋值中，变量名不能重复*声明*否则会编译不成功，报错。
---
# 9.13学习笔记
### <font color="pink">对象的解构赋值</font>
* *要点一：* 对象的解构赋值与数组有一个重要的不同。数组解构赋值是按照次序排列的，变量的取值有它的位置决定的，而对象的解构赋值，是通过对象的属性名和变量同名来进行赋值，和次序无关。
```
let { a, b, c}={ c:2, a:3, b:6};
console.log({a,b,c});//{3,6,2}
```
* *要点二：* 变量和属性名不一致的写法 
```
//变量名和属性名不一致写法
let obj = { x: 88, y: 88 };
let { x: aa, y: bb } = obj;
console.log({ x: aa, y: bb });
```
>这实际就说明对象的解构赋值是下面形式的简写:
```
var {x:x,y:y}={x:"boy",y:"girl"};
```
>也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
* *要点三：* 对象的解构赋值与数组一样，也可以y用于嵌套结构的对象。
```
let obj1 = {
    p: ["hello", { g: "box" }]
};
let { p, p: [q, { g }] } = obj1;
console.log({ p, p: [q, { g }] });

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc, loc: { start }, loc: { start: { line } } } = node;

console.log({ loc, loc: { start }, loc: { start: { line } } });
//个人批注
//控制台只输出了一个包含loc属性的对象，这个属性值以解构最完全的一个赋值
//在ES6语法声明中，loc，start就被叫做模式
```
```
let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log({ foo: obj.prop, bar: arr[0] });//({ foo: obj.prop, bar: arr[0] }
console.log(obj)//同时也给对象进行了赋值
```
* *要点四：* 对象解构也可以指定默认值,生效条件和数组一样，严格等于undefined
```
var {x: y = 3} = {x:5};
console.log({x:y});//y值作为变量,x作为模式{x:5},y值默认为3，将5赋值给y;
```
>与数组一样如果为null不完全等于undefined，默认值是不会生效的
* *要点五：* 解构失败,变量值等于undefined;
```
let {foo} = {bar: 'baz'};
foo // undefined
```
* *要点六：* 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
```
// 报错
let {foo: {bar}} = {baz: 'baz'};
//foo 这时是undefined，再取子属性就会报错， 
let _tmp = {baz: 'baz'};
_tmp.foo.bar // 报错
```
* *要点七：* 如何将一个以声明的变量用于解构赋值？
```
let x;
({x}={x:1});

({})={}//这种方式的解构赋值无意义但是可以正常运行
```
* *要点八：* 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
```
let { log, sin, cos } = Math;
//数组本质是特殊的对象，也可以对数组进行对象解构
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
```
---
### <font color="pink">字符串的解构赋值</font>
* *要点一：* 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
* *要点二：* 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
```
const [a,b,c,f,d]='hello';
console.log([a,b,c,f,d]);
let {length:len}='boxsdsd';
console.log({length:len});//len:7
```
---
### <font color="pink">数值和布尔值的解构赋值</font>
* *要点一：* 解构赋值时等号右边是数组或者布尔值，则会先转化为对象.(他们的对象都有toString属性)
* *要点二：* 解构赋值d额规则是,只要等号右边的值不是对象或数组,就先将其转化为对象。由于undefined和null无法转换为对象就会报错。
```
let {toString:s}=456;
console.log(s===Number.prototype.toString );//true
let {prop:x}=undefined //type error
let {prop:y}=null //type error
```
### <font color="pink">函数参数的解构赋值</font>
>函数参数也可以使用解构赋值
```
//函数参数的解构赋值
//console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

function add([x,y]){
    return x+y;
}
console.log(add([2,3]));

function def({a=0,b=0}={}){// a=0 b=0 是a和b的默认值 ES6中函数参数默认值有=链接 参数默认值为{}
    return a+b;
}
console.log(def({a:1,b:2}));

function go({a,b}={a:0,b:0}){
    return [a,b];
}
console.log(go({a:2,b:3}));
console.log(go({}));//undefined undeined 用空对象去解构赋值，在对象中解构不成功就会出现undefined
console.log();//没有参数，就会调用默认参数 [0,0]
[1,undefined,3].map((x='yes')=>x);// [1,'yes,3] undefined 会触发函数参数的默认值

```








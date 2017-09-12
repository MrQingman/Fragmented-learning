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
### 数组解构默认值
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
* *总结：* 解构赋值过程中声明的变量在，相同的作用域内，*声明的变量名可以调用*在其他解构赋值中，变量名不能重复*声明*否则会编译不成功，报错。
/*
let [a, b, c, d] = [3, 3, 1, 2];
console.log([a, b, c, d]); //3,3,1,2
let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];
console.log([foo, [
    [bar], baz
]]); //1,[[2],3]
let [, , [q]] = ["one", "two", ["three"]];
console.log([, , [q]]);
let [head, ...tail] = [1, 2, 3, 4];
let cc=[head,...tail];
console.log(cc[2]);
console.log([head, ...tail]);
let [x, y, ...z] = ['a'];
//let [aa]=1;

//默认值
let [other=true]=[111];
console.log([other]);
// let [pra1=1,pra2=2]=[];
// console.log([pra1,pra2]);
//let [pra1=1,pra2=pra1]=[];
let [pra1=pra2,pra2=other]=[2];
console.log([pra1,pra2]);
let [de=1]=[null];
console.log([de]);
 [pra1=1,pra2=2]=[2];
*/



//对象解构赋值
/*
let { a, c, b } = { a: 1, b: 2 };
({ a, b } = { a: 1, b: 3 });
console.log({ a, c, b });

//变量名和属性名不一致写法
let obj = { x: 88, y: 88 };
let { x: aa, y: bb } = obj;
console.log({ x: aa, y: bb });

//对象解构和数组一样，也可用于嵌套结构对象

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
//控制台只输出了一个包含LOC属性的对象，这个属性值以解构最完全的一个赋值
//在ES6语法声明中，loc就被叫做模式
*/

/*
let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log({ foo: obj.prop, bar: arr[0] });//({ foo: obj.prop, bar: arr[0] }
console.log(obj)//同时也给对象进行了赋值
*/

//对象解构也支持默认值
/*var {x: y = 3} = {x:5};
console.log({x:y});//y值作为变量,x作为模式{x:5},y值默认为3，讲5赋值给y;
*/





/***字符串解构赋值 */
/*const [a,b,c,f,d]='hello';
console.log([a,b,c,f,d]);
let {length:len}='boxsdsd';
console.log({length:len});//len:7*/


/*****数值和布尔值解构赋值 */
/*let {toString:s}=456;
console.log(s===Number.prototype.toString );//true*/
// var aa=[1,2];
// var bb=[2,3];
// var cc=aa+bb;
// console.log(cc);


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




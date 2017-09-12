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
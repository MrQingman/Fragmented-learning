"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var a = 3,
    b = 3,
    c = 1,
    d = 2;

console.log([a, b, c, d]); //3,3,1,2
var foo = 1,
    bar = 2,
    baz = 3;

console.log([foo, [[bar], baz]]); //1,[[2],3]

var _ref = ["one", "two", ["three"]],
    _ref$ = _slicedToArray(_ref[2], 1),
    q = _ref$[0];

console.log([,, [q]]);
var head = 1,
    tail = [2, 3, 4];

var cc = [head].concat(_toConsumableArray(tail));
console.log(cc[2]);
console.log([head].concat(_toConsumableArray(tail)));

var _ref2 = ['a'],
    x = _ref2[0],
    y = _ref2[1],
    z = _ref2.slice(2);
//let [aa]=1;

//默认值


var _ = 111,
    other = _ === undefined ? true : _;

console.log([other]);
// let [pra1=1,pra2=2]=[];
// console.log([pra1,pra2]);
//let [pra1=1,pra2=pra1]=[];
var _ref3 = [2],
    _ref3$ = _ref3[0],
    pra1 = _ref3$ === undefined ? pra2 : _ref3$,
    _ref3$2 = _ref3[1],
    pra2 = _ref3$2 === undefined ? other : _ref3$2;

console.log([pra1, pra2]);
var _ref4 = null,
    de = _ref4 === undefined ? 1 : _ref4;

console.log([de]);
var _ref5 = [2];
var _ref5$ = _ref5[0];
pra1 = _ref5$ === undefined ? 1 : _ref5$;
var _ref5$2 = _ref5[1];
pra2 = _ref5$2 === undefined ? 2 : _ref5$2;
_ref5;
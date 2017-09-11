# Javascript
## Object 对象
### hasOwnProperty()函数
>* hasOwnProperty()函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性。如果有，返回true，否则返回false。
>* 该方法属于Object对象，由于所有的对象都"继承"了Object的对象实例，因此几乎所有的实例对象都可以使用该方法。
#### 语法
`object.hasOwnProperty( propertyName )`
#### 返回值
>* hasOwnProperty()函数的返回值为Boolean类型。如果对象object具有名称为
>* propertyName的属性，则返回true，否则返回false。
>* 此方法不会检查对象的原型链中是否存在该属性，该属性只有是对象本身的一个成员才会返回true。
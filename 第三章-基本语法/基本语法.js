/**
 * 1- 语法
 *    1.1- 区分大小写
 *    1.2- 标识符
 *    1.3- 注释
 *    1.4- 严格模式 （es6 新语法）
 *    1.5- 语法： 分号结尾 + 多条语句组成的代码块需要大括号包起来
 */

/**
 * 2- 关键字/保留字
 */

/**
 * 3- 变量
 *   有三个关键字可以声明变量 var let const
 */
/**
 * 3.1- var
 *    3.1.1- 函数作用域（与let的块作用域对比）
 *        note：如果忘记写var，直接a = 1,则a默认为全局变量，很难维护
 *    3.1.2- 变量提升
 *        - 定义变量的操作会自动在作用域顶部进行；赋值操作则在var定义处执行，所以可能出现打印出来变量值为undefined的情况
 *    3.1.3- 逗号隔开声明多个变量
 *    3.1.4- 可以反复声明一个变量
 *    3.1.5- 全局声明的变量会成为window对象的属性
 */
var a = 1;
var a = 2;
var a = 3;
var a = 4;
/**
 * 3.2- let
 *    3.2.1- 块级作用域
 *    3.2.2- 不允许重复声明
 *    3.2.3- 没有变量提升
 *    3.2.4- 全局声明
 *        note：let在全局作用域声明的变量不会成为window对象的属性
 *    3.2.5- 不能使用条件声明模式（看了一下，很无用的一个操作，如果你在使用这种模式，那一定有更好的替代方式）
 */
var b;
let b;
// Uncaught SyntaxError: Identifier 'b' has already been declared
/**
 * 3.3- const
 *    ...与let声明相同
 *    3.3.1- 必须初始化一个值，且不允许修改该值，obj和array修改内部属性并不违反const的限制
 */


/**
 * 4- 数据类型
 *    简单数据类型
 *      4.1- undefined
 *      4.2- null
 *      4.3- boolean
 *      4.4- number
 *      4.5- string
 *      4.6- symbol（es6 新增）
 *    复杂数据类型
 *      4.7- object
 */
/**
 * 4.1- typeof 操作符 ｜ 确认变量的数据类型
 *    4.1.2- typeof是操作符，不是一个function，使用时后面可以直接跟待判断变量，也可以使用类似函数调用的方式，都是可以的
 *
  typeof （undefined）
  'undefined'

  typeof null
  'object'

  typeof 2222
  'number'

  typeof '-2222'
  'string'

  typeof {}
  'object'

  typeof []
  'object'

  typeof ()=>{}
  'function'
 */


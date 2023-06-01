(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{1008:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说-node-js-有哪些全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-node-js-有哪些全局对象"}},[s._v("#")]),s._v(" 面试官：说说 Node. js 有哪些全局对象？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/79c7b100-c2a3-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),a("p",[s._v("在浏览器 "),a("code",[s._v("JavaScript")]),s._v(" 中，通常"),a("code",[s._v("window")]),s._v(" 是全局对象， 而 "),a("code",[s._v("Nodejs")]),s._v("中的全局对象是 "),a("code",[s._v("global")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("NodeJS")]),s._v("里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过"),a("code",[s._v("exports")]),s._v("对象的使用将其传递给模块外部")]),s._v(" "),a("p",[s._v("所以，在"),a("code",[s._v("NodeJS")]),s._v("中，用"),a("code",[s._v("var")]),s._v("声明的变量并不属于全局的变量，只在当前模块生效")]),s._v(" "),a("p",[s._v("像上述的"),a("code",[s._v("global")]),s._v("全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值")]),s._v(" "),a("h2",{attrs:{id:"二、有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、有哪些"}},[s._v("#")]),s._v(" 二、有哪些")]),s._v(" "),a("p",[s._v("将全局对象分成两类：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("真正的全局对象")])]),s._v(" "),a("li",[a("p",[s._v("模块级别的全局变量")])])]),s._v(" "),a("h3",{attrs:{id:"真正的全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真正的全局对象"}},[s._v("#")]),s._v(" 真正的全局对象")]),s._v(" "),a("p",[s._v("下面给出一些常见的全局对象：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Class:Buffer")])]),s._v(" "),a("li",[a("p",[s._v("process")])]),s._v(" "),a("li",[a("p",[s._v("console")])]),s._v(" "),a("li",[a("p",[s._v("clearInterval、setInterval")])]),s._v(" "),a("li",[a("p",[s._v("clearTimeout、setTimeout")])]),s._v(" "),a("li",[a("p",[s._v("global")])])]),s._v(" "),a("h4",{attrs:{id:"class-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-buffer"}},[s._v("#")]),s._v(" Class:Buffer")]),s._v(" "),a("p",[s._v("可以处理二进制以及非"),a("code",[s._v("Unicode")]),s._v("编码的数据")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Buffer")]),s._v("类实例化中存储了原始数据。"),a("code",[s._v("Buffer")]),s._v("类似于一个整数数组，在V8堆原始存储空间给它分配了内存")]),s._v(" "),a("p",[s._v("一旦创建了"),a("code",[s._v("Buffer")]),s._v("实例，则无法改变大小")]),s._v(" "),a("h4",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[s._v("#")]),s._v(" process")]),s._v(" "),a("p",[s._v("进程对象，提供有关当前进程的信息和控制")]),s._v(" "),a("p",[s._v("包括在执行"),a("code",[s._v("node")]),s._v("程序进程时，如果需要传递参数，我们想要获取这个参数需要在"),a("code",[s._v("process")]),s._v("内置对象中")]),s._v(" "),a("p",[s._v("启动进程：")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" node index.js 参数1 参数2 参数3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("index.js文件如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mjr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("work"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("除此之外，还包括一些其他信息如版本、操作系统等")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/85f473a0-c2a3-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[s._v("#")]),s._v(" console")]),s._v(" "),a("p",[s._v("用来打印"),a("code",[s._v("stdout")]),s._v("和"),a("code",[s._v("stderr")])]),s._v(" "),a("p",[s._v("最常用的输入内容的方式：console.log")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("清空控制台：console.clear")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clear\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打印函数的调用栈：console.trace")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/91b6dbb0-c2a3-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"clearinterval、setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clearinterval、setinterval"}},[s._v("#")]),s._v(" clearInterval、setInterval")]),s._v(" "),a("p",[s._v("设置定时器与清除定时器")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("callback")]),s._v("每"),a("code",[s._v("delay")]),s._v("毫秒重复执行一次")]),s._v(" "),a("p",[a("code",[s._v("clearInterval")]),s._v("则为对应发取消定时器的方法")]),s._v(" "),a("h4",{attrs:{id:"cleartimeout、settimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleartimeout、settimeout"}},[s._v("#")]),s._v(" clearTimeout、setTimeout")]),s._v(" "),a("p",[s._v("设置延时器与清除延时器")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("callback")]),s._v("在"),a("code",[s._v("delay")]),s._v("毫秒后执行一次")]),s._v(" "),a("p",[a("code",[s._v("clearTimeout")]),s._v("则为对应取消延时器的方法")]),s._v(" "),a("h4",{attrs:{id:"global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global"}},[s._v("#")]),s._v(" global")]),s._v(" "),a("p",[s._v("全局命名空间对象，墙面讲到的"),a("code",[s._v("process")]),s._v("、"),a("code",[s._v("console")]),s._v("、"),a("code",[s._v("setTimeout")]),s._v("等都有放到"),a("code",[s._v("global")]),s._v("中")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"模块级别的全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块级别的全局对象"}},[s._v("#")]),s._v(" 模块级别的全局对象")]),s._v(" "),a("p",[s._v("这些全局对象是模块中的变量，只是每个模块都有，看起来就像全局变量，像在命令交互中是不可以使用，包括：")]),s._v(" "),a("ul",[a("li",[s._v("__dirname")]),s._v(" "),a("li",[s._v("__filename")]),s._v(" "),a("li",[s._v("exports")]),s._v(" "),a("li",[s._v("module")]),s._v(" "),a("li",[s._v("require")])]),s._v(" "),a("h4",{attrs:{id:"dirname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname"}},[s._v("#")]),s._v(" __dirname")]),s._v(" "),a("p",[s._v("获取当前文件所在的路径，不包括后面的文件名")]),s._v(" "),a("p",[s._v("从 "),a("code",[s._v("/Users/mjr")]),s._v(" 运行 "),a("code",[s._v("node example.js")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印: /Users/mjr")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[s._v("#")]),s._v(" __filename")]),s._v(" "),a("p",[s._v("获取当前文件所在的路径和文件名称，包括后面的文件名称")]),s._v(" "),a("p",[s._v("从 "),a("code",[s._v("/Users/mjr")]),s._v(" 运行 "),a("code",[s._v("node example.js")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印: /Users/mjr/example.js")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[s._v("#")]),s._v(" exports")]),s._v(" "),a("p",[a("code",[s._v("module.exports")]),s._v(" 用于指定一个模块所导出的内容，即可以通过 "),a("code",[s._v("require()")]),s._v(" 访问的内容")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sayHello "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sayHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[s._v("#")]),s._v(" module")]),s._v(" "),a("p",[s._v("对当前模块的引用，通过"),a("code",[s._v("module.exports")]),s._v(" 用于指定一个模块所导出的内容，即可以通过 "),a("code",[s._v("require()")]),s._v(" 访问的内容")]),s._v(" "),a("h4",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[s._v("#")]),s._v(" require")]),s._v(" "),a("p",[s._v("用于引入模块、 "),a("code",[s._v("JSON")]),s._v("、或本地文件。 可以从 "),a("code",[s._v("node_modules")]),s._v(" 引入模块。")]),s._v(" "),a("p",[s._v("可以使用相对路径引入本地模块或"),a("code",[s._v("JSON")]),s._v("文件，路径会根据"),a("code",[s._v("__dirname")]),s._v("定义的目录名或当前工作目录进行处理")]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://nodejs.cn/api/globals.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nodejs.cn/api/globals.html"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vue3js.cn/interview"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
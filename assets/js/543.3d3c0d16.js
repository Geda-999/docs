(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1012:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说对-node-中的-stream-的理解-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说对-node-中的-stream-的理解-应用场景"}},[t._v("#")]),t._v(" 面试官：说说对 Node 中的 Stream 的理解？应用场景？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/a5df3c60-c76f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序的,是逐块读取数据、处理内容，用于顺序读取输入或写入输出")]),t._v(" "),a("p",[a("code",[t._v("Node.js")]),t._v("中很多对象都实现了流，总之它是会冒数据（以 "),a("code",[t._v("Buffer")]),t._v(" 为单位）")]),t._v(" "),a("p",[t._v("它的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中")]),t._v(" "),a("p",[t._v("流可以分成三部分："),a("code",[t._v("source")]),t._v("、"),a("code",[t._v("dest")]),t._v("、"),a("code",[t._v("pipe")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("source")]),t._v("和"),a("code",[t._v("dest")]),t._v("之间有一个连接的管道"),a("code",[t._v("pipe")]),t._v(",它的基本语法是"),a("code",[t._v("source.pipe(dest)")]),t._v("，"),a("code",[t._v("source")]),t._v("和"),a("code",[t._v("dest")]),t._v("就是通过pipe连接，让数据从"),a("code",[t._v("source")]),t._v("流向了"),a("code",[t._v("dest")]),t._v("，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/aec05670-c76f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、种类"}},[t._v("#")]),t._v(" 二、种类")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("NodeJS")]),t._v("，几乎所有的地方都使用到了流的概念，分成四个种类：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可写流：可写入数据的流。例如 fs.createWriteStream()  可以使用流将数据写入文件")])]),t._v(" "),a("li",[a("p",[t._v("可读流： 可读取数据的流。例如fs.createReadStream() 可以从文件读取内容")])]),t._v(" "),a("li",[a("p",[t._v("双工流： 既可读又可写的流。例如 net.Socket")])]),t._v(" "),a("li",[a("p",[t._v("转换流： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据")])])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("NodeJS")]),t._v("中"),a("code",[t._v("HTTP")]),t._v("服务器模块中，"),a("code",[t._v("request")]),t._v(" 是可读流，"),a("code",[t._v("response")]),t._v(" 是可写流。还有"),a("code",[t._v("fs")]),t._v(" 模块，能同时处理可读和可写文件流")]),t._v(" "),a("p",[t._v("可读流和可写流都是单向的，比较容易理解，而另外两个是双向的")]),t._v(" "),a("h3",{attrs:{id:"双工流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双工流"}},[t._v("#")]),t._v(" 双工流")]),t._v(" "),a("p",[t._v("之前了解过"),a("code",[t._v("websocket")]),t._v("通信，是一个全双工通信，发送方和接受方都是各自独立的方法，发送和接收都没有任何关系")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/b7ac6d00-c76f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("基本代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Duplex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myDuplex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duplex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"双工流-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双工流-2"}},[t._v("#")]),t._v(" 双工流")]),t._v(" "),a("p",[t._v("双工流的演示图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/c02883b0-c76f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("除了上述压缩包的例子，还比如一个 "),a("code",[t._v("babel")]),t._v("，把"),a("code",[t._v("es6")]),t._v("转换为，我们在左边写入 "),a("code",[t._v("es6")]),t._v("，从右边读取 "),a("code",[t._v("es5")])]),t._v(" "),a("p",[t._v("基本代码如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Transform "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myTransform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"三、应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),a("p",[a("code",[t._v("stream")]),t._v("的应用场景主要就是处理"),a("code",[t._v("IO")]),t._v("操作，而"),a("code",[t._v("http")]),t._v("请求和文件操作都属于"),a("code",[t._v("IO")]),t._v("操作")]),t._v(" "),a("p",[t._v("试想一下，如果一次"),a("code",[t._v("IO")]),t._v("操作过大，硬件的开销就过大，而将此次大的"),a("code",[t._v("IO")]),t._v("操作进行分段操作，让数据像水管一样流动，直到流动完成")]),t._v(" "),a("p",[t._v("常见的场景有：")]),t._v(" "),a("ul",[a("li",[t._v("get请求返回文件给客户端")]),t._v(" "),a("li",[t._v("文件操作")]),t._v(" "),a("li",[t._v("一些打包工具的底层操作")])]),t._v(" "),a("h3",{attrs:{id:"get请求返回文件给客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get请求返回文件给客户端"}},[t._v("#")]),t._v(" get请求返回文件给客户端")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("stream")]),t._v("流返回文件，"),a("code",[t._v("res")]),t._v("也是一个"),a("code",[t._v("stream")]),t._v("对象，通过"),a("code",[t._v("pipe")]),t._v("管道将文件数据返回")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取请求方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get 请求")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 res 作为 stream 的 dest")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),a("p",[t._v("创建一个可读数据流"),a("code",[t._v("readStream")]),t._v("，一个可写数据流"),a("code",[t._v("writeStream")]),t._v("，通过"),a("code",[t._v("pipe")]),t._v("管道把数据流转过去")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两个文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileName1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileName2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data-bak.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取文件的 stream 对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入文件的 stream 对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" writeStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWriteStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 pipe执行拷贝，数据流转")]),t._v("\nreadStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("writeStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据读取完成监听，即拷贝完成")]),t._v("\nreadStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'拷贝完成'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h3",{attrs:{id:"一些打包工具的底层操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些打包工具的底层操作"}},[t._v("#")]),t._v(" 一些打包工具的底层操作")]),t._v(" "),a("p",[t._v("目前一些比较火的前端打包构建工具，都是通过"),a("code",[t._v("node.js")]),t._v("编写的，打包和构建的过程肯定是文件频繁操作的过程，离不来"),a("code",[t._v("stream")]),t._v("，如"),a("code",[t._v("gulp")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903891083984910",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903891083984910"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
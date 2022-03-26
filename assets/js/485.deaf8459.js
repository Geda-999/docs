(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{955:function(t,e,v){"use strict";v.r(e);var _=v(20),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"面试官-说说你对node-js-的理解-优缺点-应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对node-js-的理解-优缺点-应用场景"}},[t._v("#")]),t._v(" 面试官：说说你对Node.js 的理解？优缺点？应用场景？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/b565d240-c1e6-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"一、是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),v("p",[v("code",[t._v("Node.js")]),t._v(" 是一个开源与跨平台的 "),v("code",[t._v("JavaScript")]),t._v(" 运行时环境")]),t._v(" "),v("p",[t._v("在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能")]),t._v(" "),v("p",[t._v("可以理解为 "),v("code",[t._v("Node.js")]),t._v(" 就是一个服务器端的、非阻塞式I/O的、事件驱动的"),v("code",[t._v("JavaScript")]),t._v("运行环境")]),t._v(" "),v("h3",{attrs:{id:"非阻塞异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞异步"}},[t._v("#")]),t._v(" 非阻塞异步")]),t._v(" "),v("p",[v("code",[t._v("Nodejs")]),t._v("采用了非阻塞型"),v("code",[t._v("I/O")]),t._v("机制，在做"),v("code",[t._v("I/O")]),t._v("操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作")]),t._v(" "),v("p",[t._v("例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率")]),t._v(" "),v("h3",{attrs:{id:"事件驱动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[t._v("#")]),t._v(" 事件驱动")]),t._v(" "),v("p",[t._v("事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数")]),t._v(" "),v("p",[t._v("比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/a7729590-c1e8-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"二、优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、优缺点"}},[t._v("#")]),t._v(" 二、优缺点")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("ul",[v("li",[t._v("处理高并发场景性能更佳")]),t._v(" "),v("li",[t._v("适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作")])]),t._v(" "),v("p",[t._v("因为"),v("code",[t._v("Nodejs")]),t._v("是单线程，带来的缺点有：")]),t._v(" "),v("ul",[v("li",[t._v("不适合CPU密集型应用")]),t._v(" "),v("li",[t._v("只支持单核CPU，不能充分利用CPU")]),t._v(" "),v("li",[t._v("可靠性低，一旦代码某个环节崩溃，整个系统都崩溃")])]),t._v(" "),v("h2",{attrs:{id:"三、应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),v("p",[t._v("借助"),v("code",[t._v("Nodejs")]),t._v("的特点和弊端，其应用场景分类如下：")]),t._v(" "),v("ul",[v("li",[t._v("善于"),v("code",[t._v("I/O")]),t._v("，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程")]),t._v(" "),v("li",[t._v("大量并发的I/O，应用程序内部并不需要进行非常复杂的处理")]),t._v(" "),v("li",[t._v("与 websocket 配合，开发长连接的实时交互应用程序")])]),t._v(" "),v("p",[t._v("具体场景可以表现为如下：")]),t._v(" "),v("ul",[v("li",[t._v("第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序")]),t._v(" "),v("li",[t._v("第二大类：基于web、canvas等多人联网游戏")]),t._v(" "),v("li",[t._v("第三大类：基于web的多人实时聊天客户端、聊天室、图文直播")]),t._v(" "),v("li",[t._v("第四大类：单页面浏览器应用程序")]),t._v(" "),v("li",[t._v("第五大类：操作数据库、为前端和移动端提供基于"),v("code",[t._v("json")]),t._v("的API")])]),t._v(" "),v("p",[t._v("其实，"),v("code",[t._v("Nodejs")]),t._v("能实现几乎一切的应用，只考虑适不适合使用它")]),t._v(" "),v("h2",{attrs:{id:"参考文献"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nodejs.cn/"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000019854308",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000019854308"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000005173218",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000005173218"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);
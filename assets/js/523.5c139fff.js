(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{992:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-node性能如何进行监控以及优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-node性能如何进行监控以及优化"}},[s._v("#")]),s._v(" 面试官：Node性能如何进行监控以及优化？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/bb37dae0-d179-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-是什么"}},[s._v("#")]),s._v(" 一、 是什么")]),s._v(" "),a("p",[a("code",[s._v("Node")]),s._v("作为一门服务端语言，性能方面尤为重要，其衡量指标一般有如下：")]),s._v(" "),a("ul",[a("li",[s._v("CPU")]),s._v(" "),a("li",[s._v("内存")]),s._v(" "),a("li",[s._v("I/O")]),s._v(" "),a("li",[s._v("网络")])]),s._v(" "),a("h3",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[s._v("#")]),s._v(" CPU")]),s._v(" "),a("p",[s._v("主要分成了两部分：")]),s._v(" "),a("ul",[a("li",[s._v("CPU负载：在某个时间段内，占用以及等待CPU的进程总数")]),s._v(" "),a("li",[s._v("CPU使用率：CPU时间占用状况，等于 1 - 空闲CPU时间(idle time) / CPU总时间")])]),s._v(" "),a("p",[s._v("这两个指标都是用来评估系统当前CPU的繁忙程度的量化指标")]),s._v(" "),a("p",[a("code",[s._v("Node")]),s._v("应用一般不会消耗很多的"),a("code",[s._v("CPU")]),s._v("，如果"),a("code",[s._v("CPU")]),s._v("占用率高，则表明应用存在很多同步操作，导致异步任务回调被阻塞")]),s._v(" "),a("h3",{attrs:{id:"内存指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存指标"}},[s._v("#")]),s._v(" 内存指标")]),s._v(" "),a("p",[s._v("内存是一个非常容易量化的指标。 内存占用率是评判一个系统的内存瓶颈的常见指标。 对于Node来说，内部内存堆栈的使用状态也是一个可以量化的指标")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /app/lib/memory.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" os "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前Node内存堆栈情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" heapUsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" heapTotal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("memoryUsage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取系统空闲内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sysFree "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("freemem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取系统总内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sysTotal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("totalmem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sys")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sysFree "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" sysTotal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 系统内存占用率")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("heap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" heapUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" headTotal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Node堆内存占用率")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("node")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" rss "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" sysTotal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Node占用系统内存的比例")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("rss：表示node进程占用的内存总量。")]),s._v(" "),a("li",[s._v("heapTotal：表示堆内存的总量。")]),s._v(" "),a("li",[s._v("heapUsed：实际堆内存的使用量。")]),s._v(" "),a("li",[s._v("external ：外部程序的内存使用量，包含Node核心的C++程序的内存使用量")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Node")]),s._v("中，一个进程的最大内存容量为1.5GB。因此我们需要减少内存泄露")]),s._v(" "),a("h3",{attrs:{id:"磁盘-i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘-i-o"}},[s._v("#")]),s._v(" 磁盘 I/O")]),s._v(" "),a("p",[s._v("硬盘的"),a("code",[s._v("IO")]),s._v(" 开销是非常昂贵的，硬盘 IO 花费的 CPU 时钟周期是内存的 164000 倍")]),s._v(" "),a("p",[s._v("内存 "),a("code",[s._v("IO")]),s._v("比磁盘"),a("code",[s._v("IO")]),s._v(" 快非常多，所以使用内存缓存数据是有效的优化方法。常用的工具如 "),a("code",[s._v("redis")]),s._v("、"),a("code",[s._v("memcached")]),s._v("等")]),s._v(" "),a("p",[s._v("并不是所有数据都需要缓存，访问频率高，生成代价比较高的才考虑是否缓存，也就是说影响你性能瓶颈的考虑去缓存，并且而且缓存还有缓存雪崩、缓存穿透等问题要解决")]),s._v(" "),a("h2",{attrs:{id:"二、如何监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何监控"}},[s._v("#")]),s._v(" 二、如何监控")]),s._v(" "),a("p",[s._v("关于性能方面的监控，一般情况都需要借助工具来实现")]),s._v(" "),a("p",[s._v("这里采用"),a("code",[s._v("Easy-Monitor 2.0")]),s._v("，其是轻量级的 "),a("code",[s._v("Node.js")]),s._v(" 项目内核性能监控 + 分析工具，在默认模式下，只需要在项目入口文件 "),a("code",[s._v("require")]),s._v(" 一次，无需改动任何业务代码即可开启内核级别的性能监控分析")]),s._v(" "),a("p",[s._v("使用方法如下：")]),s._v(" "),a("p",[s._v("在你的项目入口文件中按照如下方式引入，当然请传入你的项目名称：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" easyMonitor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'easy-monitor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("easyMonitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的项目名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("打开你的浏览器，访问 "),a("code",[s._v("http://localhost:12333")]),s._v(" ，即可看到进程界面")]),s._v(" "),a("p",[s._v("关于定制化开发、通用配置项以及如何动态更新配置项详见官方文档")]),s._v(" "),a("h2",{attrs:{id:"三、如何优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、如何优化"}},[s._v("#")]),s._v(" 三、如何优化")]),s._v(" "),a("p",[s._v("关于"),a("code",[s._v("Node")]),s._v("的性能优化的方式有：")]),s._v(" "),a("ul",[a("li",[s._v("使用最新版本Node.js")]),s._v(" "),a("li",[s._v("正确使用流 Stream")]),s._v(" "),a("li",[s._v("代码层面优化")]),s._v(" "),a("li",[s._v("内存管理优化")])]),s._v(" "),a("h3",{attrs:{id:"使用最新版本node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用最新版本node-js"}},[s._v("#")]),s._v(" 使用最新版本Node.js")]),s._v(" "),a("p",[s._v("每个版本的性能提升主要来自于两个方面：")]),s._v(" "),a("ul",[a("li",[s._v("V8 的版本更新")]),s._v(" "),a("li",[s._v("Node.js 内部代码的更新优化")])]),s._v(" "),a("h3",{attrs:{id:"正确使用流-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确使用流-stream"}},[s._v("#")]),s._v(" 正确使用流 Stream")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Node")]),s._v("中，很多对象都实现了流，对于一个大文件可以通过流的形式发送，不需要将其完全读入内存")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bad")]),s._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/data.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// good")]),s._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/data.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"代码层面优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码层面优化"}},[s._v("#")]),s._v(" 代码层面优化")]),s._v(" "),a("p",[s._v("合并查询，将多次查询合并一次，减少数据库的查询次数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bad")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" userIds \n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// good")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user_account_map "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意这个对象将会消耗大量内存。")]),s._v("\nuser_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" user_ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user_account_map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  account\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" userIds \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user_account_map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"内存管理优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理优化"}},[s._v("#")]),s._v(" 内存管理优化")]),s._v(" "),a("p",[s._v("在 V8 中，主要将内存分为新生代和老生代两代：")]),s._v(" "),a("ul",[a("li",[s._v("新生代：对象的存活时间较短。新生对象或只经过一次垃圾回收的对象")]),s._v(" "),a("li",[s._v("老生代：对象存活时间较长。经历过一次或多次垃圾回收的对象")])]),s._v(" "),a("p",[s._v("若新生代内存空间不够，直接分配到老生代")]),s._v(" "),a("p",[s._v("通过减少内存占用，可以提高服务器的性能。如果有内存泄露，也会导致大量的对象存储到老生代中，服务器性能会大大降低")]),s._v(" "),a("p",[s._v("如下面情况：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/source/index.htm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        leak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/source/index.htm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" leak "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("leak")]),s._v("的内存非常大，造成内存泄露，应当避免这样的操作，通过减少内存使用，是提高服务性能的手段之一")]),s._v(" "),a("p",[s._v("而节省内存最好的方式是使用池，其将频用、可复用对象存储起来，减少创建和销毁操作")]),s._v(" "),a("p",[s._v("例如有个图片请求接口，每次请求，都需要用到类。若每次都需要重新new这些类，并不是很合适，在大量请求时，频繁创建和销毁这些类，造成内存抖动")]),s._v(" "),a("p",[s._v("使用对象池的机制，对这种频繁需要创建和销毁的对象保存在一个对象池中。每次用到该对象时，就取对象池空闲的对象，并对它进行初始化操作，从而提高框架的性能")]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000039327565",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000039327565"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/50055740",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/50055740"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010231628",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000010231628"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
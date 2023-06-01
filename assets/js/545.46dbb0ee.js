(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{1014:function(s,t,n){"use strict";n.r(t);var a=n(20),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"面试官-说说对nodejs中的事件循环机制理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说对nodejs中的事件循环机制理解"}},[s._v("#")]),s._v(" 面试官：说说对Nodejs中的事件循环机制理解?")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://static.vue-js.com/e0faf3c0-c90e-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"一、是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),n("p",[s._v("在"),n("a",{attrs:{href:"https://github.com/febobo/web-interview/issues/73",target:"_blank",rel:"noopener noreferrer"}},[s._v("浏览器事件循环"),n("OutboundLink")],1),s._v("中，我们了解到"),n("code",[s._v("javascript")]),s._v("在浏览器中的事件循环机制，其是根据"),n("code",[s._v("HTML5")]),s._v("定义的规范来实现")]),s._v(" "),n("p",[s._v("而在"),n("code",[s._v("NodeJS")]),s._v("中，事件循环是基于"),n("code",[s._v("libuv")]),s._v("实现，"),n("code",[s._v("libuv")]),s._v("是一个多平台的专注于异步IO的库，如下图最右侧所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://static.vue-js.com/ea690b90-c90e-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),n("p",[s._v("上图"),n("code",[s._v("EVENT_QUEUE")]),s._v(" 给人看起来只有一个队列，但"),n("code",[s._v("EventLoop")]),s._v("存在6个阶段，每个阶段都有对应的一个先进先出的回调队列")]),s._v(" "),n("h2",{attrs:{id:"二、流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、流程"}},[s._v("#")]),s._v(" 二、流程")]),s._v(" "),n("p",[s._v("上节讲到事件循环分成了六个阶段，对应如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://static.vue-js.com/f2e34d80-c90e-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("timers阶段：这个阶段执行timer（setTimeout、setInterval）的回调")]),s._v(" "),n("li",[s._v("定时器检测阶段(timers)：本阶段执行 timer 的回调，即 setTimeout、setInterval 里面的回调函数")]),s._v(" "),n("li",[s._v("I/O事件回调阶段(I/O callbacks)：执行延迟到下一个循环迭代的 I/O 回调，即上一轮循环中未被执行的一些I/O回调")]),s._v(" "),n("li",[s._v("闲置阶段(idle, prepare)：仅系统内部使用")]),s._v(" "),n("li",[s._v("轮询阶段(poll)：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞")]),s._v(" "),n("li",[s._v("检查阶段(check)：setImmediate() 回调函数在这里执行")]),s._v(" "),n("li",[s._v("关闭事件回调阶段(close callback)：一些关闭的回调函数，如：socket.on('close', ...)")])]),s._v(" "),n("p",[s._v("每个阶段对应一个队列，当事件循环进入某个阶段时, 将会在该阶段内执行回调，直到队列耗尽或者回调的最大数量已执行, 那么将进入下一个处理阶段")]),s._v(" "),n("p",[s._v("除了上述6个阶段，还存在"),n("code",[s._v("process.nextTick")]),s._v("，其不属于事件循环的任何一个阶段，它属于该阶段与下阶段之间的过渡, 即本阶段执行结束, 进入下一个阶段前, 所要执行的回调，类似插队")]),s._v(" "),n("p",[s._v("流程图如下所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://static.vue-js.com/fbe731d0-c90e-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("Node")]),s._v("中，同样存在宏任务和微任务，与浏览器中的事件循环相似")]),s._v(" "),n("p",[s._v("微任务对应有：")]),s._v(" "),n("ul",[n("li",[s._v("next tick queue：process.nextTick")]),s._v(" "),n("li",[s._v("other queue：Promise的then回调、queueMicrotask")])]),s._v(" "),n("p",[s._v("宏任务对应有：")]),s._v(" "),n("ul",[n("li",[s._v("timer queue：setTimeout、setInterval")]),s._v(" "),n("li",[s._v("poll queue：IO事件")]),s._v(" "),n("li",[s._v("check queue：setImmediate")]),s._v(" "),n("li",[s._v("close queue：close事件")])]),s._v(" "),n("p",[s._v("其执行顺序为：")]),s._v(" "),n("ul",[n("li",[s._v("next tick microtask queue")]),s._v(" "),n("li",[s._v("other microtask queue")]),s._v(" "),n("li",[s._v("timer queue")]),s._v(" "),n("li",[s._v("poll queue")]),s._v(" "),n("li",[s._v("check queue")]),s._v(" "),n("li",[s._v("close queue")])]),s._v(" "),n("h2",{attrs:{id:"三、题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、题目"}},[s._v("#")]),s._v(" 三、题目")]),s._v(" "),n("p",[s._v("通过上面的学习，下面开始看看题目")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'async1 start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'async2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setTimeout0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setTimeout2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setImmediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nextTick1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nextTick2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'promise3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("p",[s._v("分析过程：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("先找到同步任务，输出script start")])]),s._v(" "),n("li",[n("p",[s._v("遇到第一个 setTimeout，将里面的回调函数放到 timer 队列中")])]),s._v(" "),n("li",[n("p",[s._v("遇到第二个 setTimeout，300ms后将里面的回调函数放到 timer 队列中")])]),s._v(" "),n("li",[n("p",[s._v("遇到第一个setImmediate，将里面的回调函数放到 check 队列中")])]),s._v(" "),n("li",[n("p",[s._v("遇到第一个 nextTick，将其里面的回调函数放到本轮同步任务执行完毕后执行")])]),s._v(" "),n("li",[n("p",[s._v("执行 async1函数，输出 async1 start")])]),s._v(" "),n("li",[n("p",[s._v("执行 async2 函数，输出 async2，async2 后面的输出 async1 end进入微任务，等待下一轮的事件循环")])]),s._v(" "),n("li",[n("p",[s._v("遇到第二个，将其里面的回调函数放到本轮同步任务执行完毕后执行")])]),s._v(" "),n("li",[n("p",[s._v("遇到 new Promise，执行里面的立即执行函数，输出 promise1、promise2")])]),s._v(" "),n("li",[n("p",[s._v("then里面的回调函数进入微任务队列")])]),s._v(" "),n("li",[n("p",[s._v("遇到同步任务，输出 script end")])]),s._v(" "),n("li",[n("p",[s._v("执行下一轮回到函数，先依次输出 nextTick 的函数，分别是 nextTick1、nextTick2")])]),s._v(" "),n("li",[n("p",[s._v("然后执行微任务队列，依次输出 async1 end、promise3")])]),s._v(" "),n("li",[n("p",[s._v("执行timer 队列，依次输出 setTimeout0")])]),s._v(" "),n("li",[n("p",[s._v("接着执行 check  队列，依次输出 setImmediate")])]),s._v(" "),n("li",[n("p",[s._v("300ms后，timer 队列存在任务，执行输出 setTimeout2")])])]),s._v(" "),n("p",[s._v("执行结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("script start\nasync1 start\nasync2\npromise1\npromise2\nscript end\nnextTick1\nnextTick2\nasync1 end\npromise3\nsetTimeout0\nsetImmediate\nsetTimeout2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("最后有一道是关于"),n("code",[s._v("setTimeout")]),s._v("与"),n("code",[s._v("setImmediate")]),s._v("的输出顺序")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"setTimeout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"setImmediate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("输出情况如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("情况一：\nsetTimeout\nsetImmediate\n\n情况二：\nsetImmediate\nsetTimeout\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("分析下流程：")]),s._v(" "),n("ul",[n("li",[s._v("外层同步代码一次性全部执行完，遇到异步API就塞到对应的阶段")]),s._v(" "),n("li",[s._v("遇到"),n("code",[s._v("setTimeout")]),s._v("，虽然设置的是0毫秒触发，但实际上会被强制改成1ms，时间到了然后塞入"),n("code",[s._v("times")]),s._v("阶段")]),s._v(" "),n("li",[s._v("遇到"),n("code",[s._v("setImmediate")]),s._v("塞入"),n("code",[s._v("check")]),s._v("阶段")]),s._v(" "),n("li",[s._v("同步代码执行完毕，进入Event Loop")]),s._v(" "),n("li",[s._v("先进入"),n("code",[s._v("times")]),s._v("阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足"),n("code",[s._v("setTimeout")]),s._v("条件，执行回调，如果没过1毫秒，跳过")]),s._v(" "),n("li",[s._v("跳过空的阶段，进入check阶段，执行"),n("code",[s._v("setImmediate")]),s._v("回调")])]),s._v(" "),n("p",[s._v("这里的关键在于这1ms，如果同步代码执行时间较长，进入"),n("code",[s._v("Event Loop")]),s._v("的时候1毫秒已经过了，"),n("code",[s._v("setTimeout")]),s._v("先执行，如果1毫秒还没到，就先执行了"),n("code",[s._v("setImmediate")])]),s._v(" "),n("h2",{attrs:{id:"参考文献"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000012258592",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000012258592"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6844904100195205133",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.cn/post/6844904100195205133"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vue3js.cn/interview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vue3js.cn/interview/"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1022:function(t,s,a){"use strict";a.r(s);var e=a(20),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说-real-dom-和-virtual-dom-的区别-优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-real-dom-和-virtual-dom-的区别-优缺点"}},[t._v("#")]),t._v(" 面试官：说说 Real DOM 和 Virtual DOM 的区别？优缺点？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/f1d36350-d302-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("Real DOM，真实 "),a("code",[t._v("DOM")]),t._v("，意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实 "),a("code",[t._v("DOM")]),t._v(" 结构，如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/fc7ba8d0-d302-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Virtual Dom")]),t._v("，本质上是以 "),a("code",[t._v("JavaScript")]),t._v(" 对象形式存在的对 "),a("code",[t._v("DOM")]),t._v(" 的描述")]),t._v(" "),a("p",[t._v("创建虚拟 "),a("code",[t._v("DOM")]),t._v(" 目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟 "),a("code",[t._v("DOM")]),t._v(" 对象的节点与真实 "),a("code",[t._v("DOM")]),t._v(" 的属性一一照应")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("React")]),t._v(" 中，"),a("code",[t._v("JSX")]),t._v(" 是其一大特性，可以让你在 "),a("code",[t._v("JS")]),t._v(" 中通过使用 "),a("code",[t._v("XML")]),t._v(" 的方式去直接声明界面的 "),a("code",[t._v("DOM")]),t._v(" 结构")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 h1 标签，右边千万不能加引号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vDom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Hello World")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 找到 <div id="root"></div> 节点')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把创建的 h1 标签渲染到 root 节点上")]),t._v("\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上述中，"),a("code",[t._v("ReactDOM.render()")]),t._v(" 用于将你创建好的虚拟 "),a("code",[t._v("DOM")]),t._v(" 节点插入到某个真实节点上，并渲染到页面上")]),t._v(" "),a("p",[a("code",[t._v("JSX")]),t._v(" 实际是一种语法糖，在使用过程中会被 "),a("code",[t._v("babel")]),t._v(" 进行编译转化成 "),a("code",[t._v("JS")]),t._v(" 代码，上述 "),a("code",[t._v("VDOM")]),t._v(" 转化为如下：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vDom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),t._v("，\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hClass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hId'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("可以看到，"),a("code",[t._v("JSX")]),t._v(" 就是为了简化直接调用 "),a("code",[t._v("React.createElement()")]),t._v(" 方法：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一个参数是标签名，例如 h1、span、table...")])]),t._v(" "),a("li",[a("p",[t._v("第二个参数是个对象，里面存着标签的一些属性，例如 id、class 等")])]),t._v(" "),a("li",[a("p",[t._v("第三个参数是节点中的文本")])])]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("console.log(VDOM)")]),t._v("，则能够得到虚拟 "),a("code",[t._v("VDOM")]),t._v(" 消息")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/1716b9a0-d303-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("所以可以得到，"),a("code",[t._v("JSX")]),t._v(" 通过 "),a("code",[t._v("babel")]),t._v(" 的方式转化成 "),a("code",[t._v("React.createElement")]),t._v(" 执行，返回值是一个对象，也就是虚拟 "),a("code",[t._v("DOM")])]),t._v(" "),a("h2",{attrs:{id:"二、区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、区别"}},[t._v("#")]),t._v(" 二、区别")]),t._v(" "),a("p",[t._v("两者的区别如下：")]),t._v(" "),a("ul",[a("li",[t._v("虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘")]),t._v(" "),a("li",[t._v("虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”")])]),t._v(" "),a("p",[t._v("拿"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484516&idx=1&sn=965a4ce32bf93adb9ed112922c5cb8f5&chksm=fc10c632cb674f2484fdf914d76fba55afcefca3b5adcbe6cf4b0c7fd36e29d0292e8cefceb5&scene=178&cur_album_id=1711105826272116736#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("以前文章"),a("OutboundLink")],1),t._v("举过的例子：")]),t._v(" "),a("p",[t._v("传统的原生 "),a("code",[t._v("api")]),t._v(" 或 "),a("code",[t._v("jQuery")]),t._v(" 去操作 "),a("code",[t._v("DOM")]),t._v(" 时，浏览器会从构建 "),a("code",[t._v("DOM")]),t._v(" 树开始从头到尾执行一遍流程")]),t._v(" "),a("p",[t._v("当你在一次操作时，需要更新 10 个 "),a("code",[t._v("DOM")]),t._v(" 节点，浏览器没这么智能，收到第一个更新 "),a("code",[t._v("DOM")]),t._v(" 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程")]),t._v(" "),a("p",[t._v("而通过 "),a("code",[t._v("VNode")]),t._v("，同样更新 10 个 "),a("code",[t._v("DOM")]),t._v(" 节点，虚拟 "),a("code",[t._v("DOM")]),t._v(" 不会立即操作 "),a("code",[t._v("DOM")]),t._v("，而是将这 10 次更新的 "),a("code",[t._v("diff")]),t._v(" 内容保存到本地的一个 "),a("code",[t._v("js")]),t._v(" 对象中，最终将这个 "),a("code",[t._v("js")]),t._v(" 对象一次性 "),a("code",[t._v("attach")]),t._v(" 到 "),a("code",[t._v("DOM")]),t._v(" 树上，避免大量的无谓计算")]),t._v(" "),a("h2",{attrs:{id:"三、优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、优缺点"}},[t._v("#")]),t._v(" 三、优缺点")]),t._v(" "),a("p",[t._v("真实 "),a("code",[t._v("DOM")]),t._v(" 的优势：")]),t._v(" "),a("ul",[a("li",[t._v("易用")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("效率低，解析速度慢，内存占用量过高")]),t._v(" "),a("li",[t._v("性能差：频繁操作真实 DOM，易于导致重绘与回流")])]),t._v(" "),a("p",[t._v("使用虚拟 "),a("code",[t._v("DOM")]),t._v(" 的优势如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("简单方便：如果使用手动操作真实 "),a("code",[t._v("DOM")]),t._v(" 来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难")])]),t._v(" "),a("li",[a("p",[t._v("性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能")])]),t._v(" "),a("li",[a("p",[t._v("跨平台：React 借助虚拟 DOM，带来了跨平台的能力，一套代码多端运行")])])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化")]),t._v(" "),a("li",[t._v("首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844904052971536391",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844904052971536391"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.html.cn/qa/other/22832.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.html.cn/qa/other/22832.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{977:function(t,s,a){"use strict";a.r(s);var e=a(20),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-如果要做优化-css提高性能的方法有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-如果要做优化-css提高性能的方法有哪些"}},[t._v("#")]),t._v(" 面试官：如果要做优化，CSS提高性能的方法有哪些？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/c071c820-9fa3-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[t._v("每一个网页都离不开"),a("code",[t._v("css")]),t._v("，但是很多人又认为，"),a("code",[t._v("css")]),t._v("主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的")]),t._v(" "),a("p",[t._v("作为页面渲染和内容展现的重要环节，"),a("code",[t._v("css")]),t._v("影响着用户对整个网站的第一体验")]),t._v(" "),a("p",[t._v("因此，在整个产品研发过程中，"),a("code",[t._v("css")]),t._v("性能优化同样需要贯穿全程")]),t._v(" "),a("h2",{attrs:{id:"二、实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、实现方式"}},[t._v("#")]),t._v(" 二、实现方式")]),t._v(" "),a("p",[t._v("实现方式有很多种，主要有如下：")]),t._v(" "),a("ul",[a("li",[t._v("内联首屏关键CSS")]),t._v(" "),a("li",[t._v("异步加载CSS")]),t._v(" "),a("li",[t._v("资源压缩")]),t._v(" "),a("li",[t._v("合理使用选择器")]),t._v(" "),a("li",[t._v("减少使用昂贵的属性")]),t._v(" "),a("li",[t._v("不要使用@import")])]),t._v(" "),a("h3",{attrs:{id:"内联首屏关键css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内联首屏关键css"}},[t._v("#")]),t._v(" 内联首屏关键CSS")]),t._v(" "),a("p",[t._v("在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联"),a("code",[t._v("css")]),t._v("关键代码能够使浏览器在下载完"),a("code",[t._v("html")]),t._v("后就能立刻渲染")]),t._v(" "),a("p",[t._v("而如果外部引用"),a("code",[t._v("css")]),t._v("代码，在解析"),a("code",[t._v("html")]),t._v("结构过程中遇到外部"),a("code",[t._v("css")]),t._v("文件，才会开始下载"),a("code",[t._v("css")]),t._v("代码，再渲染")]),t._v(" "),a("p",[t._v("所以，"),a("code",[t._v("CSS")]),t._v("内联使用使渲染时间提前")]),t._v(" "),a("p",[t._v("注意：但是较大的"),a("code",[t._v("css")]),t._v("代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式")]),t._v(" "),a("h3",{attrs:{id:"异步加载css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载css"}},[t._v("#")]),t._v(" 异步加载CSS")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("CSS")]),t._v("文件请求、下载、解析完成之前，"),a("code",[t._v("CSS")]),t._v("会阻塞渲染，浏览器将不会渲染任何已处理的内容")]),t._v(" "),a("p",[t._v("前面加载内联代码后，后面的外部引用"),a("code",[t._v("css")]),t._v("则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：")]),t._v(" "),a("ul",[a("li",[t._v("使用javascript将link标签插到head标签最后")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建link标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myCSS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mystyles.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入到header的最后位置")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ul",[a("li",[t._v("设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将"),a("code",[t._v("media")]),t._v("的值设为"),a("code",[t._v("screen")]),t._v("或"),a("code",[t._v("all")]),t._v("，从而让浏览器开始解析CSS")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mystyles.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("noexist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("media"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alternate stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mystyles.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"资源压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩"}},[t._v("#")]),t._v(" 资源压缩")]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("webpack")]),t._v("、"),a("code",[t._v("gulp/grunt")]),t._v("、"),a("code",[t._v("rollup")]),t._v("等模块化工具，将"),a("code",[t._v("css")]),t._v("代码进行压缩，使文件变小，大大降低了浏览器的加载时间")]),t._v(" "),a("h3",{attrs:{id:"合理使用选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合理使用选择器"}},[t._v("#")]),t._v(" 合理使用选择器")]),t._v(" "),a("p",[a("code",[t._v("css")]),t._v("匹配的规则是从右往左开始匹配，例如"),a("code",[t._v("#markdown .content h3")]),t._v("匹配规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("先找到h3标签元素")]),t._v(" "),a("li",[t._v("然后去除祖先不是.content的元素")]),t._v(" "),a("li",[t._v("最后去除祖先不是#markdown的元素")])]),t._v(" "),a("p",[t._v("如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高")]),t._v(" "),a("p",[t._v("所以我们在编写选择器的时候，可以遵循以下规则：")]),t._v(" "),a("ul",[a("li",[t._v("不要嵌套使用过多复杂选择器，最好不要三层以上")]),t._v(" "),a("li",[t._v("使用id选择器就没必要再进行嵌套")]),t._v(" "),a("li",[t._v("通配符和属性选择器效率最低，避免使用")])]),t._v(" "),a("h3",{attrs:{id:"减少使用昂贵的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少使用昂贵的属性"}},[t._v("#")]),t._v(" 减少使用昂贵的属性")]),t._v(" "),a("p",[t._v("在页面发生重绘的时候，昂贵属性如"),a("code",[t._v("box-shadow")]),t._v("/"),a("code",[t._v("border-radius")]),t._v("/"),a("code",[t._v("filter")]),t._v("/透明度/"),a("code",[t._v(":nth-child")]),t._v("等，会降低浏览器的渲染性能")]),t._v(" "),a("h3",{attrs:{id:"不要使用-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要使用-import"}},[t._v("#")]),t._v(" 不要使用@import")]),t._v(" "),a("p",[t._v("css样式文件有两种引入方式，一种是"),a("code",[t._v("link")]),t._v("元素，另一种是"),a("code",[t._v("@import")])]),t._v(" "),a("p",[a("code",[t._v("@import")]),t._v("会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时")]),t._v(" "),a("p",[t._v("而且多个"),a("code",[t._v("@import")]),t._v("可能会导致下载顺序紊乱")]),t._v(" "),a("p",[t._v("比如一个css文件"),a("code",[t._v("index.css")]),t._v("包含了以下内容："),a("code",[t._v('@import url("reset.css")')])]),t._v(" "),a("p",[t._v("那么浏览器就必须先把"),a("code",[t._v("index.css")]),t._v("下载、解析和执行后，才下载、解析和执行第二个文件"),a("code",[t._v("reset.css")])]),t._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("ul",[a("li",[t._v("减少重排操作，以及减少不必要的重绘")]),t._v(" "),a("li",[t._v("了解哪些属性可以继承而来，避免对这些属性重复编写")]),t._v(" "),a("li",[t._v("cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求")]),t._v(" "),a("li",[t._v("把小的icon图片转成base64编码")]),t._v(" "),a("li",[t._v("CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性")])]),t._v(" "),a("h2",{attrs:{id:"三、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),a("p",[a("code",[t._v("css")]),t._v("实现性能的方式可以从选择器嵌套、属性特性、减少"),a("code",[t._v("http")]),t._v("这三面考虑，同时还要注意"),a("code",[t._v("css")]),t._v("代码的加载顺序")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/19886806",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/19886806"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903649605320711#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903649605320711#heading-1"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js.cn/interview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue3js.cn/interview/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);
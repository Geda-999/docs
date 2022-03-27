(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{920:function(s,a,t){"use strict";t.r(a);var e=t(20),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"面试官-javascript本地存储的方式有哪些-区别及应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-javascript本地存储的方式有哪些-区别及应用场景"}},[s._v("#")]),s._v(" 面试官：Javascript本地存储的方式有哪些？区别及应用场景？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/68dccf20-849f-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、方式"}},[s._v("#")]),s._v(" 一、方式")]),s._v(" "),t("p",[t("code",[s._v("javaScript")]),s._v("本地缓存的方法我们主要讲述以下四种：")]),s._v(" "),t("ul",[t("li",[s._v("cookie")]),s._v(" "),t("li",[s._v("sessionStorage")]),s._v(" "),t("li",[s._v("localStorage")]),s._v(" "),t("li",[s._v("indexedDB")])]),s._v(" "),t("h3",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" cookie")]),s._v(" "),t("p",[t("code",[s._v("Cookie")]),s._v("，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。是为了解决 "),t("code",[s._v("HTTP")]),s._v("无状态导致的问题")]),s._v(" "),t("p",[s._v("作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 "),t("code",[s._v("cookie")]),s._v("有效期、安全性、使用范围的可选属性组成")]),s._v(" "),t("p",[s._v("但是"),t("code",[s._v("cookie")]),s._v("在每次请求中都会被发送，如果不使用 "),t("code",[s._v("HTTPS")]),s._v("并对其加密，其保存的信息很容易被窃取，导致安全风险。举个例子，在一些使用 "),t("code",[s._v("cookie")]),s._v("保持登录态的网站上，如果 "),t("code",[s._v("cookie")]),s._v("被窃取，他人很容易利用你的 "),t("code",[s._v("cookie")]),s._v("来假扮成你登录网站")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("cookie")]),s._v("常用的属性如下：")]),s._v(" "),t("ul",[t("li",[s._v("Expires 用于设置 Cookie 的过期时间")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Expires"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Max-Age 用于设置在 Cookie 失效之前需要经过的秒数（优先级比"),t("code",[s._v("Expires")]),s._v("高）")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Max"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("604800")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("Domain")]),s._v("指定了 "),t("code",[s._v("Cookie")]),s._v(" 可以送达的主机名")]),s._v(" "),t("li",[t("code",[s._v("Path")]),s._v("指定了一个 "),t("code",[s._v("URL")]),s._v("路径，这个路径必须出现在要请求的资源的路径中才可以发送 "),t("code",[s._v("Cookie")]),s._v(" 首部")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docs   # "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Web"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 下的资源会带 Cookie 首部\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("标记为 "),t("code",[s._v("Secure")]),s._v("的 "),t("code",[s._v("Cookie")]),s._v("只应通过被"),t("code",[s._v("HTTPS")]),s._v("协议加密过的请求发送给服务端")])]),s._v(" "),t("p",[s._v("通过上述，我们可以看到"),t("code",[s._v("cookie")]),s._v("又开始的作用并不是为了缓存而设计出来，只是借用了"),t("code",[s._v("cookie")]),s._v("的特性实现缓存")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("cookie")]),s._v("的使用如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'名字=值'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("关于"),t("code",[s._v("cookie")]),s._v("的修改，首先要确定"),t("code",[s._v("domain")]),s._v("和"),t("code",[s._v("path")]),s._v("属性都是相同的才可以，其中有一个不同得时候都会创建出一个新的"),t("code",[s._v("cookie")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Cookie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" domain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("  # 服务端设置\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" domain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("  # 客户端设置\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("最后"),t("code",[s._v("cookie")]),s._v("的删除，最常用的方法就是给"),t("code",[s._v("cookie")]),s._v("设置一个过期的事件，这样"),t("code",[s._v("cookie")]),s._v("过期后会被浏览器删除")]),s._v(" "),t("h3",{attrs:{id:"localstorage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[s._v("#")]),s._v(" localStorage")]),s._v(" "),t("p",[t("code",[s._v("HTML5")]),s._v("新方法，IE8及以上浏览器都兼容")]),s._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),t("ul",[t("li",[s._v("生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的")]),s._v(" "),t("li",[s._v("存储的信息在同一域中是共享的")]),s._v(" "),t("li",[s._v("当本页操作（新增、修改、删除）了"),t("code",[s._v("localStorage")]),s._v("的时候，本页面不会触发"),t("code",[s._v("storage")]),s._v("事件,但是别的页面会触发"),t("code",[s._v("storage")]),s._v("事件。")]),s._v(" "),t("li",[s._v("大小：5M（跟浏览器厂商有关系）")]),s._v(" "),t("li",[t("code",[s._v("localStorage")]),s._v("本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡")]),s._v(" "),t("li",[s._v("受同源策略的限制")])]),s._v(" "),t("p",[s._v("下面再看看关于"),t("code",[s._v("localStorage")]),s._v("的使用")]),s._v(" "),t("p",[s._v("设置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cfangxu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("获取")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("获取键名")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取第一个键名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("删除")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("一次性清除所有存储")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("localStorage")]),s._v(" 也不是完美的，它有两个缺点：")]),s._v(" "),t("ul",[t("li",[s._v("无法像"),t("code",[s._v("Cookie")]),s._v("一样设置过期时间")]),s._v(" "),t("li",[s._v("只能存入字符串，无法直接存对象")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '[object, Object]'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"sessionstorage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[s._v("#")]),s._v(" sessionStorage")]),s._v(" "),t("p",[t("code",[s._v("sessionStorage")]),s._v("和 "),t("code",[s._v("localStorage")]),s._v("使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，"),t("code",[s._v("sessionStorage")]),s._v(" 将会删除数据")]),s._v(" "),t("h3",{attrs:{id:"扩展的前端存储方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展的前端存储方式"}},[s._v("#")]),s._v(" 扩展的前端存储方式")]),s._v(" "),t("p",[t("code",[s._v("indexedDB")]),s._v("是一种低级API，用于客户端存储大量结构化数据(包括, 文件/ blobs)。该API使用索引来实现对该数据的高性能搜索")]),s._v(" "),t("p",[s._v("虽然 "),t("code",[s._v("Web Storage")]),s._v("对于存储较少量的数据很有用，但对于存储更大量的结构化数据来说，这种方法不太有用。"),t("code",[s._v("IndexedDB")]),s._v("提供了一个解决方案")]),s._v(" "),t("h4",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),t("ul",[t("li",[s._v("储存量理论上没有上限")]),s._v(" "),t("li",[s._v("所有操作都是异步的，相比 "),t("code",[s._v("LocalStorage")]),s._v(" 同步操作性能更高，尤其是数据量较大时")]),s._v(" "),t("li",[s._v("原生支持储存"),t("code",[s._v("JS")]),s._v("的对象")]),s._v(" "),t("li",[s._v("是个正经的数据库，意味着数据库能干的事它都能干")])]),s._v(" "),t("h4",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),t("ul",[t("li",[s._v("操作非常繁琐")]),s._v(" "),t("li",[s._v("本身有一定门槛")])]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("indexedDB")]),s._v("的使用基本使用步骤如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("打开数据库并且开始一个事务")])]),s._v(" "),t("li",[t("p",[s._v("创建一个 "),t("code",[s._v("object store")])])]),s._v(" "),t("li",[t("p",[s._v("构建一个请求来执行一些数据库操作，像增加或提取数据等。")])]),s._v(" "),t("li",[t("p",[s._v("通过监听正确类型的 "),t("code",[s._v("DOM")]),s._v(" 事件以等待操作完成。")])]),s._v(" "),t("li",[t("p",[s._v("在操作结果上进行一些操作（可以在 "),t("code",[s._v("request")]),s._v("对象中找到）")])])]),s._v(" "),t("p",[s._v("关于使用"),t("code",[s._v("indexdb")]),s._v("的使用会比较繁琐，大家可以通过使用"),t("code",[s._v("Godb.js")]),s._v("库进行缓存，最大化的降低操作难度")]),s._v(" "),t("h2",{attrs:{id:"二、区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、区别"}},[s._v("#")]),s._v(" 二、区别")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("cookie")]),s._v("、"),t("code",[s._v("sessionStorage")]),s._v("、"),t("code",[s._v("localStorage")]),s._v("三者的区别主要如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("存储大小："),t("code",[s._v("cookie")]),s._v("数据大小不能超过"),t("code",[s._v("4k")]),s._v("，"),t("code",[s._v("sessionStorage")]),s._v("和"),t("code",[s._v("localStorage")]),s._v("虽然也有存储大小的限制，但比"),t("code",[s._v("cookie")]),s._v("大得多，可以达到5M或更大")])]),s._v(" "),t("li",[t("p",[s._v("有效时间："),t("code",[s._v("localStorage")]),s._v("存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； "),t("code",[s._v("sessionStorage")]),s._v("数据在当前浏览器窗口关闭后自动删除；"),t("code",[s._v("cookie")]),s._v("设置的"),t("code",[s._v("cookie")]),s._v("过期时间之前一直有效，即使窗口或浏览器关闭")])]),s._v(" "),t("li",[t("p",[s._v("数据与服务器之间的交互方式，"),t("code",[s._v("cookie")]),s._v("的数据会自动的传递到服务器，服务器端也可以写"),t("code",[s._v("cookie")]),s._v("到客户端； "),t("code",[s._v("sessionStorage")]),s._v("和"),t("code",[s._v("localStorage")]),s._v("不会自动把数据发给服务器，仅在本地保存")])])]),s._v(" "),t("h2",{attrs:{id:"三、应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[s._v("#")]),s._v(" 三、应用场景")]),s._v(" "),t("p",[s._v("在了解了上述的前端的缓存方式后，我们可以看看针对不对场景的使用选择：")]),s._v(" "),t("ul",[t("li",[s._v("标记用户与跟踪用户行为的情况，推荐使用"),t("code",[s._v("cookie")])]),s._v(" "),t("li",[s._v("适合长期保存在本地的数据（令牌），推荐使用"),t("code",[s._v("localStorage")])]),s._v(" "),t("li",[s._v("敏感账号一次性登录，推荐使用"),t("code",[s._v("sessionStorage")])]),s._v(" "),t("li",[s._v("存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用"),t("code",[s._v("indexedDB")])])]),s._v(" "),t("h2",{attrs:{id:"相关连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关连接"}},[s._v("#")]),s._v(" 相关连接")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/chenstarx/GoDB.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/chenstarx/GoDB.js"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);
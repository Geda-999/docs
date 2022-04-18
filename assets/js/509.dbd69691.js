(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{978:function(e,s,t){"use strict";t.r(s);var a=t(20),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"面试官-说说对websocket的理解-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说对websocket的理解-应用场景"}},[e._v("#")]),e._v(" 面试官：说说对WebSocket的理解？应用场景？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/a358a8c0-c0f1-11eb-ab90-d9ae814b240d.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"一、是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[e._v("#")]),e._v(" 一、是什么")]),e._v(" "),t("p",[e._v("WebSocket，是一种网络传输协议，位于"),t("code",[e._v("OSI")]),e._v("模型的应用层。可在单个"),t("code",[e._v("TCP")]),e._v("连接上进行全双工通信，能更好的节省服务器资源和带宽并达到实时通迅")]),e._v(" "),t("p",[e._v("客户端和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/ad386e20-c0f1-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),e._v(" "),t("p",[e._v("从上图可见，"),t("code",[e._v("websocket")]),e._v("服务器与客户端通过握手连接，连接成功后，两者都能主动的向对方发送或接受数据")]),e._v(" "),t("p",[e._v("而在"),t("code",[e._v("websocket")]),e._v("出现之前，开发实时"),t("code",[e._v("web")]),e._v("应用的方式为轮询")]),e._v(" "),t("p",[e._v("不停地向服务器发送 HTTP 请求，问有没有数据，有数据的话服务器就用响应报文回应。如果轮询的频率比较高，那么就可以近似地实现“实时通信”的效果")]),e._v(" "),t("p",[e._v("轮询的缺点也很明显，反复发送无效查询请求耗费了大量的带宽和 "),t("code",[e._v("CPU")]),e._v("资源")]),e._v(" "),t("h2",{attrs:{id:"二、特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、特点"}},[e._v("#")]),e._v(" 二、特点")]),e._v(" "),t("h3",{attrs:{id:"全双工"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全双工"}},[e._v("#")]),e._v(" 全双工")]),e._v(" "),t("p",[e._v("通信允许数据在两个方向上同时传输，它在能力上相当于两个单工通信方式的结合")]),e._v(" "),t("p",[e._v("例如指 A→B 的同时 B→A ，是瞬时同步的")]),e._v(" "),t("h3",{attrs:{id:"二进制帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制帧"}},[e._v("#")]),e._v(" 二进制帧")]),e._v(" "),t("p",[e._v("采用了二进制帧结构，语法、语义与 HTTP 完全不兼容，相比"),t("code",[e._v("http/2")]),e._v("，"),t("code",[e._v("WebSocket")]),e._v("更侧重于“实时通信”，而"),t("code",[e._v("HTTP/2")]),e._v(" 更侧重于提高传输效率，所以两者的帧结构也有很大的区别")]),e._v(" "),t("p",[e._v("不像 "),t("code",[e._v("HTTP/2")]),e._v(" 那样定义流，也就不存在多路复用、优先级等特性")]),e._v(" "),t("p",[e._v("自身就是全双工，也不需要服务器推送")]),e._v(" "),t("h3",{attrs:{id:"协议名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议名"}},[e._v("#")]),e._v(" 协议名")]),e._v(" "),t("p",[e._v("引入"),t("code",[e._v("ws")]),e._v("和"),t("code",[e._v("wss")]),e._v("分别代表明文和密文的"),t("code",[e._v("websocket")]),e._v("协议，且默认端口使用80或443，几乎与"),t("code",[e._v("http")]),e._v("一致")]),e._v(" "),t("div",{staticClass:"language-http line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("ws")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("//www.chrono.com")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("ws")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("//www.chrono.com:8080/srv")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("wss")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("//www.chrono.com:445/im?user_id=xxx")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#握手"}},[e._v("#")]),e._v(" 握手")]),e._v(" "),t("p",[t("code",[e._v("WebSocket")]),e._v("也要有一个握手过程，然后才能正式收发数据")]),e._v(" "),t("p",[e._v("客户端发送数据格式如下：")]),e._v(" "),t("div",{staticClass:"language-http line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[e._v("GET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/chat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("server.example.com")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("websocket")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Upgrade")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("dGhlIHNhbXBsZSBub25jZQ==")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("http://example.com")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("chat, superchat")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("13")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("ul",[t("li",[e._v("Connection：必须设置Upgrade，表示客户端希望连接升级")]),e._v(" "),t("li",[e._v("Upgrade：必须设置Websocket，表示希望升级到Websocket协议")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Key：客户端发送的一个 base64 编码的密文，用于简单的认证秘钥。要求服务端必须返回一个对应加密的“Sec-WebSocket-Accept应答，否则客户端会抛出错误，并关闭连接")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Version ：表示支持的Websocket版本")])]),e._v(" "),t("p",[e._v("服务端返回的数据格式：")]),e._v(" "),t("div",{staticClass:"language-http line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token response-status"}},[t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token status-code number"}},[e._v("101")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[e._v("Switching Protocols")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("websocket")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Upgrade")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("s3pPLMBiTxaQ9kYGzzhZRbK+xOo=Sec-WebSocket-Protocol: chat")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("ul",[t("li",[e._v("HTTP/1.1 101 Switching Protocols：表示服务端接受 WebSocket 协议的客户端连接")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Accep：验证客户端请求报文，同样也是为了防止误连接。具体做法是把请求头里“Sec-WebSocket-Key”的值，加上一个专用的 UUID，再计算摘要")])]),e._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[e._v("#")]),e._v(" 优点")]),e._v(" "),t("ul",[t("li",[e._v("较少的控制开销：数据包头部协议较小，不同于http每次请求需要携带完整的头部")]),e._v(" "),t("li",[e._v("更强的实时性：相对于HTTP请求需要等待客户端发起请求服务端才能响应，延迟明显更少")]),e._v(" "),t("li",[e._v("保持创连接状态：创建通信后，可省略状态信息，不同于HTTP每次请求需要携带身份验证")]),e._v(" "),t("li",[e._v("更好的二进制支持：定义了二进制帧，更好处理二进制内容")]),e._v(" "),t("li",[e._v("支持扩展：用户可以扩展websocket协议、实现部分自定义的子协议")]),e._v(" "),t("li",[e._v("更好的压缩效果：Websocket在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率")])]),e._v(" "),t("h2",{attrs:{id:"二、应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、应用场景"}},[e._v("#")]),e._v(" 二、应用场景")]),e._v(" "),t("p",[e._v("基于"),t("code",[e._v("websocket")]),e._v("的事实通信的特点，其存在的应用场景大概有：")]),e._v(" "),t("ul",[t("li",[e._v("弹幕")]),e._v(" "),t("li",[e._v("媒体聊天")]),e._v(" "),t("li",[e._v("协同编辑")]),e._v(" "),t("li",[e._v("基于位置的应用")]),e._v(" "),t("li",[e._v("体育实况更新")]),e._v(" "),t("li",[e._v("股票基金报价实时更新")])]),e._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zh.wikipedia.org/wiki/WebSocket"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.oschina.net/translate/9-killer-uses-for-websockets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.oschina.net/translate/9-killer-uses-for-websockets"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vue3js.cn/interview"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);
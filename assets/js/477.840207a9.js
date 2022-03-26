(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{948:function(v,_,t){"use strict";t.r(_);var e=t(20),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"面试官-如何理解cdn-说说实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-如何理解cdn-说说实现原理"}},[v._v("#")]),v._v(" 面试官：如何理解CDN？说说实现原理？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/437ae0f0-b86b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"一、是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[v._v("#")]),v._v(" 一、是什么")]),v._v(" "),t("p",[v._v("CDN (全称 Content Delivery Network)，即内容分发网络")]),v._v(" "),t("p",[v._v("构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。"),t("code",[v._v("CDN")]),v._v(" 的关键技术主要有内容存储和分发技术")]),v._v(" "),t("p",[v._v("简单来讲，"),t("code",[v._v("CDN")]),v._v("就是根据用户位置分配最近的资源")]),v._v(" "),t("p",[v._v("于是，用户在上网的时候不用直接访问源站，而是访问离他“最近的”一个 CDN 节点，术语叫"),t("strong",[v._v("边缘节点")]),v._v("，其实就是缓存了源站内容的代理服务器。如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/4f0289f0-b86b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"二、原理分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、原理分析"}},[v._v("#")]),v._v(" 二、原理分析")]),v._v(" "),t("p",[v._v("在没有应用"),t("code",[v._v("CDN")]),v._v("时，我们使用域名访问某一个站点时的路径为")]),v._v(" "),t("blockquote",[t("p",[v._v("用户提交域名→浏览器对域名进行解释→"),t("code",[v._v("DNS")]),v._v(" 解析得到目的主机的IP地址→根据IP地址访问发出请求→得到请求数据并回复")])]),v._v(" "),t("p",[v._v("应用"),t("code",[v._v("CDN")]),v._v("后，"),t("code",[v._v("DNS")]),v._v(" 返回的不再是 "),t("code",[v._v("IP")]),v._v(" 地址，而是一个"),t("code",[v._v("CNAME")]),v._v("(Canonical Name ) 别名记录，指向"),t("code",[v._v("CDN")]),v._v("的全局负载均衡")]),v._v(" "),t("p",[t("code",[v._v("CNAME")]),v._v("实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是"),t("code",[v._v("CDN")]),v._v("实现的关键")]),v._v(" "),t("h4",{attrs:{id:"负载均衡系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡系统"}},[v._v("#")]),v._v(" 负载均衡系统")]),v._v(" "),t("p",[v._v("由于没有返回"),t("code",[v._v("IP")]),v._v("地址，于是本地"),t("code",[v._v("DNS")]),v._v("会向负载均衡系统再发送请求  ，则进入到"),t("code",[v._v("CDN")]),v._v("的全局负载均衡系统进行智能调度：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("看用户的 IP 地址，查表得知地理位置，找相对最近的边缘节点")])]),v._v(" "),t("li",[t("p",[v._v("看用户所在的运营商网络，找相同网络的边缘节点")])]),v._v(" "),t("li",[t("p",[v._v("检查边缘节点的负载情况，找负载较轻的节点")])]),v._v(" "),t("li",[t("p",[v._v("其他，比如节点的“健康状况”、服务能力、带宽、响应时间等")])])]),v._v(" "),t("p",[v._v("结合上面的因素，得到最合适的边缘节点，然后把这个节点返回给用户，用户就能够就近访问"),t("code",[v._v("CDN")]),v._v("的缓存代理")]),v._v(" "),t("p",[v._v("整体流程如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/588d7890-b86b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"缓存代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[v._v("#")]),v._v(" 缓存代理")]),v._v(" "),t("p",[v._v("缓存系统是 "),t("code",[v._v("CDN")]),v._v("的另一个关键组成部分，缓存系统会有选择地缓存那些最常用的那些资源")]),v._v(" "),t("p",[v._v("其中有两个衡量"),t("code",[v._v("CDN")]),v._v("服务质量的指标：")]),v._v(" "),t("ul",[t("li",[v._v("命中率：用户访问的资源恰好在缓存系统里，可以直接返回给用户，命中次数与所有访问次数之比")]),v._v(" "),t("li",[v._v("回源率：缓存里没有，必须用代理的方式回源站取，回源次数与所有访问次数之比")])]),v._v(" "),t("p",[v._v("缓存系统也可以划分出层次，分成一级缓存节点和二级缓存节点。一级缓存配置高一些，直连源站，二级缓存配置低一些，直连用户")]),v._v(" "),t("p",[v._v("回源的时候二级缓存只找一级缓存，一级缓存没有才回源站，可以有效地减少真正的回源")]),v._v(" "),t("p",[v._v("现在的商业 "),t("code",[v._v("CDN")]),v._v("命中率都在 90% 以上，相当于把源站的服务能力放大了 10 倍以上")]),v._v(" "),t("h2",{attrs:{id:"三、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[v._v("#")]),v._v(" 三、总结")]),v._v(" "),t("p",[t("code",[v._v("CDN")]),v._v(" 目的是为了改善互联网的服务质量，通俗一点说其实就是提高访问速度")]),v._v(" "),t("p",[t("code",[v._v("CDN")]),v._v(" 构建了全国、全球级别的专网，让用户就近访问专网里的边缘节点，降低了传输延迟，实现了网站加速")]),v._v(" "),t("p",[v._v("通过"),t("code",[v._v("CDN")]),v._v("的负载均衡系统，智能调度边缘节点提供服务，相当于"),t("code",[v._v("CDN")]),v._v("服务的大脑，而缓存系统相当于"),t("code",[v._v("CDN")]),v._v("的心脏，缓存命中直接返回给用户，否则回源")]),v._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://zh.wikipedia.org/wiki/"),t("OutboundLink")],1),v._v("內容傳遞網路")]),v._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903890706661389#heading-5",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://juejin.cn/post/6844903890706661389#heading-5"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/lxx309707872/article/details/109078783",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://blog.csdn.net/lxx309707872/article/details/109078783"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);
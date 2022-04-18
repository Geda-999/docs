(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1079:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说微信小程序的支付流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说微信小程序的支付流程"}},[t._v("#")]),t._v(" 面试官：说说微信小程序的支付流程？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2266fff0-34a0-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[t._v("微信小程序为电商类小程序，提供了非常完善、优秀、安全的支付功能")]),t._v(" "),a("p",[t._v("在小程序内可调用微信的"),a("code",[t._v("API")]),t._v("完成支付功能，方便、快捷")]),t._v(" "),a("p",[t._v("场景如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/6e0cff40-34a0-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/34864830-34a0-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户通过分享或扫描二维码进入商户小程序，用户选择购买，完成选购流程")]),t._v(" "),a("li",[t._v("调起微信支付控件，用户开始输入支付密码")]),t._v(" "),a("li",[t._v("密码验证通过，支付成功。商户后台得到支付成功的通知")]),t._v(" "),a("li",[t._v("返回商户小程序，显示购买成功")]),t._v(" "),a("li",[t._v("微信支付公众号下发支付凭证")])]),t._v(" "),a("h2",{attrs:{id:"二、流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、流程"}},[t._v("#")]),t._v(" 二、流程")]),t._v(" "),a("p",[t._v("以电商小程序为例")]),t._v(" "),a("p",[t._v("支付流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/76b66780-34a0-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("p",[t._v("具体的做法：")]),t._v(" "),a("ul",[a("li",[t._v("打开某小程序，点击直接下单")]),t._v(" "),a("li",[t._v("wx.login获取用户临时登录凭证code，发送到后端服务器换取openId")]),t._v(" "),a("li",[t._v("在下单时，小程序需要将购买的商品Id，商品数量，以及用户的openId传送到服务器")]),t._v(" "),a("li",[t._v("服务器在接收到商品Id、商品数量、openId后，生成服务期订单数据，同时经过一定的签名算法，向微信支付发送请求，获取预付单信息(prepay_id)，同时将获取的数据再次进行相应规则的签名，向小程序端响应必要的信息")]),t._v(" "),a("li",[t._v("小程序端在获取对应的参数后，调用wx.requestPayment()发起微信支付，唤醒支付工作台，进行支付")]),t._v(" "),a("li",[t._v("接下来的一些列操作都是由用户来操作的包括了微信支付密码，指纹等验证，确认支付之后执行鉴权调起支付")]),t._v(" "),a("li",[t._v("鉴权调起支付：在微信后台进行鉴权，微信后台直接返回给前端支付的结果，前端收到返回数据后对支付结果进行展示")]),t._v(" "),a("li",[t._v("推送支付结果：微信后台在给前端返回支付的结果后，也会向后台也返回一个支付结果，后台通过这个支付结果来更新订单的状态")])]),t._v(" "),a("p",[t._v("其中后端响应数据必要的信息则是"),a("code",[t._v("wx.requestPayment")]),t._v("方法所需要的参数，大致如下：")]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 时间戳")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeStamp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随机字符串")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nonceStr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 统一下单接口返回的 prepay_id 参数值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 签名类型")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("signType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 签名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("paySign")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用成功回调")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失败回调")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口调用结束回调")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("参数表如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://files.mdnice.com/user/155/48efed1f-d67f-45a7-ab2c-89a6424fafa0.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、结束"}},[t._v("#")]),t._v(" 三、结束")]),t._v(" "),a("p",[t._v("小程序支付和以往的网页、APP微信支付大同小异，可以说小程序的支付变得更加简洁，不需要设置支付目录、域名授权等操作")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903895970349064",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903895970349064"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
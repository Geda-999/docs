(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{903:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说loader和plugin的区别-编写loader-plugin的思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说loader和plugin的区别-编写loader-plugin的思路"}},[s._v("#")]),s._v(" 面试官：说说Loader和Plugin的区别？编写Loader，Plugin的思路？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/93042280-a894-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、区别"}},[s._v("#")]),s._v(" 一、区别")]),s._v(" "),a("p",[s._v("前面两节我们有提到"),a("code",[s._v("Loader")]),s._v("与"),a("code",[s._v("Plugin")]),s._v("对应的概念，先来回顾下")]),s._v(" "),a("ul",[a("li",[s._v("loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中")]),s._v(" "),a("li",[s._v("plugin 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事")])]),s._v(" "),a("p",[s._v("从整个运行时机上来看，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("p",[s._v("可以看到，两者在运行时机上的区别：")]),s._v(" "),a("ul",[a("li",[s._v("loader 运行在打包文件之前")]),s._v(" "),a("li",[s._v("plugins 在整个编译周期都起作用")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Webpack")]),s._v(" 运行的生命周期中会广播出许多事件，"),a("code",[s._v("Plugin")]),s._v(" 可以监听这些事件，在合适的时机通过"),a("code",[s._v("Webpack")]),s._v("提供的 "),a("code",[s._v("API")]),s._v("改变输出结果")]),s._v(" "),a("p",[s._v("对于"),a("code",[s._v("loader")]),s._v("，实质是一个转换器，将A文件进行编译形成B文件，操作的是文件，比如将"),a("code",[s._v("A.scss")]),s._v("或"),a("code",[s._v("A.less")]),s._v("转变为"),a("code",[s._v("B.css")]),s._v("，单纯的文件转换过程")]),s._v(" "),a("h2",{attrs:{id:"二、编写loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、编写loader"}},[s._v("#")]),s._v(" 二、编写loader")]),s._v(" "),a("p",[s._v("在编写 "),a("code",[s._v("loader")]),s._v(" 前，我们首先需要了解 "),a("code",[s._v("loader")]),s._v(" 的本质")]),s._v(" "),a("p",[s._v("其本质为函数，函数中的 "),a("code",[s._v("this")]),s._v(" 作为上下文会被 "),a("code",[s._v("webpack")]),s._v(" 填充，因此我们不能将 "),a("code",[s._v("loader")]),s._v("设为一个箭头函数")]),s._v(" "),a("p",[s._v("函数接受一个参数，为 "),a("code",[s._v("webpack")]),s._v(" 传递给 "),a("code",[s._v("loader")]),s._v(" 的文件源内容")]),s._v(" "),a("p",[s._v("函数中 "),a("code",[s._v("this")]),s._v(" 是由 "),a("code",[s._v("webpack")]),s._v(" 提供的对象，能够获取当前 "),a("code",[s._v("loader")]),s._v(" 所需要的各种信息")]),s._v(" "),a("p",[s._v("函数中有异步操作或同步操作，异步操作通过 "),a("code",[s._v("this.callback")]),s._v(" 返回，返回值要求为 "),a("code",[s._v("string")]),s._v(" 或者 "),a("code",[s._v("Buffer")])]),s._v(" "),a("p",[s._v("代码如下所示：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出一个函数，source为webpack传递给loader的文件源内容")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSomeThing2JsString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果 loader 配置了 options 对象，那么this.query将指向 options")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以用作解析其他模块路径的上下文")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this.context'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n     * this.callback 参数：\n     * error：Error | null，当 loader 出错时向外抛出一个 error\n     * content：String | Buffer，经过 loader 编译后需要导出的内容\n     * sourceMap：为方便调试生成的编译后内容的 source map\n     * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 异步")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同步")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("一般在编写"),a("code",[s._v("loader")]),s._v("的过程中，保持功能单一，避免做多种功能")]),s._v(" "),a("p",[s._v("如"),a("code",[s._v("less")]),s._v("文件转换成 "),a("code",[s._v("css")]),s._v("文件也不是一步到位，而是 "),a("code",[s._v("less-loader")]),s._v("、"),a("code",[s._v("css-loader")]),s._v("、"),a("code",[s._v("style-loader")]),s._v("几个 "),a("code",[s._v("loader")]),s._v("的链式调用才能完成转换")]),s._v(" "),a("h2",{attrs:{id:"三、编写plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、编写plugin"}},[s._v("#")]),s._v(" 三、编写plugin")]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("webpack")]),s._v("基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务")]),s._v(" "),a("p",[s._v("在之前也了解过，"),a("code",[s._v("webpack")]),s._v("编译会创建两个核心对象：")]),s._v(" "),a("ul",[a("li",[s._v("compiler：包含了 webpack 环境的所有的配置信息，包括 options，loader 和 plugin，和 webpack 整个生命周期相关的钩子")]),s._v(" "),a("li",[s._v("compilation：作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 Compilation 将被创建")])]),s._v(" "),a("p",[s._v("如果自己要实现"),a("code",[s._v("plugin")]),s._v("，也需要遵循一定的规范：")]),s._v(" "),a("ul",[a("li",[s._v("插件必须是一个函数或者是一个包含 "),a("code",[s._v("apply")]),s._v(" 方法的对象，这样才能访问"),a("code",[s._v("compiler")]),s._v("实例")]),s._v(" "),a("li",[s._v("传给每个插件的 "),a("code",[s._v("compiler")]),s._v(" 和 "),a("code",[s._v("compilation")]),s._v(" 对象都是同一个引用，因此不建议修改")]),s._v(" "),a("li",[s._v("异步的事件需要在插件处理完任务时调用回调函数通知 "),a("code",[s._v("Webpack")]),s._v(" 进入下一个流程，不然会卡住")])]),s._v(" "),a("p",[s._v("实现"),a("code",[s._v("plugin")]),s._v("的模板如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyPlugin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compiler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 找到合适的事件钩子，实现自己的插件功能")]),s._v("\n    compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("emit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyPlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compilation")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compilation: 当前打包构建流程的上下文")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compilation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do something...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v("emit")]),s._v(" 事件发生时，代表源文件的转换和组装已经完成，可以读取到最终将输出的资源、代码块、模块及其依赖，并且可以修改输出资源的内容")]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webpack.docschina.org/api/loaders/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://webpack.docschina.org/api/loaders/"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.docschina.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://webpack.docschina.org/api/compiler-hooks/"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000039877943",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000039877943"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vue3js.cn/interview"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
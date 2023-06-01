(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{992:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"面试官-与webpack类似的工具还有哪些-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-与webpack类似的工具还有哪些-区别"}},[s._v("#")]),s._v(" 面试官：与webpack类似的工具还有哪些？区别？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、模块化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、模块化工具"}},[s._v("#")]),s._v(" 一、模块化工具")]),s._v(" "),t("p",[s._v("模块化是一种处理复杂系统分解为更好的可管理模块的方式")]),s._v(" "),t("p",[s._v("可以用来分割，组织和打包应用。每个模块完成一个特定的子功能，所有的模块按某种方法组装起来，成为一个整体("),t("code",[s._v("bundle")]),s._v(")")]),s._v(" "),t("p",[s._v("在前端领域中，并非只有"),t("code",[s._v("webpack")]),s._v("这一款优秀的模块打包工具，还有其他类似的工具，例如"),t("code",[s._v("Rollup")]),s._v("、"),t("code",[s._v("Parcel")]),s._v("、"),t("code",[s._v("snowpack")]),s._v("，以及最近风头无两的"),t("code",[s._v("Vite")])]),s._v(" "),t("p",[s._v("通过这些模块打包工具，能够提高我们的开发效率，减少开发成本")]),s._v(" "),t("p",[s._v("这里没有提及"),t("code",[s._v("gulp")]),s._v("、"),t("code",[s._v("grunt")]),s._v("是因为它们只是定义为构建工具，不能类比")]),s._v(" "),t("h3",{attrs:{id:"rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[s._v("#")]),s._v(" Rollup")]),s._v(" "),t("p",[t("code",[s._v("Rollup")]),s._v(" 是一款 "),t("code",[s._v("ES Modules")]),s._v(" 打包器，从作用上来看，"),t("code",[s._v("Rollup")]),s._v(" 与 "),t("code",[s._v("Webpack")]),s._v(" 非常类似。不过相比于 "),t("code",[s._v("Webpack")]),s._v("，"),t("code",[s._v("Rollup")]),s._v("要小巧的多")]),s._v(" "),t("p",[s._v("现在很多我们熟知的库都都使用它进行打包，比如："),t("code",[s._v("Vue")]),s._v("、"),t("code",[s._v("React")]),s._v("和"),t("code",[s._v("three.js")]),s._v("等")]),s._v(" "),t("p",[s._v("举个例子：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./src/messages.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hey Guys, I am zce~'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./src/logger.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'---------- INFO ----------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--------------------------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("error")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'---------- ERROR ----------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'---------------------------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./src/index.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" log "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./logger'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" messages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./messages'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("然后通过"),t("code",[s._v("rollup")]),s._v("进行打包")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npx rollup "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("file "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bundle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("打包结果如下图"),t("img",{attrs:{src:"https://static.vue-js.com/8fe07830-b143-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("p",[s._v("可以看到，代码非常简洁，完成不像"),t("code",[s._v("webpack")]),s._v("那样存在大量引导代码和模块函数")]),s._v(" "),t("p",[s._v("并且"),t("code",[s._v("error")]),s._v("方法由于没有被使用，输出的结果中并无"),t("code",[s._v("error")]),s._v("方法，可以看到，"),t("code",[s._v("rollup")]),s._v("默认开始"),t("code",[s._v("Tree-shaking")]),s._v(" 优化输出结果")]),s._v(" "),t("p",[s._v("因此，可以看到"),t("code",[s._v("Rollup")]),s._v("的优点：")]),s._v(" "),t("ul",[t("li",[s._v("代码效率更简洁、效率更高")]),s._v(" "),t("li",[s._v("默认支持 Tree-shaking")])]),s._v(" "),t("p",[s._v("但缺点也十分明显，加载其他类型的资源文件或者支持导入 "),t("code",[s._v("CommonJS")]),s._v(" 模块，又或是编译 "),t("code",[s._v("ES")]),s._v(" 新特性，这些额外的需求 "),t("code",[s._v("Rollup")]),s._v("需要使用插件去完成")]),s._v(" "),t("p",[s._v("综合来看，"),t("code",[s._v("rollup")]),s._v("并不适合开发应用使用，因为需要使用第三方模块，而目前第三方模块大多数使用"),t("code",[s._v("CommonJs")]),s._v("方式导出成员，并且"),t("code",[s._v("rollup")]),s._v("不支持"),t("code",[s._v("HMR")]),s._v("，使开发效率降低")]),s._v(" "),t("p",[s._v("但是在用于打包"),t("code",[s._v("JavaScript")]),s._v(" 库时，"),t("code",[s._v("rollup")]),s._v("比 "),t("code",[s._v("webpack")]),s._v(" 更有优势，因为其打包出来的代码更小、更快，其存在的缺点可以忽略")]),s._v(" "),t("h3",{attrs:{id:"parcel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parcel"}},[s._v("#")]),s._v(" Parcel")]),s._v(" "),t("p",[s._v("Parcel ，是一款完全零配置的前端打包器，它提供了 “傻瓜式” 的使用体验，只需了解简单的命令，就能构建前端应用程序")]),s._v(" "),t("p",[t("code",[s._v("Parcel")]),s._v(" 跟 "),t("code",[s._v("Webpack")]),s._v(" 一样都支持以任意类型文件作为打包入口，但建议使用"),t("code",[s._v("HTML")]),s._v("文件作为入口，该"),t("code",[s._v("HTML")]),s._v("文件像平时一样正常编写代码、引用资源。如下所示：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Parcel Tutorials"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("main.js文件通过"),t("code",[s._v("ES Moudle")]),s._v("方法导入其他模块成员")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./src/main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" log "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./logger'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello parcel'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./src/logger.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'---------- INFO ----------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("运行之后，使用命令打包")]),s._v(" "),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx parcel src/index.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行命令后，"),t("code",[s._v("Parcel")]),s._v("不仅打包了应用，同时也启动了一个开发服务器，跟"),t("code",[s._v("webpack Dev Server")]),s._v("一样")]),s._v(" "),t("p",[s._v("跟"),t("code",[s._v("webpack")]),s._v("类似，也支持模块热替换，但用法更简单")]),s._v(" "),t("p",[s._v("同时，"),t("code",[s._v("Parcel")]),s._v("有个十分好用的功能：支持自动安装依赖，像"),t("code",[s._v("webpack")]),s._v("开发阶段突然使用安装某个第三方依赖，必然会终止"),t("code",[s._v("dev server")]),s._v("然后安装再启动。而"),t("code",[s._v("Parcel")]),s._v("则免了这繁琐的工作流程")]),s._v(" "),t("p",[s._v("同时，"),t("code",[s._v("Parcel")]),s._v("能够零配置加载其他类型的资源文件，无须像"),t("code",[s._v("webpack")]),s._v("那样配置对应的"),t("code",[s._v("loader")])]),s._v(" "),t("p",[s._v("打包命令如下：")]),s._v(" "),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx parcel src/index.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于打包过程是多进程同时工作，构建速度会比"),t("code",[s._v("Webpack")]),s._v(" 快，输出文件也会被压缩，并且样式代码也会被单独提取到单个文件中")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/ec17e7a0-b1a2-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("p",[s._v("可以感受到，"),t("code",[s._v("Parcel")]),s._v("给开发者一种很大的自由度，只管去实现业务代码，其他事情用"),t("code",[s._v("Parcel")]),s._v("解决")]),s._v(" "),t("h3",{attrs:{id:"snowpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snowpack"}},[s._v("#")]),s._v(" Snowpack")]),s._v(" "),t("p",[s._v("Snowpack，是一种闪电般快速的前端构建工具，专为现代"),t("code",[s._v("Web")]),s._v("设计，较复杂的打包工具（如"),t("code",[s._v("Webpack")]),s._v("或"),t("code",[s._v("Parcel")]),s._v("）的替代方案，利用"),t("code",[s._v("JavaScript")]),s._v("的本机模块系统，避免不必要的工作并保持流畅的开发体验")]),s._v(" "),t("p",[s._v("开发阶段，每次保存单个文件时，"),t("code",[s._v("Webpack")]),s._v("和"),t("code",[s._v("Parcel")]),s._v("都需要重新构建和重新打包应用程序的整个"),t("code",[s._v("bundle")]),s._v("。而"),t("code",[s._v("Snowpack")]),s._v("为你的应用程序每个文件构建一次，就可以永久缓存，文件更改时，"),t("code",[s._v("Snowpack")]),s._v("会重新构建该单个文件")]),s._v(" "),t("p",[s._v("下图给出"),t("code",[s._v("webpack")]),s._v("与"),t("code",[s._v("snowpack")]),s._v("打包区别：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/79197830-b1a3-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("p",[s._v("在重新构建每次变更时没有任何的时间浪费，只需要在浏览器中进行HMR更新")]),s._v(" "),t("h3",{attrs:{id:"vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[s._v("#")]),s._v(" Vite")]),s._v(" "),t("p",[s._v("vite ，是一种新型前端构建工具，能够显著提升前端开发体验")]),s._v(" "),t("p",[s._v("它主要由两部分组成：")]),s._v(" "),t("ul",[t("li",[s._v("一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度快到惊人的 [模块热更新HMR")]),s._v(" "),t("li",[s._v("一套构建指令，它使用 Rollup打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源")])]),s._v(" "),t("p",[s._v("其作用类似"),t("code",[s._v("webpack")]),s._v("+ "),t("code",[s._v("webpack-dev-server")]),s._v("，其特点如下：")]),s._v(" "),t("ul",[t("li",[s._v("快速的冷启动")]),s._v(" "),t("li",[s._v("即时的模块热更新")]),s._v(" "),t("li",[s._v("真正的按需编译")])]),s._v(" "),t("p",[t("code",[s._v("vite")]),s._v("会直接启动开发服务器，不需要进行打包操作，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快")]),s._v(" "),t("p",[s._v("利用现代浏览器支持"),t("code",[s._v("ES Module")]),s._v("的特性，当浏览器请求某个模块的时候，再根据需要对模块的内容进行编译，这种方式大大缩短了编译时间")]),s._v(" "),t("p",[s._v("原理图如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/9f2eed30-b143-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("p",[s._v("在热模块"),t("code",[s._v("HMR")]),s._v("方面，当修改一个模块的时候，仅需让浏览器重新请求该模块即可，无须像"),t("code",[s._v("webpack")]),s._v("那样需要把该模块的相关依赖模块全部编译一次，效率更高")]),s._v(" "),t("h3",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),t("p",[s._v("相比上述的模块化工具，"),t("code",[s._v("webpack")]),s._v("大而全，很多常用的功能做到开箱即用。有两大最核心的特点："),t("strong",[s._v("一切皆模块")]),s._v("和"),t("strong",[s._v("按需加载")])]),s._v(" "),t("p",[s._v("与其他构建工具相比，有如下优势：")]),s._v(" "),t("ul",[t("li",[s._v("智能解析：对 CommonJS 、 AMD 、ES6 的语法做了兼容")]),s._v(" "),t("li",[s._v("万物模块：对 js、css、图片等资源文件都支持打包")]),s._v(" "),t("li",[s._v("开箱即用：HRM、Tree-shaking等功能")]),s._v(" "),t("li",[s._v("代码分割：可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间")]),s._v(" "),t("li",[s._v("插件系统，具有强大的 Plugin 接口，具有更好的灵活性和扩展性")]),s._v(" "),t("li",[s._v("易于调试：支持 SourceUrls 和 SourceMaps")]),s._v(" "),t("li",[s._v("快速运行：webpack 使用异步 IO 并具有多级缓存，这使得 webpack 很快且在增量编译上更加快")]),s._v(" "),t("li",[s._v("生态环境好：社区更丰富，出现的问题更容易解决")])]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/95684686",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/95684686"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cn.vitejs.dev/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cn.vitejs.dev/guide/"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000039370642",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000039370642"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
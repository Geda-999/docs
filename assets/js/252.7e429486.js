(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{722:function(s,t,a){"use strict";a.r(t);var n=a(20),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装和配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置文件"}},[s._v("#")]),s._v(" 安装和配置文件")]),s._v(" "),a("blockquote",[a("p",[s._v("浏览器是识别不了ts，所以上线前ts会转换成js")])]),s._v(" "),a("ul",[a("li",[s._v("npx和npm有什么关系？")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("npx最新的npm语法\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_0、初始化npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0、初始化npm"}},[s._v("#")]),s._v(" 0、初始化npm")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1、安装typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装typescript"}},[s._v("#")]),s._v(" 1、安装typescript")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i typescript -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、新建index-ts后缀文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、新建index-ts后缀文件"}},[s._v("#")]),s._v(" 2、新建index.ts后缀文件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("num")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3、编译ts文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、编译ts文件"}},[s._v("#")]),s._v(" 3、编译ts文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tsc index.ts//mac\n\nnpx tsc index.ts//windows\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4、自动编译ts文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、自动编译ts文件"}},[s._v("#")]),s._v(" 4、自动编译ts文件")]),s._v(" "),a("ul",[a("li",[s._v("vscode 使用命令行tsc –init 生成tsconfig.json配置文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tsc --init//mac\n\nnpx tsc --init//windows\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("tsc –init 生成tsconfig.json配置文件，然后在终端运行 tsc -w")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tsc -w//mac\n\nnpx tsc -w//windows\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5、在package-json中配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、在package-json中配置"}},[s._v("#")]),s._v(" 5、在package.json中配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc -w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("tsconfig.json配置文件")]),s._v(" "),a("p",[s._v("地址："),a("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网TS"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定 ECMAScript 目标版本: 'ES5' 'es2015'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选择模块解析策略")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用实验性的ES装饰器")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"allowSyntheticDefaultImports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许从没有设置默认导出的模块中默认导入。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用所有严格类型检查选项")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在表达式和声明上有隐含的 any类型时报错")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以严格模式检查模块，并在每个文件里加入 'use strict'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成相应的.d.ts文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除编译后的所有的注释")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"noImplicitReturns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不是函数的所有返回路径都有返回值时报错")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从 tslib 导入辅助工具函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定要包含在编译中的库文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"typeRoots"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules/@types"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包过的目录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打代码的目录")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基本地址为根目录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"@/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//路径别名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/**/*.ts"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.test.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
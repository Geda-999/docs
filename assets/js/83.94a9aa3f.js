(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{553:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"yaml语言教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml语言教程"}},[s._v("#")]),s._v(" yaml语言教程")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v('YAML 是 "YAML Ain\'t a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。')]),s._v(" "),t("p",[s._v("YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别"),t("strong",[s._v("适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲")]),s._v("（例如：许多电子邮件标题格式和YAML非常接近）。")]),s._v(" "),t("p",[s._v("YAML 的配置文件后缀为 "),t("strong",[s._v(".yml")]),s._v("，如："),t("strong",[s._v("runoob.yml")]),s._v(" 。")]),s._v(" "),t("blockquote",[t("p",[s._v("yaml常用来用作配置文件，和json类似")])]),s._v(" "),t("h2",{attrs:{id:"基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[s._v("#")]),s._v(" 基本语法")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("大小写敏感")])]),s._v(" "),t("li",[t("p",[s._v("使用缩进表示层级关系")])]),s._v(" "),t("li",[t("p",[s._v("缩进不允许使用tab，只允许空格")])]),s._v(" "),t("li",[t("p",[s._v("缩进的空格数不重要，只要相同层级的元素左对齐即可")])]),s._v(" "),t("li",[t("p",[s._v("'#'表示注释")])])]),s._v(" "),t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("p",[s._v("YAML 支持以下几种数据类型：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("对象")]),s._v("：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）")]),s._v(" "),t("li",[t("strong",[s._v("数组")]),s._v("：一组按次序排列的值，又称为序列（sequence） / 列表（list）")]),s._v(" "),t("li",[t("strong",[s._v("纯量")]),s._v("（scalars）：单个的、不可再分的值")])]),s._v(" "),t("h2",{attrs:{id:"yaml-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml-对象"}},[s._v("#")]),s._v(" YAML 对象")]),s._v(" "),t("p",[s._v("对象的几种表示形式：")]),s._v(" "),t("p",[s._v("1、对象键值对使用冒号结构表示 "),t("strong",[s._v("key: value")]),s._v("，冒号后面要加一个空格。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" value\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、也可以使用 "),t("strong",[s._v("key:{key1: value1, key2: value2, ...}")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("key1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3、还可以使用缩进表示层级关系；")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("child-key1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" value1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("child-key2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" value2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("同2，只是表示形式不同。")]),s._v(" "),t("p",[s._v("4、较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" complexkey1\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("complexkey2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" complexvalue1\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" complexvalue2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("意思即对象的属性是一个数组 [complexkey1,complexkey2]，对应的值也是一个数组 [complexvalue1,complexvalue2]")]),s._v(" "),t("h2",{attrs:{id:"yaml-数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml-数组"}},[s._v("#")]),s._v(" YAML 数组")]),s._v(" "),t("p",[s._v("以 "),t("strong",[s._v("-")]),s._v(" 开头的行表示构成一个数组：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" A\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" B\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" C\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("YAML 支持多维数组，可以使用行内表示：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" A\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" B\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" C\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("一个相对复杂的例子：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("companies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" company1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("price")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200W\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" company2\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("price")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500W\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("意思是 companies 属性是一个数组，每一个数组元素又是由 id、name、price 三个属性构成。")]),s._v(" "),t("p",[s._v("数组也可以使用流式(flow)的方式表示：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("companies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" company1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("price")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200W"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" company2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("price")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500W"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"复合结构-对象和数组组合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复合结构-对象和数组组合"}},[s._v("#")]),s._v(" 复合结构（对象和数组组合）")]),s._v(" "),t("p",[s._v("数组和对象可以构成复合结构，例：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("languages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Ruby\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Perl\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Python \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("websites")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("YAML")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yaml.org \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Ruby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ruby"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lang.org \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Python")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python.org \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Perl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" use.perl.org\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("转换为 js 为：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("languages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ruby'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Perl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Python'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("websites")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("YAML")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yaml.org'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Ruby")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ruby-lang.org'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Python")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python.org'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Perl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use.perl.org'")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"纯量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯量"}},[s._v("#")]),s._v(" 纯量")]),s._v(" "),t("p",[s._v("纯量是最基本的，不可再分的值，包括：")]),s._v(" "),t("ul",[t("li",[s._v("字符串")]),s._v(" "),t("li",[s._v("布尔值")]),s._v(" "),t("li",[s._v("整数")]),s._v(" "),t("li",[s._v("浮点数")]),s._v(" "),t("li",[s._v("Null")]),s._v(" "),t("li",[s._v("时间")]),s._v(" "),t("li",[s._v("日期")])]),s._v(" "),t("p",[s._v("使用一个例子来快速了解纯量的基本使用：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 布尔值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("TRUE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#true,True都可以")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("FALSE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#false，False都可以")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("float")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浮点数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.8523015e+5")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以使用科学计数法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 整数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 0b1010_0111_0100_1010_1110    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二进制表示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Null")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("parent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("~")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用~表示null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 哈哈 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串默认不使用引号表示")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以使用双引号或者单引号包裹特殊字符")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" newline\n      newline2    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#字符串可以拆成多行，每一行会被转化成一个空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("2018-02-17")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日期必须使用ISO 8601格式，即yyyy-MM-dd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("datetime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("2018-02-17T15:02:31+08:00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("多行字符串可以使用"),t("code",[s._v("|")]),s._v("保留换行符，也可以使用"),t("code",[s._v(">")]),s._v("折叠换行。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n  Foo\n  Bar")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("that")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n  Foo\n  Bar")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("转为js代码如下。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Foo\\nBar\\n'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" that"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Foo Bar\\n' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("+")]),s._v("表示保留文字块末尾的换行，"),t("code",[s._v("-")]),s._v("表示删除字符串末尾的换行。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("s1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n  Foo")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("s2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("+\n  Foo\n \n \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("s3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n  Foo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("转为json代码如下")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Foo\\n'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Foo\\n\\n\\n'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Foo' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("字符串之中可以插入 HTML 标记。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n  <p style="color: red">\n    段落\n  </p>')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"转换数据格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转换数据格式"}},[s._v("#")]),s._v(" 转换数据格式")]),s._v(" "),t("p",[s._v("允许使用两个感叹号，强制转换数据类型。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!!str")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!!str")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("转换js结果同：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"锚点引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锚点引用"}},[s._v("#")]),s._v(" 锚点引用")]),s._v(" "),t("p",[t("strong",[s._v("&")]),s._v(' 锚点和< span class="marked">* 别名，可以用来引用:')]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&defaults")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加锚点")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  postgres\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     localhost\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("development")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp_development\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*defaults")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <<表示合并，*引用锚点")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp_test\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*defaults")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <<表示合并，*引用锚点")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("相当于:")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  postgres\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     localhost\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("development")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp_development\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  postgres\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     localhost\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp_test\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  postgres\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     localhost\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("&")]),s._v(" 用来建立锚点（defaults），"),t("strong",[s._v("<<")]),s._v(" 表示合并到当前数据，***** 用来引用锚点。")]),s._v(" "),t("p",[s._v("下面是另一个例子:")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&showell")]),s._v(" Steve \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Clark \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Brian \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Oren \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*showell")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("转为js代码如下:")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Steve'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Clark'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Brian'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Oren'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Steve'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("参考：")]),s._v(" "),t("ul",[t("li",[s._v("yaml官网："),t("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://yaml.org/"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("yaml与js的转换demo："),t("a",{attrs:{href:"http://nodeca.github.io/js-yaml/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nodeca.github.io/js-yaml/"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("菜鸟教程："),t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.ruanyifeng.com/blog/2016/07/yaml.html"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{1040:function(t,e,a){"use strict";a.r(e);var s=a(20),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说你对输入输出重定向和管道的理解-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对输入输出重定向和管道的理解-应用场景"}},[t._v("#")]),t._v(" 面试官：说说你对输入输出重定向和管道的理解？应用场景？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/1036dde0-0634-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[a("code",[t._v("linux")]),t._v("中有三种标准输入输出，分别是"),a("code",[t._v("STDIN")]),t._v("，"),a("code",[t._v("STDOUT")]),t._v("，"),a("code",[t._v("STDERR")]),t._v("，对应的数字是0、1、2：")]),t._v(" "),a("ul",[a("li",[t._v("STDIN 是标准输入，默认从键盘读取信息")]),t._v(" "),a("li",[t._v("STDOUT 是标准输出，默认将输出结果输出至终端")]),t._v(" "),a("li",[t._v("STDERR 是标准错误，默认将输出结果输出至终端")])]),t._v(" "),a("p",[t._v("对于任何"),a("code",[t._v("linux")]),t._v("命令的执行会有下面的过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/1a57caf0-0634-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("p",[t._v("一条命令的执行需要键盘等的标准输入，命令的执行和正确或错误，其中的每一个双向箭头就是一个通道，所以数据流可以流入到文件端（"),a("strong",[t._v("重定向或管道")]),t._v("）")]),t._v(" "),a("p",[t._v("简单来讲，重定向就是把本来要显示在终端的命令结果，输送到别的地方，分成：")]),t._v(" "),a("ul",[a("li",[t._v("输入重定向：流出到屏幕如果命令所需的输入不是来自键盘，而是来自指定的文件")]),t._v(" "),a("li",[t._v("输出重定向：命令的输出可以不显示在屏幕，而是写在指定的文件中")])]),t._v(" "),a("p",[t._v("管道就是把两个命令连接起来使用，一个命令的输出作为另一个命令的输入")]),t._v(" "),a("p",[t._v("两者的区别在于：")]),t._v(" "),a("ul",[a("li",[t._v("管道触发两个子进程，执行 | 两边的程序；而重定向是在一个进程内执行。")]),t._v(" "),a("li",[t._v("管道两边都是shell命令")]),t._v(" "),a("li",[t._v("重定向符号的右边只能是Linux文件")]),t._v(" "),a("li",[t._v("重定向符号的优先级大于管道")])]),t._v(" "),a("h2",{attrs:{id:"二、命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、命令"}},[t._v("#")]),t._v(" 二、命令")]),t._v(" "),a("p",[t._v("重定向常见的命令符号有：")]),t._v(" "),a("ul",[a("li",[t._v("> ： 输出重定向到一个文件或设备 覆盖原来的文件")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果该文件不存在，则新建一个文件")]),t._v(" "),a("p",[t._v("如果该文件已经存在，会把文件内容覆盖")]),t._v(" "),a("p",[t._v("这些操纵不会征用用户的确认")])]),t._v(" "),a("ul",[a("li",[t._v(">> ：输出重定向到一个文件或设备，但是是 追加原来的文件的末尾")]),t._v(" "),a("li",[t._v("<  ：用于制定命令的输入")]),t._v(" "),a("li",[t._v("<< ：从键盘的输入重定向为某个命令的输入")])]),t._v(" "),a("blockquote",[a("p",[t._v("以逐行输入的模式（回车键进行换行）")]),t._v(" "),a("p",[t._v("所有输入的行都将在输入结束字符串之后发送给命令")])]),t._v(" "),a("ul",[a("li",[t._v("2> 将一个标准错误输出重定向到一个文件或设备，会覆盖原来的文件")]),t._v(" "),a("li",[t._v("2>> 将一个标准错误输出重定向到一个文件或设备，是追加到原来的文件")]),t._v(" "),a("li",[t._v("2>&1：组合符号，将标准错误输出重定向到标准输出相同的地方")])]),t._v(" "),a("blockquote",[a("p",[t._v("1就是代表标准输出")])]),t._v(" "),a("ul",[a("li",[t._v(">& 将一个标准错误输出重定向到一个文件或设备覆盖原来的文件")]),t._v(" "),a("li",[t._v("|& 将一个标准错误管道输出到另一个命令作为输入")])]),t._v(" "),a("h2",{attrs:{id:"三、应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),a("p",[t._v("将当前目录的文件输出重定向到"),a("code",[t._v("1.txt")]),t._v("文件中，并且会清空原有的"),a("code",[t._v("1.txt")]),t._v("的内容")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ls -a > 1.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者以追加的形式，重定向输入到"),a("code",[t._v("1.txt")]),t._v("中")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ls -a >> 1.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("将标准错误输出到某个文件，可以如下：")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ touch 2> 2.txt\n$ cat 2.txt\ntouch: 缺少了文件操作数\n请尝试执行 "touch --help" 来获取更多信息。\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("通过组合符号将两者结合一起，无论进程输出的信息是正确还是错误的信息，都会重定向到指定的文件里")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@linguanghui home]# abc &> file.txt\n[root@linguanghui home]# cat file.txt \n-bash: abc: command not found\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("再者通过管道查询文件内容是否包含想要的信息：")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cat test.txt | grep -n 'xxx'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("上述"),a("code",[t._v("cat test.txt")]),t._v("会将"),a("code",[t._v("test.txt")]),t._v("的内容作为标准输出，然后利用管道，将其作为"),a("code",[t._v("grep -n 'xxx'")]),t._v("命令的标准输入。")]),t._v(" "),a("h3",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020519335",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000020519335"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://murphypei.github.io/blog/2018/04/linux-redirect-pipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://murphypei.github.io/blog/2018/04/linux-redirect-pipe"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.huaweicloud.com/articles/0fb70e8c724ae79f4fc8d676cd6160d3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.huaweicloud.com/articles/0fb70e8c724ae79f4fc8d676cd6160d3.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);
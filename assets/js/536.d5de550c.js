(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1008:function(t,e,a){"use strict";a.r(e);var s=a(20),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说git-中-head、工作树和索引之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说git-中-head、工作树和索引之间的区别"}},[t._v("#")]),t._v(" 面试官：说说Git 中 HEAD、工作树和索引之间的区别？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2de056a0-fa40-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、head"}},[t._v("#")]),t._v(" 一、HEAD")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("git")]),t._v("中，可以存在很多分支，其本质上是一个指向"),a("code",[t._v("commit")]),t._v("对象的可变指针，而"),a("code",[t._v("Head")]),t._v("是一个特别的指针，是一个指向你正在工作中的本地分支的指针")]),t._v(" "),a("p",[t._v("简单来讲，就是你现在在哪儿，HEAD 就指向哪儿")]),t._v(" "),a("p",[t._v("例如当前我们处于"),a("code",[t._v("master")]),t._v("分支，所以"),a("code",[t._v("HEAD")]),t._v("这个指针指向了"),a("code",[t._v("master")]),t._v("分支指针")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/36cb0da0-fa40-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),a("p",[t._v("然后通过调用"),a("code",[t._v("git checkout test")]),t._v("切换到"),a("code",[t._v("test")]),t._v("分支，那么"),a("code",[t._v("HEAD")]),t._v("则指向"),a("code",[t._v("test")]),t._v("分支，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/3e86ba80-fa40-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),a("p",[t._v("但我们在"),a("code",[t._v("test")]),t._v("分支再一次"),a("code",[t._v("commit")]),t._v("信息的时候，"),a("code",[t._v("HEAD")]),t._v("指针仍然指向了"),a("code",[t._v("test")]),t._v("分支指针，而"),a("code",[t._v("test")]),t._v("分支指针已经指向了最新创建的提交，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/439839b0-fa66-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),a("p",[t._v("这个"),a("code",[t._v("HEAD")]),t._v("存储的位置就在"),a("code",[t._v(".git/HEAD")]),t._v("目录中，查看信息可以看到"),a("code",[t._v("HEAD")]),t._v("指向了另一个文件")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cat .git/HEAD\nref: refs/heads/master\n\n$ cat .git/refs/heads/master\n7406a10efcc169bbab17827aeda189aa20376f7f\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这个文件的内容是一串哈希码，而这个哈希码正是"),a("code",[t._v("master")]),t._v("分支上最新的提交所对应的哈希码")]),t._v(" "),a("p",[t._v("所以，当我们切换分支的时候，"),a("code",[t._v("HEAD")]),t._v("指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交")]),t._v(" "),a("p",[t._v("所以，HEAD指针 ——–> 分支指针 ——–> 最新提交")]),t._v(" "),a("h2",{attrs:{id:"二、工作树和索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、工作树和索引"}},[t._v("#")]),t._v(" 二、工作树和索引")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Git")]),t._v("管理下，大家实际操作的目录被称为工作树，也就是工作区域")]),t._v(" "),a("p",[t._v("在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/46e5ac40-fa40-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Git")]),t._v("在执行提交的时候，不是直接将工作树的状态保存到数据库，而是将设置在中间索引区域的状态保存到数据库")]),t._v(" "),a("p",[t._v("因此，要提交文件，首先需要把文件加入到索引区域中。")]),t._v(" "),a("p",[t._v("所以，凭借中间的索引，可以避免工作树中不必要的文件提交，还可以将文件修改内容的一部分加入索引区域并提交")]),t._v(" "),a("h2",{attrs:{id:"三、区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),a("p",[t._v("从所在的位置来看：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HEAD 指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交")])]),t._v(" "),a("li",[a("p",[t._v("工作树是查看和编辑的（源）文件的实际内容")])]),t._v(" "),a("li",[a("p",[t._v("索引是放置你想要提交给 git仓库文件的地方，如工作树的代码通过 git add 则添加到 git 索引中，通过git commit 则将索引区域的文件提交到 git 仓库中")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://backlog.com/git-tutorial/cn/intro/intro1_4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://backlog.com/git-tutorial/cn/intro/intro1_4.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903598522908686",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903598522908686"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zsythink.net/archives/3412",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zsythink.net/archives/3412"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{977:function(e,t,a){"use strict";a.r(t);var v=a(20),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"面试官-说说你对git-rebase-和-git-merge的理解-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对git-rebase-和-git-merge的理解-区别"}},[e._v("#")]),e._v(" 面试官：说说你对git rebase 和 git merge的理解？区别？")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/77590970-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[e._v("#")]),e._v(" 一、是什么")]),e._v(" "),a("p",[e._v("在使用 "),a("code",[e._v("git")]),e._v(" 进行版本管理的项目中，当完成一个特性的开发并将其合并到 "),a("code",[e._v("master")]),e._v(" 分支时，会有两种方式：")]),e._v(" "),a("ul",[a("li",[e._v("git merge")]),e._v(" "),a("li",[e._v("git rebase")])]),e._v(" "),a("p",[a("code",[e._v("git rebase")]),e._v(" 与 "),a("code",[e._v("git merge")]),e._v("都有相同的作用，都是将一个分支的提交合并到另一分支上，但是在原理上却不相同")]),e._v(" "),a("p",[e._v("用法上两者也十分的简单：")]),e._v(" "),a("h3",{attrs:{id:"git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),a("p",[e._v("将当前分支合并到指定分支，命令用法如下：")]),e._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git merge xxx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),a("p",[e._v("将当前分支移植到指定分支或指定"),a("code",[e._v("commit")]),e._v("之上，用法如下：")]),e._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git rebase -i <commit>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("常见的参数有"),a("code",[e._v("--continue")]),e._v("，用于解决冲突之后，继续执行"),a("code",[e._v("rebase")])]),e._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git rebase --continue\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分析"}},[e._v("#")]),e._v(" 二、分析")]),e._v(" "),a("h3",{attrs:{id:"git-merge-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-2"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("git merge")]),e._v("将当前分支与"),a("code",[e._v("xxx")]),e._v("分支合并，产生的新的"),a("code",[e._v("commit")]),e._v("对象有两个父节点")]),e._v(" "),a("p",[e._v("如果“指定分支”本身是当前分支的一个直接子节点，则会产生快照合并")]),e._v(" "),a("p",[e._v("举个例子，"),a("code",[e._v("bugfix")]),e._v("分支是从"),a("code",[e._v("maste")]),e._v("r分支分叉出来的，如下所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/88410a30-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),a("p",[e._v("合并"),a("code",[e._v("bugfix")]),e._v("分支到"),a("code",[e._v("master")]),e._v("分支时，如果"),a("code",[e._v("master")]),e._v("分支的状态没有被更改过，即 "),a("code",[e._v("bugfix")]),e._v("分支的历史记录包含"),a("code",[e._v("master")]),e._v("分支所有的历史记录")]),e._v(" "),a("p",[e._v("所以通过把"),a("code",[e._v("master")]),e._v("分支的位置移动到"),a("code",[e._v("bugfix")]),e._v("的最新分支上，就完成合并")]),e._v(" "),a("p",[e._v("如果"),a("code",[e._v("master")]),e._v("分支的历史记录在创建"),a("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/929eb220-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),a("p",[e._v("这时候使用"),a("code",[e._v("git merge")]),e._v("的时候，会生成一个新的提交，并且"),a("code",[e._v("master")]),e._v("分支的"),a("code",[e._v("HEAD")]),e._v("会移动到新的分支上，如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/9fdfa3e0-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),a("p",[e._v("从上面可以看到，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照")]),e._v(" "),a("h3",{attrs:{id:"git-rebase-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-2"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),a("p",[e._v("同样，"),a("code",[e._v("master")]),e._v("分支的历史记录在创建"),a("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/ab2d5120-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("git rebase")]),e._v("，会变成如下情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/b72aed70-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),a("p",[e._v("在移交过程中，如果发生冲突，需要修改各自的冲突，如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/c9ba0e80-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),a("p",[a("code",[e._v("rebase")]),e._v("之后，"),a("code",[e._v("master")]),e._v("的"),a("code",[e._v("HEAD")]),e._v("位置不变。因此，要合并"),a("code",[e._v("master")]),e._v("分支和"),a("code",[e._v("bugfix")]),e._v("分支")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/dc660660-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),a("p",[e._v("从上面可以看到，"),a("code",[e._v("rebase")]),e._v("会找到不同的分支的最近共同祖先，如上图的"),a("code",[e._v("B")])]),e._v(" "),a("p",[e._v("然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件（老的提交"),a("code",[e._v("X")]),e._v("和"),a("code",[e._v("Y")]),e._v("也没有被销毁，只是简单地不能再被访问或者使用）")]),e._v(" "),a("p",[e._v("然后将当前分支指向目标最新位置"),a("code",[e._v("D")]),e._v(", 然后将之前另存为临时文件的修改依序应用")]),e._v(" "),a("h2",{attrs:{id:"三、区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[e._v("#")]),e._v(" 三、区别")]),e._v(" "),a("p",[e._v("从上面可以看到，"),a("code",[e._v("merge")]),e._v("和"),a("code",[e._v("rebasea")]),e._v("都是合并历史记录，但是各自特性不同：")]),e._v(" "),a("h3",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" merge")]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("merge")]),e._v("合并分支会新增一个"),a("code",[e._v("merge commit")]),e._v("，然后将两个分支的历史联系起来")]),e._v(" "),a("p",[e._v("其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂")]),e._v(" "),a("h3",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" rebase")]),e._v(" "),a("p",[a("code",[e._v("rebase")]),e._v("会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交")]),e._v(" "),a("p",[e._v("主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 "),a("code",[e._v("git merge")]),e._v("所需的不必要的合并提交")]),e._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/361182707",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zhuanlan.zhihu.com/p/361182707"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);
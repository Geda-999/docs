(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1001:function(t,v,e){"use strict";e.r(v);var _=e(20),i=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"面试官-说说你对git的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对git的理解"}},[t._v("#")]),t._v(" 面试官：说说你对Git的理解？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/213eba50-f79c-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"一、是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),e("p",[t._v("git，是一个分布式版本控制软件，最初目的是为更好地管理"),e("code",[t._v("Linux")]),t._v("内核开发而设计")]),t._v(" "),e("p",[t._v("分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/29240f40-f79c-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),e("p",[t._v("项目开始，只有一个原始版仓库，别的机器可以"),e("code",[t._v("clone")]),t._v("这个原始版本库，那么所有"),e("code",[t._v("clone")]),t._v("的机器，它们的版本库其实都是一样的，并没有主次之分")]),t._v(" "),e("p",[t._v("所以在实现团队协作的时候，只要有一台电脑充当服务器的角色，其他每个人都从这个“服务器”仓库"),e("code",[t._v("clone")]),t._v("一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交")]),t._v(" "),e("p",[e("code",[t._v("github")]),t._v("实际就可以充当这个服务器角色，其是一个开源协作社区，提供"),e("code",[t._v("Git")]),t._v("仓库托管服务，既可以让别人参与你的开源项目，也可以参与别人的开源项目")]),t._v(" "),e("h2",{attrs:{id:"二、工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、工作原理"}},[t._v("#")]),t._v(" 二、工作原理")]),t._v(" "),e("p",[t._v("当我们通过"),e("code",[t._v("git init")]),t._v("创建或者"),e("code",[t._v("git clone")]),t._v("一个项目的时候，项目目录会隐藏一个"),e("code",[t._v(".git")]),t._v("子目录，其作用是用来跟踪管理版本库的")]),t._v(" "),e("p",[e("code",[t._v("Git")]),t._v(" 中所有数据在存储前都计算校验和，然后以校验和来引用，所以在我们修改或者删除文件的时候，"),e("code",[t._v("git")]),t._v("能够知道")]),t._v(" "),e("p",[e("code",[t._v("Git")]),t._v("用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）， 这是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git 中文件的内容或目录结构计算出来，如下：")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("24b9da6552252987aa493b52f8696cd6d3b00373\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("当我们修改文件的时候，"),e("code",[t._v("git")]),t._v("就会修改文件的状态，可以通过"),e("code",[t._v("git status")]),t._v("进行查询，状态情况如下：")]),t._v(" "),e("ul",[e("li",[t._v("已修改（modified）：表示修改了文件，但还没保存到数据库中。")]),t._v(" "),e("li",[t._v("已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。")]),t._v(" "),e("li",[t._v("已提交（committed）：表示数据已经安全的保存在本地数据库中。")])]),t._v(" "),e("p",[t._v("文件状态对应的，不同状态的文件在"),e("code",[t._v("Git")]),t._v("中处于不同的工作区域，主要分成了四部分：")]),t._v(" "),e("ul",[e("li",[t._v("工作区：相当于本地写代码的区域，如 git clone 一个项目到本地，相当于本地克隆了远程仓库项目的一个副本")]),t._v(" "),e("li",[t._v("暂存区：暂存区是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中")]),t._v(" "),e("li",[t._v("本地仓库：提交更新，找到暂存区域的文件，将快照永久性存储到 Git 本地仓库")]),t._v(" "),e("li",[t._v("远程仓库：远程的仓库，如 github")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/3273c9a0-f79c-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"三、命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、命令"}},[t._v("#")]),t._v(" 三、命令")]),t._v(" "),e("p",[t._v("从上图可以看到，"),e("code",[t._v("git")]),t._v("日常简单的使用就只有上图6个命令：")]),t._v(" "),e("ul",[e("li",[t._v("add")]),t._v(" "),e("li",[t._v("commit")]),t._v(" "),e("li",[t._v("push")]),t._v(" "),e("li",[t._v("pull")]),t._v(" "),e("li",[t._v("clone")]),t._v(" "),e("li",[t._v("checkout")])]),t._v(" "),e("p",[t._v("但实际上还有很多命令，如果想要熟练使用，还有60个多命令，通过这些命令的配合使用，能够提高个人工作效率和团队协助能力")]),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh.wikipedia.org/wiki/Git"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=i.exports}}]);
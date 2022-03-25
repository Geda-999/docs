(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{552:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("分布式版本管理系统")])])]),s._v(" "),t("h2",{attrs:{id:"git是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git是什么"}},[s._v("#")]),s._v(" git是什么")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("git"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分布式版本控制器"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 不需要联网，直接存到本地，上传远程仓库才需要联网\nsvn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("集中式版本控制器"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"git配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[s._v("#")]),s._v(" git配置")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("检查配置用户名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("检查配置邮箱"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v(" （全局配置用户名）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v(" （全局配置邮箱）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"git初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git初始化"}},[s._v("#")]),s._v(" git初始化")]),s._v(" "),t("h3",{attrs:{id:"_1、没有远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、没有远程仓库"}},[s._v("#")]),s._v(" 1、没有远程仓库")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2、有远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、有远程仓库"}},[s._v("#")]),s._v(" 2、有远程仓库")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 远程仓库地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"git常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[s._v("#")]),s._v(" git常用指令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status //检查当前本地git仓库的状体\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" //把当前目录的所有文件和目录都管理起来\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"存档描述"')]),s._v(" //把当前管理的文件都进行存档\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log //打印日志，显示本地的存档和其他操作\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 具体的id //回档操作，回到具体的某个存档\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog //打印所有操作日志，比git flog显示更多的内容\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 远程仓库地址 //克隆远程仓库地址到本地\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push //推送到远程仓库\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull //拉取远程仓库最新的分支和代码合并到本地\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch +分支名称 //创建分支命令\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a //检查所有的本地和远程分支\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xxx分支 //检出到具体某个分支上 切换分支命令\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge +分支名 //合并分支模块\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d xxx分支 //删除具体某个分支\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --prune origin //删除本地的缓存信息\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h2",{attrs:{id:"工作区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作区"}},[s._v("#")]),s._v(" 工作区")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("工作区       暂存区       本地仓库     远程仓库\n未管理的区域  已管理的区域  已存档       远程存档\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("h2",{attrs:{id:"避免每次提交都需要输入账号密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免每次提交都需要输入账号密码"}},[s._v("#")]),s._v(" 避免每次提交都需要输入账号密码")])]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" 提交代码时每次都要输入用户名密码，执行下面的操作就不需要了\n第一步：git config --global credential.helper store （保存用户名/密码）\n第二步：正常git pull /git push 后输入用户名和密码\n后续就不需要输入用户名和密码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[s._v("#")]),s._v(" 冲突")]),s._v(" "),t("blockquote",[t("p",[s._v("当远程仓库和本地仓库不一致或者分支不一致时，就会出现冲突。")])]),s._v(" "),t("blockquote",[t("p",[s._v("解决冲突：把本地的代码先提交到本地仓库，然后拉取远程的仓库，然后执行手动合并，最后再重新提交。")])]),s._v(" "),t("h2",{attrs:{id:"git图形化界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git图形化界面"}},[s._v("#")]),s._v(" git图形化界面")]),s._v(" "),t("blockquote",[t("p",[s._v("使用命令行不方便操作也不够直观，图形界面就可以解决这个问题。")])]),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ashunun/Picture/img/1-17 (2).png",alt:""}}),s._v(" "),t("h2",{attrs:{id:"基本流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[s._v("#")]),s._v(" 基本流程")]),s._v(" "),t("p",[t("strong",[s._v("Github教程")])]),s._v(" "),t("blockquote",[t("p",[s._v("GitHub仓库地址：https://github.com/用户名/仓库名.git")])]),s._v(" "),t("p",[t("strong",[s._v("终端操作流程")])]),s._v(" "),t("blockquote",[t("p",[s._v("在管理员面板命令切换存盘：【d:】")]),s._v(" "),t("p",[s._v("转换到文件夹的路径下：cd +本地地址")])]),s._v(" "),t("h3",{attrs:{id:"liunx的界面命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liunx的界面命令"}},[s._v("#")]),s._v(" liunx的界面命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    修改文档：LL\n    存储地址：cd 文件名/\n    修改文件：vi 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"提交命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交命令"}},[s._v("#")]),s._v(" 提交命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update 002【提交提示信息】"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("回退到2个版本之前的版本")])]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看所有文件命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有文件命令"}},[s._v("#")]),s._v(" 查看所有文件命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"分支的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支的命令"}},[s._v("#")]),s._v(" 分支的命令")]),s._v(" "),t("blockquote",[t("p",[s._v("分支模块")])]),s._v(" "),t("h4",{attrs:{id:"查看分支命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看分支命令"}},[s._v("#")]),s._v(" 查看分支命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"创建分支命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支命令"}},[s._v("#")]),s._v(" 创建分支命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch +分支名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"切换分支命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支命令"}},[s._v("#")]),s._v(" 切换分支命令")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout +分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"合并分支模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支模块"}},[s._v("#")]),s._v(" 合并分支模块")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("先切换到主分支命令：git checkout master\n\n合并命令：git merge +分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"查看冲突命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看冲突命令"}},[s._v("#")]),s._v(" 查看冲突命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("修改冲突首先进入liunx界面命令")])]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("v- +分支名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"更改文件保存命令流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改文件保存命令流程"}},[s._v("#")]),s._v(" 更改文件保存命令流程")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" src/a.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update 004"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"部署github云端去"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署github云端去"}},[s._v("#")]),s._v(" 部署GitHub云端去")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"git-bash操作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-bash操作流程"}},[s._v("#")]),s._v(" Git Bash操作流程")]),s._v(" "),t("h3",{attrs:{id:"_1-搭建代码库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建代码库"}},[s._v("#")]),s._v(" 1.搭建代码库")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、git init\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、git config user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"真实邮箱"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-提交代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-提交代码"}},[s._v("#")]),s._v(" 2.提交代码")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、git status\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、git "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、git commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first_commit[提示信息]'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-增加远程地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-增加远程地址"}},[s._v("#")]),s._v(" 3.增加远程地址")]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("//git remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远端代号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远端地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、git remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin 【+GitHub上的库存地址】\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4-推送到远程库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-推送到远程库"}},[s._v("#")]),s._v(" 4.推送到远程库")]),s._v(" "),t("blockquote",[t("p",[s._v("推送远程的分支【"),t("strong",[s._v("可选")]),s._v("】")])]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("//git push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远端代号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、git push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_5-真正生效到github云端去"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-真正生效到github云端去"}},[s._v("#")]),s._v(" 5.真正生效到GitHub云端去")]),s._v(" "),t("blockquote",[t("p",[s._v("这个好像是管理员命令里【✨这个是一次推送远端命令】")])]),s._v(" "),t("div",{staticClass:"language-Bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_6、成功之后再推送命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、成功之后再推送命令"}},[s._v("#")]),s._v(" 6、成功之后再推送命令")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
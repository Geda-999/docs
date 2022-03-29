(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{940:function(s,t,e){"use strict";e.r(t);var a=e(20),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"面试官-说说flexbox-弹性盒布局模型-以及适用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说flexbox-弹性盒布局模型-以及适用场景"}},[s._v("#")]),s._v(" 面试官：说说flexbox（弹性盒布局模型）,以及适用场景？")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/ef25b0a0-9837-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"一、是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),e("p",[e("code",[s._v("Flexible Box")]),s._v(" 简称 "),e("code",[s._v("flex")]),s._v("，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局")]),s._v(" "),e("p",[s._v("采用Flex布局的元素，称为"),e("code",[s._v("flex")]),s._v("容器"),e("code",[s._v("container")])]),s._v(" "),e("p",[s._v("它的所有子元素自动成为容器成员，称为"),e("code",[s._v("flex")]),s._v("项目"),e("code",[s._v("item")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("p",[s._v("容器中默认存在两条轴，主轴和交叉轴，呈90度关系。项目默认沿主轴排列，通过"),e("code",[s._v("flex-direction")]),s._v("来决定主轴的方向")]),s._v(" "),e("p",[s._v("每根轴都有起点和终点，这对于元素的对齐非常重要")]),s._v(" "),e("h2",{attrs:{id:"二、属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、属性"}},[s._v("#")]),s._v(" 二、属性")]),s._v(" "),e("p",[s._v("关于"),e("code",[s._v("flex")]),s._v("常用的属性，我们可以划分为容器属性和容器成员属性")]),s._v(" "),e("p",[s._v("容器属性有：")]),s._v(" "),e("ul",[e("li",[s._v("flex-direction")]),s._v(" "),e("li",[s._v("flex-wrap")]),s._v(" "),e("li",[s._v("flex-flow")]),s._v(" "),e("li",[s._v("justify-content")]),s._v(" "),e("li",[s._v("align-items")]),s._v(" "),e("li",[s._v("align-content")])]),s._v(" "),e("h3",{attrs:{id:"flex-direction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[s._v("#")]),s._v(" flex-direction")]),s._v(" "),e("p",[s._v("决定主轴的方向(即项目的排列方向)")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("属性对应如下：")]),s._v(" "),e("ul",[e("li",[s._v("row（默认值）：主轴为水平方向，起点在左端")]),s._v(" "),e("li",[s._v("row-reverse：主轴为水平方向，起点在右端")]),s._v(" "),e("li",[s._v("column：主轴为垂直方向，起点在上沿。")]),s._v(" "),e("li",[s._v("column-reverse：主轴为垂直方向，起点在下沿")])]),s._v(" "),e("p",[s._v("如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"flex-wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[s._v("#")]),s._v(" flex-wrap")]),s._v(" "),e("p",[s._v("弹性元素永远沿主轴排列，那么如果主轴排不下，通过"),e("code",[s._v("flex-wrap")]),s._v("决定容器内项目是否可换行")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("属性对应如下：")]),s._v(" "),e("ul",[e("li",[s._v("nowrap（默认值）：不换行")]),s._v(" "),e("li",[s._v("wrap：换行，第一行在下方")]),s._v(" "),e("li",[s._v("wrap-reverse：换行，第一行在上方")])]),s._v(" "),e("p",[s._v("默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩")]),s._v(" "),e("h3",{attrs:{id:"flex-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[s._v("#")]),s._v(" flex-flow")]),s._v(" "),e("p",[s._v("是"),e("code",[s._v("flex-direction")]),s._v("属性和"),e("code",[s._v("flex-wrap")]),s._v("属性的简写形式，默认值为"),e("code",[s._v("row nowrap")])]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"justify-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[s._v("#")]),s._v(" justify-content")]),s._v(" "),e("p",[s._v("定义了项目在主轴上的对齐方式")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("属性对应如下：")]),s._v(" "),e("ul",[e("li",[s._v("flex-start（默认值）：左对齐")]),s._v(" "),e("li",[s._v("flex-end：右对齐")]),s._v(" "),e("li",[s._v("center：居中")]),s._v(" "),e("li",[s._v("space-between：两端对齐，项目之间的间隔都相等")]),s._v(" "),e("li",[s._v("space-around：两个项目两侧间隔相等")])]),s._v(" "),e("p",[s._v("效果图如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"align-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[s._v("#")]),s._v(" align-items")]),s._v(" "),e("p",[s._v("定义项目在交叉轴上如何对齐")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("属性对应如下：")]),s._v(" "),e("ul",[e("li",[s._v("flex-start：交叉轴的起点对齐")]),s._v(" "),e("li",[s._v("flex-end：交叉轴的终点对齐")]),s._v(" "),e("li",[s._v("center：交叉轴的中点对齐")]),s._v(" "),e("li",[s._v("baseline: 项目的第一行文字的基线对齐")]),s._v(" "),e("li",[s._v("stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度")])]),s._v(" "),e("h3",{attrs:{id:"align-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[s._v("#")]),s._v(" align-content")]),s._v(" "),e("p",[s._v("定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("属性对应如吓：")]),s._v(" "),e("ul",[e("li",[s._v("flex-start：与交叉轴的起点对齐")]),s._v(" "),e("li",[s._v("flex-end：与交叉轴的终点对齐")]),s._v(" "),e("li",[s._v("center：与交叉轴的中点对齐")]),s._v(" "),e("li",[s._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布")]),s._v(" "),e("li",[s._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍")]),s._v(" "),e("li",[s._v("stretch（默认值）：轴线占满整个交叉轴")])]),s._v(" "),e("p",[s._v("效果图如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("p",[s._v("容器成员属性如下：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("order")])]),s._v(" "),e("li",[e("code",[s._v("flex-grow")])]),s._v(" "),e("li",[e("code",[s._v("flex-shrink")])]),s._v(" "),e("li",[e("code",[s._v("flex-basis")])]),s._v(" "),e("li",[e("code",[s._v("flex")])]),s._v(" "),e("li",[e("code",[s._v("align-self")])])]),s._v(" "),e("h3",{attrs:{id:"order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[s._v("#")]),s._v(" order")]),s._v(" "),e("p",[s._v("定义项目的排列顺序。数值越小，排列越靠前，默认为0")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"flex-grow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[s._v("#")]),s._v(" flex-grow")]),s._v(" "),e("p",[s._v("上面讲到当容器设为"),e("code",[s._v("flex-wrap: nowrap;")]),s._v("不换行的时候，容器宽度有不够分的情况，弹性元素会根据"),e("code",[s._v("flex-grow")]),s._v("来决定")]),s._v(" "),e("p",[s._v("定义项目的放大比例（容器宽度>元素总宽度时如何伸展）")]),s._v(" "),e("p",[s._v("默认为"),e("code",[s._v("0")]),s._v("，即如果存在剩余空间，也不放大")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果所有项目的"),e("code",[s._v("flex-grow")]),s._v("属性都为1，则它们将等分剩余空间（如果有的话）")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/48c8c5c0-9838-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("p",[s._v("如果一个项目的"),e("code",[s._v("flex-grow")]),s._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/5b822b20-9838-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),e("p",[s._v("弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论"),e("code",[s._v("flex-grow")]),s._v("是什么值都不会生效")]),s._v(" "),e("h3",{attrs:{id:"flex-shrink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[s._v("#")]),s._v(" flex-shrink")]),s._v(" "),e("p",[s._v("定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为1，即如果空间不足，该项目将缩小")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果所有项目的"),e("code",[s._v("flex-shrink")]),s._v("属性都为1，当空间不足时，都将等比例缩小")]),s._v(" "),e("p",[s._v("如果一个项目的"),e("code",[s._v("flex-shrink")]),s._v("属性为0，其他项目都为1，则空间不足时，前者不缩小")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/658c5be0-9838-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),e("p",[s._v("在容器宽度有剩余时，"),e("code",[s._v("flex-shrink")]),s._v("也是不会生效的")]),s._v(" "),e("h3",{attrs:{id:"flex-basis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[s._v("#")]),s._v(" flex-basis")]),s._v(" "),e("p",[s._v("设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在"),e("code",[s._v("flex-grow")]),s._v("和"),e("code",[s._v("flex-shrink")]),s._v("生效前的尺寸")]),s._v(" "),e("p",[s._v("浏览器根据这个属性，计算主轴是否有多余空间，默认值为"),e("code",[s._v("auto")]),s._v("，即项目的本来大小，如设置了"),e("code",[s._v("width")]),s._v("则元素尺寸由"),e("code",[s._v("width/height")]),s._v("决定（主轴方向），没有设置则由内容决定")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("当设置为0的是，会根据内容撑开")]),s._v(" "),e("p",[s._v("它可以设为跟"),e("code",[s._v("width")]),s._v("或"),e("code",[s._v("height")]),s._v("属性一样的值（比如350px），则项目将占据固定空间")]),s._v(" "),e("h3",{attrs:{id:"flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),e("p",[e("code",[s._v("flex")]),s._v("属性是"),e("code",[s._v("flex-grow")]),s._v(", "),e("code",[s._v("flex-shrink")]),s._v(" 和 "),e("code",[s._v("flex-basis")]),s._v("的简写，默认值为"),e("code",[s._v("0 1 auto")]),s._v("，也是比较难懂的一个复合属性")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("一些属性有：")]),s._v(" "),e("ul",[e("li",[s._v("flex: 1 = flex: 1 1 0%")]),s._v(" "),e("li",[s._v("flex: 2 = flex: 2 1 0%")]),s._v(" "),e("li",[s._v("flex: auto = flex: 1 1 auto")]),s._v(" "),e("li",[s._v("flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩")])]),s._v(" "),e("p",[e("code",[s._v("flex:1")]),s._v(" 和 "),e("code",[s._v("flex:auto")]),s._v(" 的区别，可以归结于"),e("code",[s._v("flex-basis:0")]),s._v("和"),e("code",[s._v("flex-basis:auto")]),s._v("的区别")]),s._v(" "),e("p",[s._v("当设置为0时（绝对弹性元素），此时相当于告诉"),e("code",[s._v("flex-grow")]),s._v("和"),e("code",[s._v("flex-shrink")]),s._v("在伸缩的时候不需要考虑我的尺寸")]),s._v(" "),e("p",[s._v("当设置为"),e("code",[s._v("auto")]),s._v("时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑")]),s._v(" "),e("p",[s._v("注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值")]),s._v(" "),e("h3",{attrs:{id:"align-self"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[s._v("#")]),s._v(" align-self")]),s._v(" "),e("p",[s._v("允许单个项目有与其他项目不一样的对齐方式，可覆盖"),e("code",[s._v("align-items")]),s._v("属性")]),s._v(" "),e("p",[s._v("默认值为"),e("code",[s._v("auto")]),s._v("，表示继承父元素的"),e("code",[s._v("align-items")]),s._v("属性，如果没有父元素，则等同于"),e("code",[s._v("stretch")])]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("效果图如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"三、应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[s._v("#")]),s._v(" 三、应用场景")]),s._v(" "),e("p",[s._v("在以前的文章中，我们能够通过"),e("code",[s._v("flex")]),s._v("简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过"),e("code",[s._v("flex")]),s._v("完成，这里就不再展开代码的演示")]),s._v(" "),e("p",[s._v("包括现在在移动端、小程序这边的开发，都建议使用"),e("code",[s._v("flex")]),s._v("进行布局")]),s._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
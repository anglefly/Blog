(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{492:function(t,a,s){"use strict";s.r(a);var e=s(30),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transition-过渡-动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition-过渡-动画"}},[t._v("#")]),t._v(" transition 过渡&动画")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("需要设置动画的元素或组件要在外边包裹一个"),s("code",[t._v("<transition>")]),t._v("标签，设置自定义的"),s("code",[t._v("name")]),t._v("，vue 会根据元素的切换（进入/离开）过程添加相应的 css 类名，你可以"),s("strong",[t._v("自由地使用 css 类名来设置 css 过渡&动画")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"过渡的类名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡的类名"}},[t._v("#")]),t._v(" 过渡的类名")]),t._v(" "),s("p",[t._v("在进入/离开的过渡中，会有 6 个 class 切换。")]),t._v(" "),s("p",[s("strong",[t._v("各类名的生命周期")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("进入")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("v-enter")]),t._v(" 只存在于第一帧")]),t._v(" "),s("li",[s("code",[t._v("v-enter-active")]),t._v(" 第一帧到最后一帧，结束后移除")]),t._v(" "),s("li",[s("code",[t._v("v-enter-to")]),t._v(" 第二帧到最后一帧，结束后移除")])])]),t._v(" "),s("li",[s("p",[t._v("离开")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("v-leave")]),t._v(" 只存在于第一帧")]),t._v(" "),s("li",[s("code",[t._v("v-leave-active")]),t._v(" 第一帧到最后一帧，结束后移除")]),t._v(" "),s("li",[s("code",[t._v("v-leave-to")]),t._v(" 第二帧到最后一帧，结束后移除")])])])]),t._v(" "),s("p",[t._v("如果你使用一个没有"),s("code",[t._v("name")]),t._v("的"),s("code",[t._v("<transition>")]),t._v(" ，则 "),s("code",[t._v("v-")]),t._v(" 是这些类名的默认前缀。如果你使用了"),s("code",[t._v('name="fade"')]),t._v("，那么 "),s("code",[t._v("v-")]),t._v(" 前缀会替换为 "),s("code",[t._v("fade-")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"css-过渡-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-过渡-demo"}},[t._v("#")]),t._v(" css 过渡 demo")]),t._v(" "),s("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"light","data-default-tab":"css,result","data-user":"xugaoyi","data-slug-hash":"jOPqxvm","data-pen-title":"vue的过渡动画"}},[s("span",[t._v("See the Pen "),s("a",{attrs:{href:"https://codepen.io/xugaoyi/pen/jOPqxvm"}},[t._v("\n  vue的过渡动画")]),t._v(" by anglefly ("),s("a",{attrs:{href:"https://codepen.io/xugaoyi"}},[t._v("@anglefly")]),t._v(")\n  on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),s("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),s("h2",{attrs:{id:"css-动画-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-动画-demo"}},[t._v("#")]),t._v(" css 动画 demo")]),t._v(" "),s("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"light","data-default-tab":"css,result","data-user":"xugaoyi","data-slug-hash":"qBdZyRR","data-pen-title":"vue的动画"}},[s("span",[t._v("See the Pen "),s("a",{attrs:{href:"https://codepen.io/xugaoyi/pen/qBdZyRR"}},[t._v("\n  vue的动画")]),t._v(" by anglefly ("),s("a",{attrs:{href:"https://codepen.io/xugaoyi"}},[t._v("@anglefly")]),t._v(")\n  on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),s("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),s("h3",{attrs:{id:"组件中使用的示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件中使用的示例"}},[t._v("#")]),t._v(" 组件中使用的示例")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("slide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("add-song"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v(".add-song &.slide-enter-active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" &.slide-leave-active "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s\n    &.slide-enter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" &.slide-leave-to "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" translate3d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
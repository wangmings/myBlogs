(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{779:function(s,t,a){"use strict";a.r(t);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"实战经验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战经验"}},[s._v("#")]),s._v(" 实战经验")]),s._v(" "),a("h2",{attrs:{id:"_1-微信开发者工具警告-sitemap-索引情况提示-根据-sitemap-的规则-0-当前页面-pages-index-index-将不被索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-微信开发者工具警告-sitemap-索引情况提示-根据-sitemap-的规则-0-当前页面-pages-index-index-将不被索引"}},[s._v("#")]),s._v(" 1. 微信开发者工具警告： [sitemap 索引情况提示] 根据 sitemap 的规则[0]，当前页面 [pages/index/index] 将不被索引")]),s._v(" "),a("ul",[a("li",[s._v("sitemap 的索引提示是默认开启的，如需要关闭 sitemap 的索引提示，可在小程序项目配置文件 project.config.json 的 setting 中配置字段 checkSiteMap为 false")])]),s._v(" "),a("h2",{attrs:{id:"_2-路由跳转问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由跳转问题"}},[s._v("#")]),s._v(" 2. 路由跳转问题")]),s._v(" "),a("ul",[a("li",[s._v("路由跳转的路径必须是以 "),a("code",[s._v("/")]),s._v(" 开头的, 例如： '/page/index/index'")]),s._v(" "),a("li",[s._v("使用Taro.switchTab, 进行跳转的时候，在 app.config.js配置文件中的tabBar对象的list数组必须有声明")])]),s._v(" "),a("h2",{attrs:{id:"_3-安装taro-ui问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装taro-ui问题"}},[s._v("#")]),s._v(" 3.安装taro-ui问题")]),s._v(" "),a("ul",[a("li",[s._v("最新的tarox引用 taro-ui的话，得安装 "),a("code",[s._v("npm install taro-ui@3.0.0-alpha.3")]),s._v(" 版本才可以")])]),s._v(" "),a("h2",{attrs:{id:"taro3-x版本的hook引入问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro3-x版本的hook引入问题"}},[s._v("#")]),s._v(" taro3.x版本的hook引入问题")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useLayoutEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useMemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useTabItemTap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useResize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useReachBottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" usePullDownRefresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useDidHide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useDidShow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" usePageScroll "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@tarojs/taro'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// redux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" store "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/store'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于派发 action")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" useSelector "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-redux'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 store 中的 state 值")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"taro3-x-react自定义组件传参-和传样式问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro3-x-react自定义组件传参-和传样式问题"}},[s._v("#")]),s._v(" taro3.x react自定义组件传参，和传样式问题")]),s._v(" "),a("p",[s._v("封装一个组件例子：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Taro "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@tarojs/taro'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" View "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@tarojs/components'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("demoBtn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'props'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("View\n            className"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("myClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" demoBtn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("下面代码调用上面组件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("demoBtn myClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("View className"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btn"')]),s._v(" onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'点击了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        点击\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("demoBtn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("以上的不管直接在组件上写属性，还是在标签里面写内容，都是通过props可以获取到了，你们打印下就知道了")]),s._v(" "),a("p",[s._v("这个是taro3.x版本的，网上搜很多不知道是不是2.x版本，很多都介绍externalClasses来提供父级传入样式， 吐槽taro，改版写法都改变，文档也得也不够清晰，例子都不够完整。改版就改版，都不向下兼容，很多写法都不一样，网上一大推都是2.x版本的写法，导致每次查找看文章别人写法，拿来写就是不行，吐血")]),s._v(" "),a("h2",{attrs:{id:"taro-react-hooks-没有onload对应的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro-react-hooks-没有onload对应的生命周期"}},[s._v("#")]),s._v(" taro react hooks 没有onLoad对应的生命周期")]),s._v(" "),a("p",[s._v("想要获取页面传参，或者是二维码识别带来的参数，通过 "),a("code",[s._v("const useRouter = useRouter()")]),s._v("获取参数。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
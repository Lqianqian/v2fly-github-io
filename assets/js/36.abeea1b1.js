(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{414:function(t,a,s){"use strict";s.r(a);var o=s(9),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"domainsocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domainsocket"}},[t._v("#")]),t._v(" DomainSocket")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("v4.32.0+，推荐写到 "),s("RouterLink",{attrs:{to:"/config/inbounds.html"}},[t._v("入站")]),t._v(" 的 "),s("code",[t._v("listen")]),t._v(" 处，传输方式可选 TCP、WebSocket、HTTP/2，未来这里的 DomainSocket 可能会被弃用。")],1)]),t._v(" "),s("p",[t._v("Domain Socket 使用标准的 Unix domain socket 来传输数据。它的优势是使用了操作系统内建的传输通道，而不会占用网络缓存。相比起本地环回网络（local loopback）来说，Domain socket 速度略快一些。")]),t._v(" "),s("p",[t._v("目前仅可用于支持 Unix domain socket 的平台，如 Linux 和 macOS。在 Windows 10 Build 17036 前不可用。")]),t._v(" "),s("p",[t._v("如果指定了 domain socket 作为传输方式，在入站出站代理中配置的端口和 IP 地址将会失效，所有的传输由 domain socket 取代。")]),t._v(" "),s("h2",{attrs:{id:"domainsocketobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domainsocketobject"}},[t._v("#")]),t._v(" DomainSocketObject")]),t._v(" "),s("p",[s("code",[t._v("DomainSocketObject")]),t._v(" 对应传输配置的 "),s("code",[t._v("dsSettings")]),t._v(" 项。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/ds/file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"abstract"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"padding"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("path")]),t._v(": string")])]),t._v(" "),s("p",[t._v("一个合法的文件路径。在运行 V2Ray 之前，这个文件必须不存在。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("abstract")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("是否为 abstract domain socket，默认 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("padding")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("v4.28.1+，abstract domain socket 是否带 padding，默认 "),s("code",[t._v("false")]),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
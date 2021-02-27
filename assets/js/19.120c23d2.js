(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{396:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"outbounds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outbounds"}},[t._v("#")]),t._v(" Outbounds")]),t._v(" "),a("p",[t._v("出站连接用于向远程网站或下一级代理服务器发送数据，可用的协议请见协议列表。")]),t._v(" "),a("h2",{attrs:{id:"outboundobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundobject"}},[t._v("#")]),t._v(" OutboundObject")]),t._v(" "),a("p",[a("code",[t._v("OutboundObject")]),t._v(" 对应配置文件中 "),a("code",[t._v("outbounds")]),t._v(" 项的一个子元素。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sendThrough"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"协议名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标识"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxySettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mux"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("sendThrough")]),t._v(": address")])]),t._v(" "),a("p",[t._v("用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 "),a("code",[t._v('"0.0.0.0"')]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("protocol")]),t._v(": string")])]),t._v(" "),a("p",[t._v("连接协议名称，可选的值见协议列表。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("settings")]),t._v(": OutboundConfigurationObject")])]),t._v(" "),a("p",[t._v("具体的配置内容，视协议不同而不同。详见每个协议中的 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("此出站连接的标识，用于在其它的配置中定位此连接。当其值不为空时，必须在所有 tag 中唯一。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("streamSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport.html#perproxy"}},[t._v("StreamSettingsObject")])],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/config/transport.html#perproxy"}},[t._v("底层传输配置")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("proxySettings")]),t._v(": "),a("a",{attrs:{href:"#proxysettingsobject"}},[t._v("ProxySettingsObject")])])]),t._v(" "),a("p",[t._v("出站代理配置。当出站代理生效时，此出站协议的 "),a("code",[t._v("streamSettings")]),t._v(" 将不起作用。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("mux")]),t._v(": "),a("a",{attrs:{href:"#muxobject"}},[t._v("MuxObject")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"#muxobject"}},[t._v("Mux 配置")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"proxysettingsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxysettingsobject"}},[t._v("#")]),t._v(" ProxySettingsObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("当指定另一个出站协议的标识时，此出站协议发出的数据，将被转发至所指定的出站协议发出。")]),t._v(" "),a("h2",{attrs:{id:"muxobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#muxobject"}},[t._v("#")]),t._v(" MuxObject")]),t._v(" "),a("p",[t._v("Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据。实现细节详见 "),a("RouterLink",{attrs:{to:"/developer/protocols/muxcool.html"}},[t._v("Mux.Cool")]),t._v("。Mux 是为了减少 TCP 的握手延迟而设计，而非提高连接的吞吐量。使用 Mux 看视频、下载或者测速通常都有反效果。Mux 只需要在客户端启用，服务器端自动适配。")],1),t._v(" "),a("p",[a("code",[t._v("MuxObject")]),t._v(" 对应 "),a("code",[t._v("OutboundObject")]),t._v(" 中的 "),a("code",[t._v("mux")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("enabled")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否启用 Mux 转发请求，默认值 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("concurrency")]),t._v(": number")])]),t._v(" "),a("p",[t._v("最大并发连接数。最小值 "),a("code",[t._v("1")]),t._v("，最大值 "),a("code",[t._v("1024")]),t._v("，默认值 "),a("code",[t._v("8")]),t._v("。")]),t._v(" "),a("p",[t._v("填负数，如 "),a("code",[t._v("-1")]),t._v("，不加载 mux 模块（v4.22.0+）。")]),t._v(" "),a("p",[t._v("这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。当客户端发出了 8 个 TCP 请求，而 "),a("code",[t._v("concurrency=8")]),t._v(" 时，V2Ray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
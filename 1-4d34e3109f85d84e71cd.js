(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(169),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(211),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},173:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l});var r=n(19),o=function(e){return{type:r.e,payload:{headerHeight:e}}},a=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.d,payload:{sidebarOpen:e}}},s=function(e){return{type:r.c,payload:{sidebarDocked:e}}},l=function(e){return{type:r.a,payload:{expandedKey:e,autoExpandParent:!1}}}},174:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});n(89);var r=function(e){return e.layout.sidebar},o=function(e){return e.layout.header.height},a=function(e){return e.layout.anchor},i=function(e){return e.layout.sidebar.expandedKey}},194:function(e,t,n){"use strict";n(88),n(29),n(53);var r=n(247),o=n(0),a=n.n(o),i=n(1),s=n.n(i),l=n(248),c=n.n(l),u=n(168),d=n(8),p=n.n(d),f=n(258),h=n.n(f),m=n(51),g=n(173),b=(n(272),n(273),n(274)),y=function(){return a.a.createElement(u.StaticQuery,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},a.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},a.a.createElement(u.Link,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:b})},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return p()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return a.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},a.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},a.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},a.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))),a.a.createElement(y,null)))},t}(o.Component),k={updateHeaderHeight:g.e},E=Object(m.b)(function(){return{}},k)(h()({monitorHeight:!0})(v)),S=(n(275),n(174)),w=(n(276),n(214),n(91),n(85),n(86),n(87),n(279)),O=n(285),x=n.n(O),C=(n(280),n(284),n(215)),j=x.a.SubMenu,M=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,o=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var o={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(o),n.push(o)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},a=0;a<e.parents.length;a++)o(a);r.push(e)}}),[t,n]},q=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKey,n=this.props.root;return a.a.createElement(u.StaticQuery,{query:"1176653062",render:function(r){var o=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return M(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=o[0],s=o[1];q(i);var l=window.location.pathname.replace(C.pathPrefix.slice(0,-1),""),c=r.allMarkdownRemark.edges.filter(function(e){return l===e.node.fields.slug||l.slice(0,-1)===e.node.fields.slug&&"/"===l.slice(-1)}).length>0?[t]:[],d=s.map(function(e){return e.key});return a.a.createElement(x.a,{mode:"inline",defaultOpenKeys:d,selectedKeys:c,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(q(n.children),a.a.createElement(j,{key:n.key,title:a.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):a.a.createElement(x.a.Item,{key:n.key},a.a.createElement(u.Link,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i))},data:w})},t}(o.Component),I={onSetSidebarOpen:g.c},H=Object(m.b)(function(e){return{sidebar:Object(S.d)(e)}},I)(A),P=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t+30,left:10,right:"80%",bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:0,right:10,top:0,bottom:0}},a.a.createElement(H,{root:n})))},t}(o.Component),R=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(P),T=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return a.a.createElement("div",{style:{position:"absolute",top:!t&&r?n+70:n+30,left:!t&&r||!r?0:"20%",right:!t&&r||!r?0:"15%",bottom:0,overflow:t?"visible":"auto"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(o.Component),G=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(T),D=n(344),_=n.n(D),z=(n(341),n(343),_.a.Link),B=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},L=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),B(e),e}(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return a.a.createElement(_.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?a.a.createElement(z,{href:t.href,title:t.title,key:t.href},e(t.children)):a.a.createElement(z,{href:t.href,title:t.title,key:t.href})})}(e))},t}(o.Component),Q={onSetAnchorOpen:g.a},W=Object(m.b)(function(){return{}},Q)(L),K=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.headerHeight;return a.a.createElement("div",{style:{position:"fixed",top:e+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},a.a.createElement(W,{offsetTop:e+30,affix:!0})))},t}(o.Component),F=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(K),N=n(236),U=n.n(N),J=(n(235),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarOpen,r=e.anchorOpen,o=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1001,background:"aliceblue",marginBottom:"1.45rem"}},!r&&a.a.createElement("div",{style:{position:"absolute",left:8,top:4}},n?a.a.createElement(U.a,{icon:"close",onClick:this.onSetSidebarClose}):a.a.createElement(U.a,{icon:"bars",onClick:this.onSetSidebarOpen}),n&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},a.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:1e3,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(H,{root:o})))),!n&&a.a.createElement("div",{style:{position:"absolute",right:8,top:4}},r?a.a.createElement(U.a,{icon:"close",onClick:this.onSetAnchorClose}):a.a.createElement(U.a,{icon:"ellipsis",onClick:this.onSetAnchorOpen}),r&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,zIndex:1e3,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(W,{offsetTop:t+70,affix:!1}))))},t}(o.Component)),Y={onSetSidebarOpen:g.c,onSetAnchorOpen:g.a},V=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e),sidebarOpen:Object(S.d)(e).open,anchorOpen:Object(S.a)(e).open}},Y)(J),X=n(371),Z=n.n(X),$=function(e){var t=e.children,n=e.sidebarRoot;e.onSetSidebarDocked;return a.a.createElement(u.StaticQuery,{query:"3168754476",render:function(e){var r,o=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});if("undefined"!=typeof window){var i=window.location.pathname.replace(C.pathPrefix.slice(0,-1),"");r=o.indexOf(i)>=0||o.indexOf(i.slice(0,-1))>=0}return a.a.createElement(Z.a,{maxWidth:1e3},function(o){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),o&&r?a.a.createElement(V,{root:n}):null,!o&&r?a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{root:n})," ",a.a.createElement(F,null)," "):null,a.a.createElement(G,{sidebarDocked:!o,onPostPage:r},t))})},data:r})};$.propTypes={children:s.a.node.isRequired};var ee={onSetSidebarDocked:g.b},te=Object(m.b)(function(){return{}},ee)($);t.a=te},211:function(e,t,n){var r;e.exports=(r=n(257))&&r.default||r},215:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatsby Markdown Starter"},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"/gatsby-starter-markdown/"}}).call(this,"/")},247:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Markdown Starter"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/first-blog"}}},{node:{fields:{slug:"/blog/second-blog"}}},{node:{fields:{slug:"/docs/get-started/introduction"}}},{node:{fields:{slug:"/docs/get-started/quick_start"}}},{node:{fields:{slug:"/docs/guide/anchor"}}},{node:{fields:{slug:"/docs/guide/contents"}}},{node:{fields:{slug:"/docs/guide/menu_items"}}},{node:{fields:{slug:"/docs/guide/sidebar"}}}]}}}},257:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(78),l=n(3),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},274:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"Docs",link:"/docs/get-started/introduction"}},{node:{name:"Blog",link:"/blog"}}]}}}},275:function(e,t,n){},279:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/first-blog"},id:"7c215ae5-9a42-58f0-b398-eb0354e8c443",frontmatter:{title:"First Blog",parents:null}}},{node:{fields:{slug:"/blog/second-blog"},id:"225739f0-7d3d-54f0-8595-6b6e43fddb58",frontmatter:{title:"Second Blog",parents:null}}},{node:{fields:{slug:"/docs/get-started/introduction"},id:"68c2d7a0-ab69-5336-b409-aa953ebc023a",frontmatter:{title:"Introduction",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/get-started/quick_start"},id:"f09646a5-cf4c-5063-bb7b-145c148b255c",frontmatter:{title:"Quick Start",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/guide/anchor"},id:"3905643d-8ada-5797-b9ab-a4f7fae791d6",frontmatter:{title:"Anchor",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/contents"},id:"105561ac-70eb-5c30-84fc-e644bbf36efc",frontmatter:{title:"Contents",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/menu_items"},id:"ab216202-dfd7-575e-bc74-2610fd339092",frontmatter:{title:"Menu Items",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/sidebar"},id:"c372c32b-0319-517b-b91f-e547acd93f32",frontmatter:{title:"Sidebar",parents:["Guide"]}}}]}}}},284:function(e,t,n){},343:function(e,t,n){}}]);
//# sourceMappingURL=1-4d34e3109f85d84e71cd.js.map
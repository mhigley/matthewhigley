(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=(a(149),a(156)),i=a(154),c=a(7),o=a.n(c),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return A.a.createElement("section",null,A.a.createElement("div",{className:"container"},A.a.createElement("div",null,A.a.createElement("h1",null,A.a.createElement("span",null,this.props.first),A.a.createElement("br",null),A.a.createElement("span",null,this.props.last)))))},t}(n.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return A.a.createElement("section",null,A.a.createElement("div",{className:"container"},A.a.createElement("p",null,"Lorem ipsum dolor sit amet.")))},t}(n.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return A.a.createElement("section",null,A.a.createElement("div",{className:"container"},A.a.createElement("p",null,"Lorem ipsum dolor sit amet.")))},t}(n.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return A.a.createElement("section",null,A.a.createElement("div",{className:"container"},A.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(n.Component);t.default=function(){return A.a.createElement(r.a,null,A.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),A.a.createElement(l,{first:"Matthew",last:"Higley"}),A.a.createElement(s,null),A.a.createElement(u,null),A.a.createElement(d,null))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(150);var l=A.a.createContext({}),s=function(e){return A.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),c=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EABUBAQEAAAAAAAAAAAAAAAAAAAIA/9oADAMBAAIQAxAAAAFa9ziphSI//8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDABQx/9oACAEBAAEFAkDHH0asQiJKbLzLv//EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFcn//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/AYf/xAAZEAADAAMAAAAAAAAAAAAAAAAAATEQISL/2gAIAQEABj8C1nmohWf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IQOc+tXG2ycT1VLV24aLC7Y7Ko//2gAMAwEAAgADAAAAECj/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxDUljf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QGO23/8QAGhABAQADAQEAAAAAAAAAAAAAAREAMUEhUf/aAAgBAQABPxBJAEVGjlgBK3ke4BtM9yYECE0H2axfgihsbcqTp2Z//9k=",aspectRatio:1.2765957446808511,src:"/static/19b55c69e409dfc60ef1a627f64e7af7/dfbc4/background-image.jpg",srcSet:"/static/19b55c69e409dfc60ef1a627f64e7af7/2953d/background-image.jpg 250w,\n/static/19b55c69e409dfc60ef1a627f64e7af7/5cb00/background-image.jpg 500w,\n/static/19b55c69e409dfc60ef1a627f64e7af7/dfbc4/background-image.jpg 960w",sizes:"(max-width: 960px) 100vw, 960px"}}}}}},154:function(e,t,a){"use strict";var n=a(155),A=a(0),r=a.n(A),i=a(4),c=a.n(i),o=a(158),l=a.n(o);function s(e){var t=e.description,a=e.lang,A=e.meta,i=e.keywords,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(A)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,a){"use strict";var n=a(151),A=a(0),r=a.n(A),i=a(4),c=a.n(i),o=a(149),l=a(153),s=a(157),u=a.n(s),d=function(){return r.a.createElement(o.b,{query:"2829056681",render:function(e){return r.a.createElement(u.a,{fluid:e.backgroundImage.childImageSharp.fluid})},data:l})},m=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{display:"none",background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var p=m,f=(a(144),function(e){var t=e.siteTitle;return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"© ",(new Date).getFullYear()," ",t,", Built with"," ",r.a.createElement("i",{className:"fal fa-heart"})," and ",r.a.createElement("i",{className:"fal fa-coffee"})," ")))});f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var E=f,g=function(e){var t=e.children;return r.a.createElement(o.b,{query:"1096028375",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",{style:{margin:"0 auto"}},t,r.a.createElement(E,{siteTitle:e.site.siteMetadata.title})),r.a.createElement(d,null))},data:n})};g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-b3ed1f15aac9a89fda22.js.map
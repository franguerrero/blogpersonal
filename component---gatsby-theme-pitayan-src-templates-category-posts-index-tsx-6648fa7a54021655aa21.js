"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[849],{6468:function(e,t,a){var l=a(2784),n=a(4792);const r=e=>{let{categories:t,className:a}=e;return t&&t.length?l.createElement("div",{className:"flex flex-wrap gap-3 "+a},t.map(((e,t)=>l.createElement(n.rU,{className:"site-tag block",key:t,to:"/categories/"+e},e)))):l.createElement(l.Fragment,null)};t.Z=(0,l.memo)(r)},5303:function(e,t,a){var l=a(2784),n=a(4792);const r=e=>{let{pageInfo:{currentPage:t,hasNextPage:a,hasPreviousPage:r,pageCount:c},path:m}=e;const s=e=>t==e+1?"pagination-item active":"pagination-item";return l.createElement("ul",{className:"pagination text-center"},r?l.createElement("li",{className:"pagination-item"},l.createElement(n.rU,{to:"/"+m+"/"+(t-1)},"Prev")):null,Array.from({length:c}).map(((e,t)=>l.createElement("li",{key:t+1,className:s(t)},l.createElement(n.rU,{to:"/"+m+"/"+(t+1)},t+1)))),a?l.createElement("li",{className:"pagination-item"},l.createElement(n.rU,{to:"/"+m+"/"+(t+1)},"Next")):null)};t.Z=(0,l.memo)(r)},8382:function(e,t,a){var l=a(2784);const n=e=>{let{timeToRead:t,date:a,className:n=""}=e;return l.createElement("span",{className:"text-gray-500 "+n},a," • ",t," min read")};t.Z=(0,l.memo)(n)},5908:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(2784),n=a(4792),r=a(4790),c=a(6468),m=a(8382);const s=e=>{let{title:t,description:a,date:s,categories:o,hero:i,timeToRead:g,slug:d}=e;const p=(0,r.c)(null==i?void 0:i.normal);return l.createElement("div",{className:"panel"},l.createElement(n.rU,{to:d},p?l.createElement("div",{className:"panel-image"},l.createElement(r.G,{image:p,alt:""})):null,l.createElement("h3",null,t)),l.createElement("p",{className:"panel-content"},a),l.createElement(c.Z,{categories:o}),l.createElement("br",null),l.createElement("span",{className:"panel-footer"},l.createElement(m.Z,{timeToRead:g,date:s})))};var o=(0,l.memo)(s);const i=e=>{let{posts:t,className:a=""}=e;return l.createElement("div",{className:a},t.map((e=>{let{id:t,timeToRead:a,frontmatter:{categories:n,date:r,description:c,hero:m,title:s},fields:{slug:i}}=e;return l.createElement(o,{key:t,title:s,description:c,date:r,categories:n,hero:m,slug:i,timeToRead:a})})))};var g=(0,l.memo)(i)},7e3:function(e,t,a){a.r(t);var l=a(2784),n=a(5562),r=a(5303),c=a(5908),m=a(6843);t.default=e=>{let{data:{allMdx:{nodes:t,totalCount:a,pageInfo:s}},pageContext:{category:o}}=e;const{siteUrl:i}=(0,m.$W)();return l.createElement(n.Z,{pageUrl:i+"/categories/"+o,pageTitle:"Category: "+o},l.createElement("h1",{className:"leading-tight md:leading-tight md:text-4xl text-3xl text-center mb-32"},o," (",a,")"),l.createElement(c.Z,{posts:t,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),l.createElement("div",{className:"my-24"},l.createElement(r.Z,{pageInfo:s,path:"categories/"+o})))}}}]);
//# sourceMappingURL=component---gatsby-theme-pitayan-src-templates-category-posts-index-tsx-6648fa7a54021655aa21.js.map
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[952],{6468:function(e,t,a){var l=a(2784),r=a(4792);const n=e=>{let{categories:t,className:a}=e;return t&&t.length?l.createElement("div",{className:"flex flex-wrap gap-3 "+a},t.map(((e,t)=>l.createElement(r.rU,{className:"site-tag block",key:t,to:"/categories/"+e},e)))):l.createElement(l.Fragment,null)};t.Z=(0,l.memo)(n)},8382:function(e,t,a){var l=a(2784);const r=e=>{let{timeToRead:t,date:a,className:r=""}=e;return l.createElement("span",{className:"text-gray-500 "+r},a," • ",Math.round(t)," min read")};t.Z=(0,l.memo)(r)},5908:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(2784),r=a(4792),n=a(3510),m=a(6468),c=a(8382);const s=e=>{let{title:t,description:a,date:s,categories:o,hero:i,timeToRead:d,slug:u}=e;const g=(0,n.c)(null==i?void 0:i.normal);return l.createElement("div",{className:"panel"},l.createElement(r.rU,{to:u},g?l.createElement("div",{className:"panel-image"},l.createElement(n.G,{image:g,alt:""})):null,l.createElement("h3",null,t)),l.createElement("p",{className:"panel-content"},a),l.createElement(m.Z,{categories:o}),l.createElement("br",null),l.createElement("span",{className:"panel-footer"},l.createElement(c.Z,{timeToRead:d,date:s})))};var o=(0,l.memo)(s);const i=e=>{let{posts:t,className:a=""}=e;return l.createElement("div",{className:a},t.map((e=>{let{id:t,timeToRead:a,frontmatter:{categories:r,date:n,description:m,hero:c,title:s},fields:{slug:i}}=e;return l.createElement(o,{key:t,title:s,description:m,date:n,categories:r,hero:c,slug:i,timeToRead:a})})))};var d=(0,l.memo)(i)},3206:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var l=a(2784),r=a(4792),n=a(5562),m=a(6843);const c=()=>{const{siteSlogan:e}=(0,m.$W)();return l.createElement("div",{className:"max-w-2xl"},l.createElement("h1",{className:"leading-tight md:leading-tight md:text-5xl text-4xl"},e))};var s=(0,l.memo)(c),o=a(934);const i=()=>{const{siteLinks:e}=(0,m.$W)();return e.some((e=>e.group.includes("home")))?l.createElement("div",{className:"flex flex-wrap"},l.createElement(o.Z,{group:"home",data:e,className:"mr-6 py-2"})):null};var d=(0,l.memo)(i),u=a(5908);const g=e=>{let{data:{allMdx:{nodes:t}}}=e;return l.createElement(n.Z,{pageTitle:"Home"},l.createElement(s,null),l.createElement("br",null),l.createElement("br",null),l.createElement(d,null),l.createElement("hr",{className:"mt-4 mb-12 border-gray-300"}),l.createElement(u.Z,{posts:t,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),l.createElement("div",{className:"text-center my-24"},l.createElement("button",{className:"font-bold text-xl rounded px-4 py-2 dark:hover:bg-gray-800 hover:bg-gray-200 transition-colors duration-75",onClick:()=>(0,r.c4)("/posts")},l.createElement("span",{className:""},"See More ..."))))};var E=(0,l.memo)(g)}}]);
//# sourceMappingURL=component---gatsby-theme-pitayan-src-pages-index-tsx-53d4bb43c1b10e7a424d.js.map
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[690],{1021:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var s=t(5392),n=t(2784);function l(e){const a=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(a.h1,{id:"use-our-plugin-this-way",style:{position:"relative"}},n.createElement(a.a,{href:"#use-our-plugin-this-way","aria-label":"use our plugin this way permalink",className:"heading-anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Use our plugin this way."),"\n",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// Just an example</span>\n<span class="token punctuation">{</span>\n  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@pitayan/gatsby-theme-pitayan</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">siteAssets</span><span class="token operator">:</span> <span class="token string">"src/assets"</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">postsPerPage</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">mailChimpEndpoint</span><span class="token operator">:</span>\n      <span class="token string">"https://pitayanblog.us14.list-manage.com/subscribe/post?u=234bf6777b76872feb7d92a68&amp;amp;id=27fad95f3b"</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">mailChimpTimeout</span><span class="token operator">:</span> <span class="token number">3500</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",n.createElement(a.h1,{id:"the-plugin-options",style:{position:"relative"}},n.createElement(a.a,{href:"#the-plugin-options","aria-label":"the plugin options permalink",className:"heading-anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"The plugin options"),"\n",n.createElement(a.p,null,"| option                   | description                                                                                     | default                               |\n|--------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------|\n| siteAssets               | The path of the static assets                                                                   | ",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token string">"./src/assets"</span></code>'}}),"                   |\n| postsPerPage             | How many posts to be displayed in each list page                                                | ",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token number">10</span></code>'}}),"                               |\n| mailChimpEndpoint        | The embeded form endpoint for your MailChimp account                                            | ",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token keyword">undefined</span></code>'}}),"                        |\n| mailChimpTimeout         | The timeout (ms) for the MailChimp subscription API request                                     | ",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token number">3500</span></code>'}}),"                             |\n| applyGatsbyRemarkPlugins | The plugins for gatsby-remark-plugins that will be applied before @pitayan/gatsby-theme-pitayan | ",n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> defaultGatsbyRemarkPlugins</code>'}})," |"))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?n.createElement(a,e,n.createElement(l,e)):l(e)},o=t(4792),c=t(5100),i=t(4790),p=t(5619),m=t(5562),u=t(8382),d=t(6358),g=t(6610),y=t(6468),b=t(6976),k=t(3496),h=t(3885),f=t(8346),E=t(6843),x=t(492),w=t(5908);const v=e=>{let{image:a}=e;return a?n.createElement(i.G,{className:"gatsby-resp-image-image",image:a,alt:""}):null},N=e=>{let{data:{mdx:{body:a,frontmatter:{author:t,title:l,date:r,categories:N,hero:j,description:T,keywords:_},fields:{slug:I},timeToRead:Z,relatedPosts:M}},pageContext:{previous:C,next:H},children:L}=e;const{0:P,1:S}=(0,n.useState)(),R=(0,i.c)(null==j?void 0:j.medium),{siteUrl:U}=(0,E.$W)(),{href:G}=(0,p.useLocation)(),A=t.map((e=>{let{id:a,yamlId:t,name:s,bio:n,sns:l}=e;return{id:a,yamlId:t,name:s,bio:n,socialUrls:l.filter((e=>"mailto"!=e[0]&&"url"!=e[0])).map((e=>x.$s[e[0]].url+"/"+e[1]))}}));return console.log(L),n.createElement(m.Z,{postDescription:T,pageImage:R.images.fallback.src,pageUrl:""+U+I,postTitle:l,pageTitle:l,keywords:_,date:r,timeToRead:Z,authors:A},n.createElement(h.Z,{target:P}),n.createElement("div",{className:"hidden md:block"},n.createElement(f.Z,{className:"fixed right-[6%] bottom-[6%] flex flex-col justify-center z-50"},n.createElement(b.Z,null))),n.createElement("div",{className:"max-w-lg md:max-w-2xl mx-auto mb-24"},n.createElement("h1",{className:"text-center"},l),n.createElement(u.Z,{className:"block mb-4 text-center",date:r,timeToRead:Z}),n.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},n.createElement(k.Z,{data:t}),n.createElement(g.Z,{url:G,title:l,hashtags:N.join(","),description:T,className:"space-x-6 text-xl py-4 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0}))),n.createElement("div",{className:"text-center mb-24"},n.createElement(v,{image:R})),n.createElement("article",{className:"markdown",ref:e=>S(e)},n.createElement(s.Zo,{components:{}},L)),n.createElement("div",{className:"my-8 max-w-lg md:max-w-2xl mx-auto"},n.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},n.createElement(y.Z,{className:"my-8 justify-center",categories:N}),n.createElement(g.Z,{url:G,title:l,hashtags:N.join(","),description:T,className:"space-x-6 text-xl my-8 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0})),n.createElement("div",{className:"flex justify-around flex-wrap text-base mt-12 mb-24"},n.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mr-auto w-full md:w-[49%]"},n.createElement(o.rU,{to:C.slug,className:"site-link my-2 block"},n.createElement("div",{className:"flex items-start space-x-2"},n.createElement(c.YG0,{className:"block h-6 w-6"}),n.createElement("span",null,C.title)))),n.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded ml-auto w-full md:w-[49%]"},n.createElement(o.rU,{to:H.slug,className:"site-link my-2 block text-right"},n.createElement("div",{className:"flex items-start space-x-2 justify-end"},n.createElement("span",null,H.title),n.createElement(c.nzV,{className:"block h-6 w-6"}))))),n.createElement("h5",{className:"text-center mb-12"},"Written by"),t.map((e=>{let{bio:a,name:t,initial:s,avatar:l,sns:r,yamlId:o}=e;return n.createElement(d.Z,{className:"p-8 mb-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded",key:o,bio:a,name:t,initial:s,avatar:l,sns:r,yamlId:o})}))),n.createElement("div",{className:"my-24 max-w-lg sm:max-w-full mx-auto"},n.createElement("h5",{className:"mb-12 text-center"},"Related Posts"),n.createElement(w.Z,{posts:M,className:"grid sm:grid-cols-3 row-auto auto-cols-auto gap-8"})))};function j(e){return n.createElement(N,e,n.createElement(r,e))}}}]);
//# sourceMappingURL=component---gatsby-theme-pitayan-src-templates-post-index-tsx-content-file-path-users-daiyanze-documents-gatsby-theme-pitayan-packages-www-content-posts-2022-03-31-gatsby-plugin-pitayan-plugin-options-index-mdx-2fa2bac99a55faa76762.js.map
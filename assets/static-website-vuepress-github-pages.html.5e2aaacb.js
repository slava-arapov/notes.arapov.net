import{_ as a,o,c as i,a as s,b as n,d as e,e as l,r}from"./app.d5586ec4.js";const c={},p=s("h1",{id:"vuepress-website-hosted-on-github-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-website-hosted-on-github-pages","aria-hidden":"true"},"#"),e(" VuePress website hosted on GitHub Pages")],-1),d=e("I started Jekyll project first to host on Github Pages but GitHub "),u={href:"https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/",target:"_blank",rel:"noopener noreferrer"},h=e("released new GitHub Actions integrations on July 27th, 2022"),b=e(" so I moved to VuePress."),g=s("p",null,"You can use GitHub Actions to build any static website and GitHub Pages to host it quick and for free.",-1),_=s("p",null,"GitHub Actions and VuePress documentation is great so I list the sequence of steps briefly.",-1),y=s("h2",{id:"static-website-setup-instructions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#static-website-setup-instructions","aria-hidden":"true"},"#"),e(" Static website setup instructions")],-1),m=s("li",null,[e("Register (sub)domain and set DNS CNAME record to "),s("code",null,"<your-username>.github.io")],-1),v=s("li",null,"Create VuePress site and make a repository",-1),D=s("li",null,"Host the repository on GitHub",-1),f=e("Add new workflow at GitHub Actions tab according to "),k={href:"https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},w=e("VuePress Guide"),G=l(`<li>If you use sample config and custom domain add <code>fqdn</code> parameter in the last <code>docs</code> job step<div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># please check out the docs of the workflow for more details</span></span>
<span class="line"><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># deploy to gh-pages branch</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># deploy the default output dir of VuePress</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># domain name to set in CNAME file</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">fqdn</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">notes.arapov.net</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>GitHub action will build and push updated static site to <code>gh-pages</code> branch at any commit</li><li>Check your repository Settings -&gt; Pages page and select <code>gh-pages</code> branch to deploy from</li>`,3),C=s("h2",{id:"links",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#links","aria-hidden":"true"},"#"),e(" Links")],-1),H={href:"https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},P=e("GitHub Pages Deployment"),x=e(" \u2014 VuePress manual"),A={href:"https://github.com/crazy-max/ghaction-github-pages",target:"_blank",rel:"noopener noreferrer"},E=e("A GitHub Action to deploy to GitHub Pages"),V=e(" by CrazyMax"),N={href:"https://docs.github.com/en/pages/quickstart",target:"_blank",rel:"noopener noreferrer"},I=e("Quickstart for GitHub Pages"),q=e(" \u2014 GitHub guide");function j(z,S){const t=r("ExternalLinkIcon");return o(),i("div",null,[p,s("p",null,[d,s("a",u,[h,n(t)]),b]),g,_,y,s("ol",null,[m,v,D,s("li",null,[f,s("a",k,[w,n(t)])]),G]),C,s("ul",null,[s("li",null,[s("a",H,[P,n(t)]),x]),s("li",null,[s("a",A,[E,n(t)]),V]),s("li",null,[s("a",N,[I,n(t)]),q])])])}var L=a(c,[["render",j],["__file","static-website-vuepress-github-pages.html.vue"]]);export{L as default};
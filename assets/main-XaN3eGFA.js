(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=[{id:1,number:"01",name:"Grandz Bet",tools:["Website","Figma","2024"],previewImg:"/portfolio/1_hero.png",previewDesc:"An online platform for iGaming and sports betting, offering casino games, virtual sports, and live betting."},{id:2,number:"02",name:"Space Fortuna",tools:["Website","Figma","2023"],previewImg:"/portfolio/2_hero.webp",previewDesc:"An online platform for iGaming offering casino games and promotions."},{id:3,number:"03",name:"Grandz Race",tools:["Website","Figma","2023"],previewImg:"/portfolio/3_hero.webp",previewDesc:"An online platform for iGaming offering casino games and promotions."},{id:4,number:"04",name:"Tortuga",tools:["Landing Page","Webflow","2024"],previewImg:"/portfolio/4_hero.webp",previewDesc:"A landing page for a An online platform for iGaming built on Webflow."},{id:5,number:"05",name:"Casino En Ligne Nouveau",tools:["Website","Figma","2023"],previewImg:"/portfolio/5_hero.webp",previewDesc:"A website offering Igaming rankings, reviews and articles."}],p={projects:d};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <header>
        <div class="logo-container">
          <a href="/portfolio/index.html" class="logo">GALINA GANEVA</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/portfolio/GalinaGaneva_CV.pdf" target="_blank">
                <div class="link-content">
                  <p>Resume</p>
                  <img src="/portfolio/header-arrow.svg" width="28" height="28" />
                </div>
                <div class="link-content-duplicate">
                  <p>Resume</p>
                  <img src="/portfolio/header-arrow.svg" width="28" height="28" />
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    <main id="main">
    </main>
    <footer>
      <p>2025</p>
      <p>Galina Ganeva</p>
    </footer>
  `});const m=`
  <section style="width: 100%; ">
    <div class="hero-container">
      <h1 class="hero-title left" style="animation-delay: 0s;">Less Noise,</h1>
      <h1 class="hero-title middle" style="animation-delay: 0.2s;">More Clarity,</h1>
      <h1 class="hero-title right" style="animation-delay: 0.4s;">Bold Impact.</h1>
    </div>
    <div class="spline-container" style="width: 100vw; overflow:hidden; top: 81px;">
      <div class="spline-container">
        <spline-viewer
          url="https://prod.spline.design/K-5M7t3eeTR7hjzy/scene.splinecode"
        ></spline-viewer>
      </div>
    </div>
  </section>
`,f=`
  <section class="about-section">
    <h1 class="about-text">
      I am a passionate designer in the iGaming industry, crafting
      visually engaging experiences that captivate players and enhance
      brand identity.
    </h1>
  </section>
`,c=(i,n)=>`
    <a class="project-container project-link" href="/portfolio/project/project.html?id=${i.id}">
      <div class="line"></div>
      <div class="project" data-project-id="${i.id}">
        <div class="project-number-container">
          <h3 class="project-number">${n}</h3>
          <img src="/portfolio/arrow.svg" class="arrow" alt="Arrow icon" />
        </div>
        <img class="preview-img not-landscape" src="${i.previewImg}" alt="${i.name}"/>
        <div class="project-info">
          <h2 class="project-name">${i.name}</h2>
          <div class="project-tools">
            ${i.tools.map(s=>`<h4 class="project-item">${s}</h4>`).join("")}
          </div>
        </div>
        <div class="project-preview">
          <img class="preview-img" src="${i.previewImg}" alt="${i.name}"/>
          <p class="preview-text">${i.previewDesc}</p>
        </div>
        <p class="preview-text not-landscape">${i.previewDesc}</p>
      </div>
    </a>
  `,g=()=>{const i=p.projects,n=new URLSearchParams(window.location.search),s=parseInt(n.get("id")||"",10);let o='<section class="projects">';if(i.length>0&&isNaN(s)&&(o+='<div class="project-focus">',o+=c(i[0],"01"),o+="</div>"),i.length>1)for(let e=1;e<i.length;e+=2)o+='<div class="project-group">',o+=c(i[e],"0"+e),e+1<i.length&&(o+=c(i[e+1],"0"+(e+1))),o+="</div>";return o+="</section>",o};document.addEventListener("DOMContentLoaded",()=>{var e;const i=document.querySelector("#main");i&&(i.innerHTML+=m,i.innerHTML+=f,i.innerHTML+=g());const n=t=>{const r=t.getBoundingClientRect();return r.top>=0&&r.top<=(window.innerHeight||document.documentElement.clientHeight)},s=()=>{const t=document.querySelector(".about-text");t&&!t.classList.contains("visible")&&n(t)&&t.classList.add("visible"),document.querySelectorAll(".line").forEach(l=>{l.classList.contains("line-visible")||n(l)&&l.classList.add("line-visible")});const a=document.querySelector(".projects");a&&!a.classList.contains("line-visible")&&n(a)&&a.classList.add("line-visible")};s(),window.addEventListener("scroll",s,{passive:!0});const o=document.querySelector("spline-viewer");if(o){const t=(e=o.shadowRoot)==null?void 0:e.querySelector("#logo");t&&t.remove()}});export{g};

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <header>
    <div class="logo-container">
      <h1 class="logo">GALINA GANEVA</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">RESUME</a></li>
        <img src="/portfolio-new/arrow.svg" width="32" height="32" />
      </ul>
    </nav>
  </header>
  <main id="main"></main>
  <footer>
    <p>2025</p>
    <p>Galina Ganeva</p>
  </footer>
`;const a=`
  <section style="position: relative">
    <div class="hero-container">
      <h1 class="hero-title left">Less Noise,</h1>
      <h1 class="hero-title middle">More Clarity,</h1>
      <h1 class="hero-title right">Bold Impact.</h1>
    </div>
    <div class="spline-container">
      <spline-viewer
        url="https://prod.spline.design/K-5M7t3eeTR7hjzy/scene.splinecode"
      ></spline-viewer>
    </div>
  </section>
`,c=`
  <section class="about-section">
    <h1 class="about-text">
      I am a passionate designer in the iGaming industry, crafting
      visually engaging experiences that captivate players and enhance
      brand identity.
    </h1>
  </section>
`,l=[{id:1,number:"01",name:"Grandz Bet",tools:["Website","Figma","2023"]},{id:2,number:"02",name:"Space Fortuna",tools:["Website","Figma","2023"]},{id:3,number:"03",name:"Grandz Race",tools:["Website","Figma","2023"]},{id:4,number:"04",name:"Tortuga",tools:["Landing Page","Webflow","2023"]},{id:5,number:"05",name:"Casino En Ligne Nouveau",tools:["Website","Figma","2023"]}],d=()=>`
    <section class="projects">
      ${l.map(i=>`
        <div class="project" key="${i.id}">
          <h3 class="project-number">${i.number}</h3>
          <div class="project-info">
            <h2 class="project-name">${i.name}</h2>
            <div class="project-tools">
              ${i.tools.map(o=>`
                <h4 class="project-item">${o}</h4>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </section>
  `;document.addEventListener("DOMContentLoaded",()=>{var r;const i=document.querySelector("#main");i&&(i.innerHTML+=a,i.innerHTML+=c,i.innerHTML+=d());const o=document.querySelector("spline-viewer");if(o){const n=(r=o.shadowRoot)==null?void 0:r.querySelector("#logo");n&&n.remove()}});

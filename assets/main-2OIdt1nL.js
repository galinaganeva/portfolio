import"./style-DCcNwnnD.js";const c=[{id:1,number:"01",name:"Grandz Bet",tools:["Website","Figma","2024"],previewImg:"/portfolio/1_hero.png",previewDesc:"An online platform for iGaming and sports betting, offering casino games, virtual sports, and live betting."},{id:2,number:"02",name:"Space Fortuna",tools:["Website","Figma","2023"],previewImg:"/portfolio/2_hero.webp",previewDesc:"An online platform for iGaming offering casino games and promotions."},{id:3,number:"03",name:"Grandz Race",tools:["Website","Figma","2023"],previewImg:"/portfolio/3_hero.webp",previewDesc:"An online platform for iGaming offering casino games and promotions."},{id:4,number:"04",name:"Tortuga",tools:["Landing Page","Webflow","2024"],previewImg:"/portfolio/4_hero.webp",previewDesc:"A landing page for a An online platform for iGaming built on Webflow."},{id:5,number:"05",name:"Casino En Ligne Nouveau",tools:["Website","Figma","2023"],previewImg:"/portfolio/5_hero.webp",previewDesc:"A website offering Igaming rankings, reviews and articles."}],d={projects:c};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
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
  `});const p=`
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
`,m=`
  <section class="about-section">
    <h1 class="about-text">
      I am a passionate designer in the iGaming industry, crafting
      visually engaging experiences that captivate players and enhance
      brand identity.
    </h1>
  </section>
`,v=()=>`
    <section class="projects">
      ${d.projects.map(e=>`
        <a class="project-container project-link" href="/portfolio/project/project.html?id=${e.id}">
          <div class="line"></div>
          <div class="project" data-project-id="${e.id}">
            <h3 class="project-number">${e.number}</h3>
            <div class="project-info">
              <h2 class="project-name">${e.name}</h2>
              <div class="project-tools">
                ${e.tools.map(n=>`
                  <h4 class="project-item">${n}</h4>
                `).join("")}
              </div>
            </div>
            <div class="project-preview">
              <img class="preview-img" src="${e.previewImg}" alt="${e.name}"/>
              <p class="preview-text">${e.previewDesc}</p>
            </div>
          </div>
        </a>
      `).join("")}
    </section>
  `;document.addEventListener("DOMContentLoaded",()=>{var l;const e=document.querySelector("#main");e&&(e.innerHTML+=p,e.innerHTML+=m,e.innerHTML+=v());const n=i=>{const t=i.getBoundingClientRect();return t.top>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)},a=()=>{const i=document.querySelector(".about-text");i&&!i.classList.contains("visible")&&n(i)&&i.classList.add("visible"),document.querySelectorAll(".line").forEach(s=>{s.classList.contains("line-visible")||n(s)&&s.classList.add("line-visible")});const o=document.querySelector(".projects");o&&!o.classList.contains("line-visible")&&n(o)&&o.classList.add("line-visible")};a(),window.addEventListener("scroll",a,{passive:!0});const r=document.querySelector("spline-viewer");if(r){const i=(l=r.shadowRoot)==null?void 0:l.querySelector("#logo");i&&i.remove()}});

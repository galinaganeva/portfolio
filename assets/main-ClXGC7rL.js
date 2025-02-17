import"./style-zEPlTBoL.js";const d=[{id:1,number:"01",name:"Grandz Bet",tools:["Website","Figma","2023"],previewImg:"/portfolio-new/1_hero.png",previewDesc:"An online platform for iGaming and sports betting, offering casino games, virtual sports, and live betting."},{id:2,number:"02",name:"Space Fortuna",tools:["Website","Figma","2023"],previewImg:"/portfolio-new/1_hero.png",previewDesc:""},{id:3,number:"03",name:"Grandz Race",tools:["Website","Figma","2023"],previewImg:"/portfolio-new/1_hero.png",previewDesc:""},{id:4,number:"04",name:"Tortuga",tools:["Landing Page","Webflow","2023"],previewImg:"/portfolio-new/1_hero.png",previewDesc:""},{id:5,number:"05",name:"Casino En Ligne Nouveau",tools:["Website","Figma","2023"],previewImg:"/portfolio-new/1_hero.png",previewDesc:""}],p={projects:d};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <header>
        <div class="logo-container">
          <a href="/portfolio-new/index.html" class="logo">GALINA GANEVA</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/portfolio-new/GalinaGaneva_CV.pdf" target="_blank">
                <div class="link-content">
                  <p>Resume</p>
                  <img src="/portfolio-new/arrow.svg" width="32" height="32" />
                </div>
                <div class="link-content-duplicate">
                  <p>Resume</p>
                  <img src="/portfolio-new/arrow.svg" width="32" height="32" />
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
  `});const v=`
  <section style="position: relative; width: 100%;">
    <div class="hero-container">
      <h1 class="hero-title left" style="animation-delay: 0s;">Less Noise,</h1>
      <h1 class="hero-title middle" style="animation-delay: 0.2s;">More Clarity,</h1>
      <h1 class="hero-title right" style="animation-delay: 0.4s;">Bold Impact.</h1>
    </div>
    <div class="spline-container" style="width: 100%; overflow:hidden">
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
`,h=()=>`
    <section class="projects">
      ${p.projects.map(e=>`
        <a class="project-container" href="/portfolio-new/project/project.html?id=${e.id}" class="project-link">
          <div class="project" data-project-id="${e.id}">
            <h3 class="project-number">${e.number}</h3>
            <div class="project-info">
              <h2 class="project-name">${e.name}</h2>
              <div class="project-tools">
                ${e.tools.map(o=>`
                  <h4 class="project-item">${o}</h4>
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
  `;document.addEventListener("DOMContentLoaded",()=>{var a;const e=document.querySelector("#main");e&&(e.innerHTML+=v,e.innerHTML+=m,e.innerHTML+=h());const o=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),o.unobserve(t.target))})},{threshold:.1}),n=document.querySelector(".about-text");n&&o.observe(n);const s=document.querySelector("spline-viewer");if(s){const i=(a=s.shadowRoot)==null?void 0:a.querySelector("#logo");i&&i.remove()}const c=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&t.target.classList.add("line-visible")})},{threshold:.2});document.querySelectorAll(".project").forEach(i=>{c.observe(i)});const l=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&t.target.classList.add("line-visible")})},{threshold:.9}),r=document.querySelector(".projects");r&&l.observe(r)});

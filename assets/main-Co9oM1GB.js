import"./style-Jx7vBT01.js";const d=[{id:1,number:"01",name:"Grandz Bet",tools:["Website","Figma","2023"]},{id:2,number:"02",name:"Space Fortuna",tools:["Website","Figma","2023"]},{id:3,number:"03",name:"Grandz Race",tools:["Website","Figma","2023"]},{id:4,number:"04",name:"Tortuga",tools:["Landing Page","Webflow","2023"]},{id:5,number:"05",name:"Casino En Ligne Nouveau",tools:["Website","Figma","2023"]}],h={projects:d};document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <header>
      <div class="logo-container">
        <a href="/portfolio-new/index.html" class="logo">GALINA GANEVA</a>
      </div>
      <nav>
        <ul>
            <li><a href="/portfolio-new/GalinaGaneva_CV.pdf" target="_blank">Resume</a></li>
            <li>
              <a href="/portfolio-new/GalinaGaneva_CV.pdf" target="_blank"
                ><img src="/portfolio-new/arrow.svg" width="32" height="32"
              /></a>
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
`,v=()=>`
    <section class="projects">
      ${h.projects.map(o=>`
        <div class="project" data-project-id="${o.id}">
          <h3 class="project-number">${o.number}</h3>
          <div class="project-info">
            <h2 class="project-name">${o.name}</h2>
            <div class="project-tools">
              ${o.tools.map(i=>`
                <h4 class="project-item">${i}</h4>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </section>
  `;document.addEventListener("DOMContentLoaded",()=>{var r;const o=document.querySelector("#main");o&&(o.innerHTML+=p,o.innerHTML+=m,o.innerHTML+=v());const i=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),i.unobserve(t.target))})},{threshold:.1}),n=document.querySelector(".about-text");n&&i.observe(n);const s=document.querySelector("spline-viewer");if(s){const e=(r=s.shadowRoot)==null?void 0:r.querySelector("#logo");e&&e.remove()}const c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("line-visible")})},{threshold:.2});document.querySelectorAll(".project").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-project-id");window.location.href=`/portfolio-new/project/project.html?id=${t}`}),c.observe(e)});const l=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("line-visible")})},{threshold:.9}),a=document.querySelector(".projects");a&&l.observe(a)});

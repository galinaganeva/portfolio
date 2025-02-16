import"./style-ybq0J4X5.js";const n=t=>{switch(t.type){case"projectInfo":return`
        <section class="section-project-info">
          <div class="text-content">
            <div class="title-desc-container">
              <h1 class="section-title">${t.title}</h1>
              <h2 class="section-desc">${t.description}</h2>
            </div>
            <div class="visit-site-container">
              <h3 class="visit-site">${t.visitSiteText}</h3>
              <img class="visit-site-icon" src="${t.visitSiteIcon}" />
            </div>
          </div>
        </section>
      `;case"projectTools":return`
        <section class="section-project-tools">
          ${t.tools.map(e=>`
            <div class="tool-container">
              <h3 class="tool-title">${e.title}</h3>
              <h3 class="tool-desc">${e.description}</h3>
            </div>
          `).join("")}
        </section>
      `;case"imageSection":return`
        <section class="section-image">
          <img class="hero-image" src="${t.src}" />
        </section>
      `;case"textSection":return`
        <section class="section-text">
          <h3 class="section-text-title">${t.title}</h3>
          <h4 class="section-text-desc">${t.description}</h4>
        </section>
      `;case"photosSection":return`
        <section class="section-photos">
          ${t.photos.map(e=>`
            <img class="section-photos-photo" src="${e}" />
          `).join("")}
        </section>
      `;case"testimonialSection":return`
        <section class="section-testimonial">
          <div class="testimonial-container">
            <h3 class="testimonial-title">${t.title}</h3>
            <h4 class="testimonial-desc">${t.description}</h4>
          </div>
        </section>
      `;default:return""}},a=t=>t.map(e=>n(e)).join("");document.addEventListener("DOMContentLoaded",async()=>{const e=window.location.pathname.match(/project(\d+)\.html$/),i=e?parseInt(e[1],10):1,o=(await fetch("/portfolio-new/src/data/content.json").then(s=>s.json())).projects.find(s=>s.projectId===i);if(!o){console.error("Project not found");return}const c=document.querySelector("#main");c&&(c.innerHTML=a(o.sections))});

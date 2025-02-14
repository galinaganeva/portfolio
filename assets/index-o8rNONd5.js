(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <header>
    <div class="logo-container">
      <h1 class="logo">GALINA GANEVA</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">ABOUT ME</a></li>
        <li><a href="#">RESUME</a></li>
      </ul>
    </nav>
  </header>
  <main id="main">
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
  </main>
`;document.addEventListener("DOMContentLoaded",()=>{var r;const i=document.querySelector("spline-viewer");if(i){const o=(r=i.shadowRoot)==null?void 0:r.querySelector("#logo");o&&o.remove()}});

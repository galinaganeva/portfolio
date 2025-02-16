import"./style-CXQzYqf3.js";const o=[{projectId:1,sections:[{type:"projectInfo",title:"Grandz Bet",description:"I-Gaming and sports betting platform",visitSiteText:"Visit Site",visitSiteIcon:"/portfolio-new/arrow.svg"},{type:"projectTools",tools:[{title:"Category",description:"Website"},{title:"Software Used",description:"Figma"},{title:"Year",description:"2024"}]},{type:"imageSection",src:"/portfolio-new/1_hero.png"},{type:"textSection",title:"Project Overview",description:"I worked alongside a team of UI/UX designers and UX researchers to design an i-Gaming platform with sports betting features, focusing on creating an easy-to-use and engaging experience for all users.<br /><br /> Using a design system, we ensured a consistent look and feel across the platform, from game lobbies to live sports betting. Our design process included user research, wireframing, prototyping, and usability testing, which helped us create smooth and intuitive user journeys. <br /><br /> We focused on key areas such as placing bets, managing accounts, and viewing live game updates, while also promoting responsible gaming practices. To keep users engaged, we designed features like personalized game recommendations, real-time odds displays, and quick bet options."},{type:"photosSection",photos:["/portfolio-new/1_photos_1.png","/portfolio-new/1_photos_2.png"]},{type:"textSection",title:"The challenge",description:"The primary challenge was to design a platform that seamlessly combined i-Gaming and sports betting experiences while ensuring it remained intuitive and engaging for both new and experienced users. Balancing the complexity of sports betting interfaces with the fast-paced nature of gaming required careful attention to usability and information hierarchy. <br /><br /> Additionally, we needed to create a scalable design system that could support a wide range of features, from live betting and in-game interactions to personalized dashboards, without overwhelming the user. <br /><br /> Another key challenge was aligning our designs with responsible gaming regulations while maintaining a user-friendly and enjoyable experience. We also faced tight deadlines, which required efficient collaboration and rapid iterations based on user feedback. <br /><br /> This project pushed us to think critically about navigation flows, accessibility, and mobile responsiveness, ensuring a consistent experience across devices while meeting both business goals and user needs."},{type:"testimonialSection",title:"Our new design system reduced development time for future features by 50%.",description:"Smart systems. Faster outcomes."},{type:"textSection",title:"Impact",description:"The design solutions we implemented resulted in a platform that is both visually engaging and user-friendly, providing a seamless experience for both i-Gaming and sports betting users. By leveraging a design system, we ensured consistency across all touchpoints, which improved usability and reduced development time. <br /><br /> Through user-centered design and iterative testing, we streamlined the betting process, reducing friction in key flows such as placing bets, managing accounts, and accessing live game updates. Early usability tests showed a significant improvement in task completion rates and user satisfaction, particularly with the quick bet feature and personalized recommendations. <br /><br /> The modular design system we built is now serving as a foundation for future feature expansions, making it easier for the team to maintain and scale the platform. Additionally, our focus on responsible gaming practices helped the platform meet industry standards without compromising the user experience. <br /><br /> Overall, this project not only enhanced the platform’s usability and performance but also demonstrated the business value of user-centered design, driving higher user engagement and retention."}]}],a={projects:o},r=e=>{switch(e.type){case"projectInfo":return`
        <section class="section-project-info">
          <div class="text-content">
            <div class="title-desc-container">
              <h1 class="section-title">${e.title}</h1>
              <h2 class="section-desc">${e.description}</h2>
            </div>
            <div class="visit-site-container">
              <h3 class="visit-site">${e.visitSiteText}</h3>
              <img class="visit-site-icon" src="${e.visitSiteIcon}" />
            </div>
          </div>
        </section>
      `;case"projectTools":return`
        <section class="section-project-tools">
          ${e.tools.map(t=>`
            <div class="tool-container">
              <h3 class="tool-title">${t.title}</h3>
              <h3 class="tool-desc">${t.description}</h3>
            </div>
          `).join("")}
        </section>
      `;case"imageSection":return`
        <section class="section-image">
          <img class="hero-image" src="${e.src}" />
        </section>
      `;case"textSection":return`
        <section class="section-text">
          <h3 class="section-text-title">${e.title}</h3>
          <h4 class="section-text-desc">${e.description}</h4>
        </section>
      `;case"photosSection":return`
        <section class="section-photos">
          ${e.photos.map(t=>`
            <img class="section-photos-photo" src="${t}" />
          `).join("")}
        </section>
      `;case"testimonialSection":return`
        <section class="section-testimonial">
          <div class="testimonial-container">
            <h3 class="testimonial-title">${e.title}</h3>
            <h4 class="testimonial-desc">${e.description}</h4>
          </div>
        </section>
      `;default:return""}},c=e=>e.map(t=>r(t)).join("");document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=parseInt(e.get("id")||"1",10),i=a.projects.find(n=>n.projectId===t);if(!i){console.error("Project not found");return}const s=document.querySelector("#main");s&&(s.innerHTML=c(i.sections))});

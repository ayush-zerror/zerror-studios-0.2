import"./modulepreload-polyfill-B5Qt9EMX.js";function i(){gsap.registerPlugin(ScrollTrigger);const e=new LocomotiveScroll({el:document.querySelector("#main"),smooth:!0});e.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy("#main",{scrollTop(t){return arguments.length?e.scrollTo(t,0,0):e.scroll.instance.scroll.y},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector("#main").style.transform?"transform":"fixed"}),ScrollTrigger.addEventListener("refresh",()=>e.update()),ScrollTrigger.refresh()}i();function c(){var e=!1,t="";document.querySelector("#nav-about").addEventListener("click",function(){document.querySelectorAll("nav p").forEach(function(o){o.classList.contains("active")&&(t=o.textContent.toLowerCase())}),e=!e,n()}),document.querySelector("#closeAbout").addEventListener("click",function(){e=!e,n(),document.querySelectorAll("nav p").forEach(function(o){o.textContent.toLowerCase()===t&&o.classList.add("active")})});function n(){e?(gsap.set("nav",{backgroundColor:"#fff"}),gsap.to("#main",{top:"calc(100% - 50px)",ease:"power3.out",duration:.8}),gsap.to("#about-page",{top:"-50px",ease:"power3.out",duration:.8})):(document.querySelector("#nav-about").classList.remove("active"),gsap.set("nav",{backgroundColor:"transparent"}),gsap.to("#main",{top:"0%",ease:"power3.out",duration:.8}),gsap.to("#about-page",{top:"-100%",ease:"power3.out",duration:.8}))}}c();var l=gsap.timeline();l.from("#page1 h2,#page1 h3",{y:"160%",duration:.8},"a").from("nav",{y:"-100%",opacity:0,duration:.8},"a").from("#page2",{y:"50%",duration:.8,delay:-.2});document.querySelectorAll(".banner-poster").forEach(function(e){console.log(e),gsap.to(e,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.8,scrollTrigger:{trigger:e,scroller:"#main",start:"top 90%",end:"top 70%"}})});function u(){document.querySelectorAll(".project").forEach(function(e){e.addEventListener("mouseover",function(){e.classList.add("active");let t=e.querySelector("video");t&&(t.currentTime=0,t.play())}),e.addEventListener("mouseleave",function(){e.classList.remove("active")})})}u();function s(){const e=()=>{const t=new Date;let n=t.getHours(),o=t.getMinutes();const a=n>=12?"PM":"AM";n=n%12||12,o=o.toString().padStart(2,"0");const r=`${n}:${o} ${a}`;return document.querySelector("#time").textContent=r,r};e(),setInterval(e,6e4),document.querySelector(".rt-btm input").addEventListener("focus",function(){document.querySelector("#input-placeholder").style.display="none"}),document.querySelector(".rt-btm input").addEventListener("blur",function(t){t.target.value==""&&(document.querySelector("#input-placeholder").style.display="block")})}s();
//# sourceMappingURL=details-ChOLCUwA.js.map

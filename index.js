import{a as w,S as v,i as m}from"./assets/vendor-u8rapaCG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p=async(s,e)=>{const r=new URLSearchParams({key:"45941098-20d6b06978404a6b7356e16b7",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e});return(await w.get(`https://pixabay.com/api/?${r}`)).data},f=s=>s.map(({webformatURL:e,largeImageURL:r,tags:n,likes:t,views:o,comments:a,downloads:b})=>`<li class="gallery-item">
<a href="${r}">
<img src="${e}" class="img" alt="${n}" />
</a>
<div class="img-info">
    <div>
    <p class="img-info-amounts">Likes</p>
    <p class="img-info-amounts">${t}</p>
  </div>
  <div>
    <p class="img-info-amounts">Views</p>
    <p class="img-info-amounts">${o}</p>
  </div>
  <div>
      <p class="img-info-amounts">Comments</p>
      <p class="img-info-amounts">${a}</p>
  </div>
  <div>
      <p class="img-info-amounts">Downloads</p>
      <p class="img-info-amounts">${b}</p>
  </div>
</div>
</li>`),g=document.querySelector(".form"),d=document.querySelector(".gallery"),c=document.querySelector(".load-btn"),u=()=>document.querySelector("span").classList.toggle("loader"),y=()=>m.show({message:"Please fill a field",backgroundColor:"red",color:"white"}),L=()=>m.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",color:"white"}),P=()=>m.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"yellow",color:"white"}),h=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});let i="",l=1;const S=async s=>{if(s.preventDefault(),i=s.currentTarget.elements.query.value.toLowerCase().trim(),!i)return y();d.innerHTML="",c.style.display="none",l=1,u();try{const e=await p(i,l);if(!e.hits.length)return L();d.insertAdjacentHTML("beforeend",f(e.hits).join("")),h.refresh(),l++,c.style.display=e.totalHits>e.hits.length?"block":"none"}catch(e){console.log(e)}finally{u(),g.reset()}},q=async s=>{if(!i)return y();u();try{const e=await p(i,l);if(d.insertAdjacentHTML("beforeend",f(e.hits).join("")),l++,h.refresh(),window.scrollBy({top:200*2,behavior:"smooth"}),d.children.length>=e.totalHits)return c.style.display="none",P();c.style.display="block"}catch(e){console.log(e)}finally{u()}};g.addEventListener("submit",S);c.addEventListener("click",q);
//# sourceMappingURL=index.js.map

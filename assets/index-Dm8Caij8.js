(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const l="https://pixabay.com/api/",d="53527826-b2df1196f2ee896f2c8fe4b14";let i=1,u=12;function f(){i+=1}async function m(o){try{const t=await fetch(`${l}?key=${d}&q=${o}&page=${i}&per_page=${u}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){return console.error("Error fetching images:",t)}}const p=document.querySelector("#gallery");function g(o){const c=(o?.hits||[]).map(({webformatURL:s,tags:e})=>`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${s}" alt="${e}" loading="lazy" class="card-img-top gallery-img" />
            <div class="card-body p-2">
              <p class="card-text small text-truncate mb-0">${e}</p>
            </div>
          </div>
        </div>
      `).join("");p.insertAdjacentHTML("beforeend",c)}const a=document.querySelector("#load-more-btn"),y=async()=>{a.disabled=!0;try{f();const o=await m("cats");g(o)}catch(o){console.error("Load more error:",o)}finally{a.disabled=!1}};a.addEventListener("click",y);

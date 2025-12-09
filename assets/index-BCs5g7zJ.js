(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const l=document.querySelector("#gallery");function d(o){const c=(o?.hits||[]).map(({webformatURL:s,tags:e})=>`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${s}" alt="${e}" loading="lazy" class="card-img-top gallery-img" />
            <div class="card-body p-2">
              <p class="card-text small text-truncate mb-0">${e}</p>
            </div>
          </div>
        </div>
      `).join("");l.insertAdjacentHTML("beforeend",c)}const u="https://pixabay.com/api/",f="53527826-b2df1196f2ee896f2c8fe4b14";let i=1,m=12;function p(){i+=1}async function g(o){try{const t=await fetch(`${u}?key=${f}&q=${o}&page=${i}&per_page=${m}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){return console.error("Error fetching images:",t)}}const a=document.querySelector("#load-more-btn"),y=async()=>{a.disabled=!0;try{p();const o=await g("cats");d(o)}catch(o){console.error("Load more error:",o)}finally{a.disabled=!1}};a.addEventListener("click",y);

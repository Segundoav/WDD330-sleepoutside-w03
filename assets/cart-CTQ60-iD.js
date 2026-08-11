import{l,g as n}from"./utils-D7uBBs1p.js";/* empty css              */l();function s(){const t=n("so-cart");if(!t||t.length===0){document.querySelector(".product-list").innerHTML='<li class="cart-card divider">Your cart is empty.</li>';return}const e=t.map(r=>d(r));document.querySelector(".product-list").innerHTML=e.join(""),i(t)}function i(t){const e=t.reduce((c,o)=>c+o.FinalPrice,0),r=document.querySelector(".list-total");r&&(r.innerText=`Total: $${e.toFixed(2)}`);const a=document.querySelector(".list-footer");a&&a.classList.remove("hide")}function d(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
   >
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`}s();

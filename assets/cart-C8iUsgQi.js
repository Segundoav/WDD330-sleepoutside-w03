import{l,g as c,s as i}from"./utils-D7uBBs1p.js";/* empty css              */l();function o(){const t=c("so-cart");if(!t||t.length===0){document.querySelector(".product-list").innerHTML='<li class="cart-card divider">Your cart is empty.</li>';return}const e=t.map((r,a)=>m(r,a));document.querySelector(".product-list").innerHTML=e.join(""),d(t),u()}function d(t){const e=t.reduce((n,s)=>n+s.FinalPrice,0),r=document.querySelector(".list-total");r&&(r.innerText=`Total: $${e.toFixed(2)}`);const a=document.querySelector(".list-footer");a&&a.classList.remove("hide")}function m(t,e){return`<li class="cart-card divider">
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
  <p class="cart-card__quantity">qty: ${t.Quantity||1}</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <button class="cart-card__remove" data-index="${e}">Remove</button>
</li>`}function u(){document.querySelectorAll(".cart-card__remove").forEach(t=>{t.addEventListener("click",e=>{const r=e.target.dataset.index;p(r)})})}function p(t){const e=c("so-cart");e.splice(t,1),i("so-cart",e),o()}o();

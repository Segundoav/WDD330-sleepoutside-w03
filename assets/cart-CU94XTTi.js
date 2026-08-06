import{l as c,g as e}from"./utils-D7uBBs1p.js";/* empty css              */c();function o(){const r=e("so-cart");if(!r||r.length===0){document.querySelector(".product-list").innerHTML='<li class="cart-card divider">Your cart is empty.</li>';return}const a=r.map(t=>s(t));document.querySelector(".product-list").innerHTML=a.join("")}function s(r){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${r.Image}"
      alt="${r.Name}"
   >
  </a>
  <a href="#">
    <h2 class="card__name">${r.Name}</h2>
  </a>
  <p class="cart-card__color">${r.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${r.FinalPrice}</p>
</li>`}o();

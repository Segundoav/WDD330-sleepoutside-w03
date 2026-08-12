import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  if (!cartItems || cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML =
      `<li class="cart-card divider">Your cart is empty.</li>`;
    return;
  }

  const htmlItems = cartItems.map((item, index) => cartItemTemplate(item, index));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  renderCartTotal(cartItems);
  attachRemoveListeners();
  attachHoverListeners();
}
function attachHoverListeners() {
  document.querySelectorAll(".cart-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#f9f9f9";
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "";
    });
  });
}

function renderCartTotal(cartItems) {
  const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
  const totalElement = document.querySelector(".list-total");
  if (totalElement) {
    totalElement.innerText = `Total: $${total.toFixed(2)}`;
  }
  const footer = document.querySelector(".list-footer");
  if (footer) {
    footer.classList.remove("hide");
  }
}

function cartItemTemplate(item, index) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
   >
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="cart-card__remove" data-index="${index}">Remove</button>
</li>`;

  return newItem;
}

function attachRemoveListeners() {
  document.querySelectorAll(".cart-card__remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeItemFromCart(index);
    });
  });
}

function removeItemFromCart(index) {
  const cartItems = getLocalStorage("so-cart");
  cartItems.splice(index, 1);
  setLocalStorage("so-cart", cartItems);
  renderCartContents();
}

renderCartContents();
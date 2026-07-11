import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // 1. Obtenemos el carrito actual de localStorage, o empezamos con un arreglo vacío si no hay nada
  const cartItems = getLocalStorage("so-cart") || [];

  // 2. Agregamos el nuevo producto al arreglo
  cartItems.push(product);

  // 3. Guardamos el arreglo completo actualizado de vuelta en el localStorage
  setLocalStorage("so-cart", cartItems);
}

// Manejador del evento que busca el producto por su ID
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Conectamos el botón de la página HTML con nuestra función de JavaScript
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

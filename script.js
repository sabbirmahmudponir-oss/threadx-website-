// THREADX PREMIUM — business links and WhatsApp settings
// Replace the placeholder with your WhatsApp number in international format.
// Bangladesh example format: 8801XXXXXXXXX (do not include +, spaces or dashes).
const THREADX_WHATSAPP_NUMBER = "8801XXXXXXXXX";
const THREADX_INSTAGRAM_URL = "https://www.instagram.com/";
const THREADX_FACEBOOK_URL = "https://www.facebook.com/";

function makeWhatsAppLink(message) {
  return `https://wa.me/${THREADX_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.getElementById("contactWA").href = makeWhatsAppLink("Hello THREADX! I'd like to know more about your collection.");
document.getElementById("floatWA").href = makeWhatsAppLink("Hello THREADX! I'd like to place an order.");
document.getElementById("instagram").href = THREADX_INSTAGRAM_URL;
document.getElementById("facebook").href = THREADX_FACEBOOK_URL;
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.name;
    const size = prompt("Choose your size (S, M, L, XL) or type 'Not sure':", "M");
    if (size === null) return;
    const quantity = prompt("How many pieces would you like?", "1");
    if (quantity === null) return;
    const message = `Hello THREADX! I'd like to order ${product}. Size: ${size}. Quantity: ${quantity}. Please confirm availability, delivery charge and payment details.`;
    window.open(makeWhatsAppLink(message), "_blank", "noopener");
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".product").forEach(product => {
      product.hidden = category !== "all" && product.dataset.category !== category;
    });
  });
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

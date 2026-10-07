const products = [
  { category: "coffee", icon: "☕", name: "Кофейные зерна", pack: "1 кг", price: "18 500 ₸" },
  { category: "coffee", icon: "🥛", name: "Молоко 3.2%", pack: "10 л", price: "12 500 ₸" },
  { category: "syrups", icon: "🍯", name: "Сироп ванильный", pack: "1 л", price: "6 500 ₸" },
  { category: "syrups", icon: "🥤", name: "Бумажные стаканы", pack: "500 шт.", price: "12 000 ₸" },
  { category: "fresh", icon: "🍅", name: "Томаты", pack: "5 кг", price: "7 000 ₸" },
  { category: "fresh", icon: "🥩", name: "Говядина", pack: "5 кг", price: "28 000 ₸" },
];

const productsElement = document.querySelector("#products");
const render = (category = "all") => {
  productsElement.innerHTML = products
    .filter((product) => category === "all" || product.category === category)
    .map((product) => `<article class="product"><div class="product-icon">${product.icon}</div><h3>${product.name}</h3><p>${product.pack}</p><span class="price">${product.price}</span></article>`)
    .join("");
};

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    render(button.dataset.category);
  });
});
render();

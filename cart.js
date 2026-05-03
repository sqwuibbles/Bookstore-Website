const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-container");

for(let i = 0; i < cart.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h4");
    const price = document.createElement("h5");
    title.textContent = cart[i].title;
    div.appendChild(title);
    author.textContent = cart[i].author;
    div.appendChild(author);
    price.textContent = cart[i].price;
    div.appendChild(price);
    container.appendChild(div);
}
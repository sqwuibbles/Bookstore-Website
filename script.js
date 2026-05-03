const button = document.getElementsByClassName('add-book-to-cart');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const card = buttons[i].closest(".book-card");
        const item = {
            title: card.getElementsByClassName("book-title")[0].textContent,
            author: card.getElementsByClassName("book-author")[0].textContent,
            price: card.getElementsByClassName("book-price")[0].textContent
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
}

const darkModeButton = document.getElementById("dark-mode");

darkModeButton.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black" && document.body.style.color === "white") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});
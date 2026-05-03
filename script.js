const buttons = document.getElementsByClassName('add-book-to-cart'); // Fixed: named buttons

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const card = buttons[i].closest('.book-card');
        const item = {
            title: card.getElementsByClassName('book-title')[0].textContent,
            author: card.getElementsByClassName('book-author')[0].textContent,
            price: card.getElementsByClassName('book-price')[0].textContent
        };

        // Get existing cart or initialize empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        
        // Save updated cart
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Added to cart:', item.title);
    });
}

// Dark Mode Toggle
const darkModeButton = document.getElementById('dark-mode');
darkModeButton.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});
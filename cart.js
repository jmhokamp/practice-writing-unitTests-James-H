// cart.js

function addItem(cart, item, quantity) {
    if (!item || typeof quantity !== 'number' || quantity <= 0) return cart;
    if (!cart[item]) {
        cart[item] = 0;
    }
    cart[item] += quantity;
    return cart;
}

function removeItem(cart, item) {
    if (cart[item]) {
        delete cart[item];
    }
    return cart;
}

function getTotalItems(cart) {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
}

module.exports = { addItem, removeItem, getTotalItems };
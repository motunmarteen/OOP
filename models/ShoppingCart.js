const ShoppingCartItem = require("./ShoppingCartItem");

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const item = new ShoppingCartItem(product, quantity);
    this.items.push(item);
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCartItems() {
    if (this.items.length === 0) {
      console.log("Cart is empty.");
    } else {
      this.items.forEach((item) => {
        console.log(
          `Product: ${item.product.name}, Quantity: ${
            item.quantity
          }, Total Price: $${item.getTotalPrice().toFixed(2)}`
        );
      });
    }
  }
}

module.exports = ShoppingCart;

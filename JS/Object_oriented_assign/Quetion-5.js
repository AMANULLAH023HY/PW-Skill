
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
  
  function Inventory() {
    this.products = [];
  }
  
  Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
      this.products.push(product);
      console.log(`Product "${product.name}" has been added to the inventory.`);
    } else {
      console.error('Invalid product. Please provide a valid Product object.');
    }
  };
  
  Inventory.prototype.deleteProduct = function(productName) {
    const index = this.products.findIndex(product => product.name === productName);
  
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Product "${productName}" has been deleted from the inventory.`);
    } else {
      console.error(`Product "${productName}" not found in the inventory.`);
    }
  };
  
  
  const inventory = new Inventory();
  
  const product1 = new Product('Shirt', 'Apparel', 20.0, 50);
  const product2 = new Product('Phone', 'Electronics', 499.99, 10);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  console.log('Inventory:', inventory.products);
  
  inventory.deleteProduct('Shirt');
  console.log('Inventory:', inventory.products);
  
  inventory.deleteProduct('Shoes');
  
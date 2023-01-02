// UI class for changing the user interface
class UI {

    // the UI constructor now has a node parameter
    // to know which product in the list we are manipulating
    constructor (node) {
      this.node = node;
      // this is basically our configuration,
      // the part that might have to change when the HTML changes:
      // gathering the selectors for the elements we will be working with
      this.productImageSelector = ".js-product-image";
      this.productNameSelector = ".js-product-name";
      this.productCategorySelector = ".js-product-category";
      this.productDescriptionSelector = ".js-product-description";
      this.productPriceSelector = ".js-product-price";
  
      // using the selectors above, we store the elements in private variables
      this.productImageElement = this.node.querySelector(this.productImageSelector);
      this.productNameElement = this.node.querySelector(this.productNameSelector);
      this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
      this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
      this.productPriceElement = this.node.querySelector(this.productPriceSelector);
    }
  
    // this is the API for our UI objects:
    // methods to change the UI by only changing the
    // content of the stored elements
    setProductImage (src) {
      this.productImageElement.src = src;
    };
    setProductName (name) {
      this.productNameElement.textContent = name;
    };
    setProductCategory (category) {
      this.productCategoryElement.textContent = category;
    };
    setProductDescription (description) {
      this.productDescriptionElement.textContent = description;
    };
    setProductPrice (price) {
      this.productPriceElement.textContent = price;
    };
  
    // we need a new method to append the cloned product elements to the list
    appendTo (listElement) {
      listElement.appendChild(this.node);
    }
  
  };
  
  // Product class for gathering product related info
  class Product {
  
    constructor (productInfo) {
      this.name = productInfo.name;
      this.category = productInfo.category;
      this.description = productInfo.description;
      this.imageSrc = productInfo.imageSrc;
      this.price = productInfo.price;
    }
  
    // API for Product objects for getting product info
    getName () {
      return this.name;
    }
    getCategory () {
      return this.category;
    }
    getDescription () {
      return `${this.name} is ${this.description}.`;
    }
    getImage () {
      return this.imageSrc;
    }
    getPrice () {
      return `€${this.price}`;
    }
  };
  
  
  // set up first product
  const DiscgolfProduct = new Product({
    name: "DisCatcher Target",
    category: " Discgolf",
    description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
    imageSrc: "images/discatcher.jpg",
    price: 399
  });
  
  const productImage = DiscgolfProduct.getImage();
  const productName = DiscgolfProduct.getName();
  const productCategory = DiscgolfProduct.getCategory();
  const productDescription = DiscgolfProduct.getDescription();
  const productPrice = DiscgolfProduct.getPrice();
  
  // set up first product on the UI
  const UITemplate = document.querySelector(".js-product");
  const ShopUI = new UI(UITemplate);
  
  ShopUI.setProductImage(productImage);
  ShopUI.setProductName(productName);
  ShopUI.setProductCategory(productCategory);
  ShopUI.setProductDescription(productDescription);
  ShopUI.setProductPrice(productPrice);
  
  // set up second product
  const DiscgolfProduct2 = new Product({
    name: "Hero SuperAero",
    category: " Discgolf",
    description: "a disc that floats like a butterfly, holds up like a SuperHero",
    imageSrc: "images/dog.jpg",
    price: 14
  });
  
  const productImage2 = DiscgolfProduct2.getImage();
  const productName2 = DiscgolfProduct2.getName();
  const productCategory2 = DiscgolfProduct2.getCategory();
  const productDescription2 = DiscgolfProduct2.getDescription();
  const productPrice2 = DiscgolfProduct2.getPrice();
  
  const UIElement2 = UITemplate.cloneNode(true);
  const ShopUI2 = new UI(UIElement2);
  
  ShopUI2.setProductImage(productImage2);
  ShopUI2.setProductName(productName2);
  ShopUI2.setProductCategory(productCategory2);
  ShopUI2.setProductDescription(productDescription2);
  ShopUI2.setProductPrice(productPrice2);
  
  const ProductListElement = document.querySelector(".js-product-list");
  ShopUI2.appendTo(ProductListElement);
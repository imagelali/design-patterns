// start with an IIFE to keep the global namespace clean
(function(){

    // UI class for changing the user interface
    class ProductView {
      // the UI constructor now has a "templateElement" and a "parentElement" parameter
      // to create a new DOM element based on the template
      // and append it to the given parent
      constructor(templateElement, parentElement) {
        // this is basically our configuration,
        // the part that might have to change when the HTML changes:
        // gathering the selectors for the elements we will be working with
        this.productImageSelector = ".js-product-image";
        this.productNameSelector = ".js-product-name";
        this.productCategorySelector = ".js-product-category";
        this.productDescriptionSelector = ".js-product-description";
        this.productPriceSelector = ".js-product-price";
        this.productButtonSelector = ".js-product-button";
    
        // clone the template to create a new DOM element
        this.node = templateElement.cloneNode(true);
        // and append the new DOM element to the end of the product list
        parentElement.appendChild(this.node);
    
        // using the selectors above, we store the elements in private variables
        this.productImageElement = this.node.querySelector(this.productImageSelector);
        this.productNameElement = this.node.querySelector(this.productNameSelector);
        this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
        this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
        this.productPriceElement = this.node.querySelector(this.productPriceSelector);
        this.productButtonElement = this.node.querySelector(this.productButtonSelector);
    
        // add event listeners
        this.productButtonElement.addEventListener("click", this.handleClick);
      }
    
      handleClick () {
        // "this" will refer to the clicked button here
        const productData = this.dataset;
        PubSub.publish("addToCart", productData);
      }
    
      // this is the API for our UI objects:
      // methods to change the UI by only changing the
      // content of the stored elements
      setProductImage (src) {
        this.productImageElement.src = src;
      }
      setProductName (name) {
        this.productNameElement.textContent = name;
      }
      setProductCategory (category) {
        this.productCategoryElement.textContent = category;
      }
      setProductDescription (description) {
        this.productDescriptionElement.textContent = description;
      }
      setProductPrice (price) {
        this.productPriceElement.textContent = price;
      }
    
      // let's add a method that sets our UI up in one go
      setUp (productInfo) {
        this.productImageElement.src = productInfo.image;
        this.productNameElement.textContent = productInfo.name;
        this.productCategoryElement.textContent = productInfo.category;
        this.productDescriptionElement.textContent = productInfo.description;
        this.productPriceElement.textContent = productInfo.price;
        // data for the event handler
        this.productButtonElement.dataset.name = productInfo.name;
        this.productButtonElement.dataset.price = productInfo.price;
      }
    };
    
    // this way the other JS files can also use this class
    window.ProductView = ProductView;
    
    // Product class for gathering product related info
    class ProductModel {
    
      constructor (productInfo) {
        this.name = productInfo.name;
        this.category = productInfo.category;
        this.description = productInfo.description;
        this.imageSrc = productInfo.imageSrc;
        this.price = productInfo.price;
      }
    
      // API for ProductModel objects for getting product info
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
      // let's add a method that returns all that
      getInfo () {
        return {
          name: this.name,
          category: this.category,
          description: `${this.name} is ${this.description}.`,
          image: this.imageSrc,
          price: `€${this.price}`
        };
      }
    };
    
    // this way the other JS files can also use this class
    window.ProductModel = ProductModel;
    
    })();
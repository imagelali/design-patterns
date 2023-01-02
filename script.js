// start with an IIFE to keep the global namespace clean
(function(){
    class ShopController {
      constructor(productList) {
        this.productList = productList;
        this.UITemplate = document.querySelector(".js-product");
        this.ProductListElement = document.querySelector(".js-product-list");
        // we stored the template in a variable
        // so now we can remove it from the live DOM
        this.UITemplate.remove();
  
        // initialize products
        for (let product of this.productList) {
          this._initProduct(product);
        }
  
        // initialize cart
        this.cartContainer = document.querySelector(".js-cart");
        this.cartUI = new CartView(this.cartContainer);
        this.cart = new CartModel();
      }
  
      _initProduct(productData) {
        const newProduct = new ProductModel(productData);
        const productInfo = newProduct.getInfo();
        const newProductUI = new ProductView(
          this.UITemplate,
          this.ProductListElement
        );
        newProductUI.setUp(productInfo);
      }
    }
  
    // this would most likely come from some database through an API of sorts,
    // but for now, we have all our products in this list:
    const productList = [
      {
        name: "DisCatcher Target",
        category: " Discgolf",
        description:
          "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
        imageSrc: "images/discatcher.jpg",
        price: 399,
      },
      {
        name: "Hero SuperAero",
        category: " Discgolf",
        description:
          "a disc that floats like a butterfly, holds up like a SuperHero",
        imageSrc: "images/dog.jpg",
        price: 14,
      },
    ];
  
    // launch shop initialization by creating a new ShopController instance
    const berryShop = new ShopController(productList);
  })();
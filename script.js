// start with an IIFE to keep the global namespace clean
(function(){

    // Product and ProductUI are stored on window / in global variables,
    // so we can use them here as well
    
    // set up first product
    const DiscgolfProduct = new Product({
      name: "DisCatcher Target",
      category: " Discgolf",
      description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
      imageSrc: "images/discatcher.jpg",
      price: 399
    });
    
    // simplified product info
    const productInfo = DiscgolfProduct.getInfo();
    
    // set up first product on the UI
    const UITemplate = document.querySelector(".js-product");
    const ProductListElement = document.querySelector(".js-product-list");
    const ShopUI = new ProductUI(UITemplate, ProductListElement);
    
    // simplified UI setup - luckily, the object shape is the same as 
    // what getInfo() returned
    ShopUI.setUp(productInfo);
    
    // set up second product
    const DiscgolfProduct2 = new Product({
      name: "Hero SuperAero",
      category: " Discgolf",
      description: "a disc that floats like a butterfly, holds up like a SuperHero",
      imageSrc: "images/dog.jpg",
      price: 14
    });
    
    const productInfo2 = DiscgolfProduct2.getInfo();
    const ShopUI2 = new ProductUI(UITemplate, ProductListElement);
    ShopUI2.setUp(productInfo2);
    
    // we no longer need the template, so we can clean it up now
    UITemplate.remove();
    
    // test out cart
    const cartContainer = document.querySelector(".js-cart");
    const cartUI = new CartUI(cartContainer);
    const cart = new Cart();
    
    cart.addItem({ name: "test item", price: 1 });
    const cartItems = cart.getItems();
    cartUI.updateCart(cartItems);
    
    })();
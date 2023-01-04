//  kezdjük egy IIFE-vel, hogy tisztán tartsuk a globális névteret:
(function(){
    class ShopController {
      constructor(productList) {
        this.productList = productList;
        this.UITemplate = document.querySelector(".js-product");
        this.ProductListElement = document.querySelector(".js-product-list");
        // a sablont egy változóban tároltuk
        // így most eltávolíthatjuk az élő DOM-ból:
        this.UITemplate.remove();
  
        // a termékek inicializálása:
        for (let product of this.productList) {
          this._initProduct(product);
        }
  
        // a kosár inicializálása:
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
  
    // ez valószínűleg valamilyen adatbázisból származik egy API-n keresztül,
    // de egyelőre az összes termékünk szerepel ezen a listán:
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
  
    // elindítja a bolt inicializálását egy új ShopController példány létrehozásával:
    const berryShop = new ShopController(productList);
  })();
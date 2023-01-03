// kezdjük egy IIFE-vel, hogy tisztán tartsuk a globális névteret:
(function () {
    //  UI osztály a felhasználói felület megváltoztatásához:
    class CartView {
      // csak egy kocsink van,
      // így már nem kell sablont klónoznunk és
      // hozzáfűz egy testhez:
      constructor(element) {
        // itt csak a kocsiasztalra van szükségünk
        // sorok hozzáfűzése ehhez,
        // tehát csak egy elemhivatkozás tárolandó:
        this.container = element;
        // feliratkozás az updateCart témára:
        PubSub.subscribe("updateCart", (products) => this.updateCart(products));
      }
  
      // ez egy "privát" metódus, csak más módszerekhez használható
    // ezért a _ :
      _rowTemplate(productData) {
        return `<tr><td>${productData.name}</td><td class="has-text-right">${productData.price}</td></tr>`;
      }
  
      // HTML készítése termékadatok és sorsablon alapján:
      _buildCartHTML(productList) {
        let cartContent = "";
        for (const product of productList) {
          cartContent += this._rowTemplate(product);
        }
        return cartContent;
      }
  
      // ez a kosár UI-objektumaink nyilvános API-ja:
      // metódus a felhasználói felület megváltoztatásához csak a
      // a kosár táblázat tartalma :
      updateCart(products) {
        this.container.innerHTML = this._buildCartHTML(products);
      }
    }
  
    // így a többi JS fájl is használhatja ezt az osztályt:
    window.CartView = CartView;
  
    // Kosár osztály tételek kosárba helyezéséhez:
    class CartModel {
      constructor() {
        this.items = [];

        // iratkozz fel az addToCart témára:
        PubSub.subscribe ( "addToCart" , ( item ) => this . addItem ( item ) ) ;   
      }
  
      //API a kosár objektumhoz: 
      addItem(item) {
        this.items.push(item);
      // frissített cikklista közzététele az updateCart témában
      // amikor a kosár tartalma frissül:
        PubSub.publish("updateCart" , this.getItems());
      }
      getItems() {
        return this.items;
      }
    }
  
    // így a többi JS fájl is használhatja ezt az osztályt:
    window.CartModel = CartModel;
  })();
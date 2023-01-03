// kezdjük egy IIFE-vel, hogy tisztán tartsuk a globális névteret:
(function(){

    //  UI osztály a felhasználói felület megváltoztatásához:
    class ProductView {
      // a felhasználói felület konstruktorának van egy "templateElement" és egy "parentElement" paramétere
      // új DOM elem létrehozásához a sablon alapján
      // és hozzáfűzzük az adott szülőhöz:
      constructor(templateElement, parentElement) {
        //  ez alapvetően a mi konfigurációnk,
        // az a rész, amelyet esetleg módosítani kell a HTML megváltoztatásakor:
        // a kiválasztók összegyűjtése azokhoz az elemekhez, amelyekkel dolgozni fogunk
        this.productImageSelector = ".js-product-image";
        this.productNameSelector = ".js-product-name";
        this.productCategorySelector = ".js-product-category";
        this.productDescriptionSelector = ".js-product-description";
        this.productPriceSelector = ".js-product-price";
        this.productButtonSelector = ".js-product-button";
    
        // klónozzuk a sablont egy új DOM elem létrehozásához:
        this.node = templateElement.cloneNode(true);
        //  és hozzáfűzi az új DOM elemet a terméklista végéhez:
        parentElement.appendChild(this.node);
    
        // a fenti szelektorok segítségével privát változókban tároljuk az elemeket:
        this.productImageElement = this.node.querySelector(this.productImageSelector);
        this.productNameElement = this.node.querySelector(this.productNameSelector);
        this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
        this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
        this.productPriceElement = this.node.querySelector(this.productPriceSelector);
        this.productButtonElement = this.node.querySelector(this.productButtonSelector);
    
        // eseményfigyelők hozzáadása:
        this.productButtonElement.addEventListener("click", this.handleClick);
      }
    
      handleClick () {
        // "ez" az itt kattintott gombra fog utalni:
        const productData = this.dataset;
        PubSub.publish("addToCart", productData);
      }
    
      // ez az API az UI objektumokhoz:
      // módszerek a felhasználói felület megváltoztatására úgy, hogy csak a
      // a tárolt elemek tartalma
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
    
      // adjunk hozzá egy metódust, amely egy mozdulattal beállítja a felhasználói felületünket:
      setUp (productInfo) {
        this.productImageElement.src = productInfo.image;
        this.productNameElement.textContent = productInfo.name;
        this.productCategoryElement.textContent = productInfo.category;
        this.productDescriptionElement.textContent = productInfo.description;
        this.productPriceElement.textContent = productInfo.price;
        // az eseménykezelő adatai:
        this.productButtonElement.dataset.name = productInfo.name;
        this.productButtonElement.dataset.price = productInfo.price;
      }
    };
    
    // ezzel a többi js fájl is használhatja ezt az osztályt:
    window.ProductView = ProductView;
    
    // A Termékosztály, ami összegyűjti a termékekkel kapcsolatos információkat:
    class ProductModel {
    
      constructor (productInfo) {
        this.name = productInfo.name;
        this.category = productInfo.category;
        this.description = productInfo.description;
        this.imageSrc = productInfo.imageSrc;
        this.price = productInfo.price;
      }
    
      // API a ProductModel objektumhoz a termékinformációk lekéréséhez:
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
      // adjunk hozzá egy metódust, ami a fentieket visszaadja:
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
    
    // hogy a többi JS fájl is használhassa ezt az osztályt:
    window.ProductModel = ProductModel;
    
    })();
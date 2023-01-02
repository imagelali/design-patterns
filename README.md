# design-patterns
1./Modulee pattern:
// UI modul a felhasználói felület megváltoztatásához
const  UI  =  ( ( )  =>  {

  // ez alapvetően a mi konfigurációnk,
  // az a rész, amelyet esetleg módosítani kell a HTML megváltoztatásakor:
  // a kiválasztók összegyűjtése azokhoz az elemekhez, amelyekkel dolgozni fogunk
  const  productImageSelector  =  ".js-product-image" ;
  const  productNameSelector  =  ".js-terméknév" ;
  const  productCategorySelector  =  ".js-product-category" ;
  const  productDescriptionSelector  =  ".js-product-description" ;
  const  productPriceSelector  =  ".js-product-price" ;

  // a fenti szelektorok segítségével privát változókban tároljuk az elemeket
  const  productImageElement  =  dokumentum . querySelector ( productImageSelector ) ;
  const  termékNameElement  =  dokumentum . querySelector ( productNameSelector ) ;
  const  productCategoryElement  =  dokumentum . querySelector ( productCategorySelector ) ;
  const  productDescriptionElement  =  dokumentum . querySelector ( productDescriptionSelector ) ;
  const  termékPriceElement  =  dokumentum . querySelector ( productPriceSelector ) ;

  // ez a felhasználói felületi modulunk nyilvános API-ja:
  // módszerek a felhasználói felület megváltoztatására úgy, hogy csak a
  // a magántulajdonban tárolt elemek tartalma
  return  {
    setProductImage : ( src )  =>  {
      productImageElement . src  =  src ;
    } ,
    setProductName : ( név )  =>  {
      productNameElement . textContent  =  név ;
    } ,
    setProductCategory : ( kategória )  =>  {
      productCategoryElement . textContent  =  kategória ;
    } ,
    setProductDescription : ( leírás )  =>  {
      productDescriptionElement . textContent  =  leírás ;
    } ,
    setProductPrice : ( ár )  =>  {
      termékPriceElement . textContent  =  ár ;
    } ,
  } ;
} ) ( ) ;

// Termékmodul a termékkel kapcsolatos információk összegyűjtéséhez
const  Termék  =  ( ( )  =>  {
  const  name  =  "DisCatcher Target" ;
  const  kategória  =  " Discgolf" ;
  const  leírás  =
    "egy láncrács, amely úgy elkapja a gyors és lassú puttonyokat, nehéz és könnyű korongokat, mint senki más" ;
  const  imageSrc  =  "images/discatcher.jpg" ;
  állandó  ár  =  399 ;

  // Nyilvános API a termékhez modul a termékinformációk lekéréséhez
  return  {
    getName : ( )  =>  {
       név visszaadása ;
    } ,
    getCategory : ( )  =>  {
      visszatérési  kategória ;
    } ,
    getDescription : ( )  =>  {
      return  ` ${ név } a következő: ${ description } .` ;
    } ,
    getImage : ( )  =>  {
      return  imageSrc ;
    } ,
    getPrice : ( )  =>  {
      return  `€ ${ ár } ` ;
    }
  }
} ) ( ) ;

const  productImage  =  Termék . getImage ( ) ;
const  productName  =  Termék . getName ( ) ;
const  productCategory  =  Termék . getCategory ( ) ;
const  productDescription  =  Termék . getDescription ( ) ;
const  productPrice  =  Termék . getPrice ( ) ;

UI . setProductImage ( productImage ) ;
UI . setProductName ( terméknév ) ;
UI . setProductCategory ( productCategory ) ;
UI . setProductDescription ( productDescription ) ;
UI . setProductPrice ( productPrice ) ;

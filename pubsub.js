(function(){

    class PubSub {
      constructor () {
        // ide fogjuk összegyüjteni az eseménykezelőket:
        this.topics = {};
      }
  
      // így ellenőrizhetjük, hogy vannak-e már kezelőink az adott témához:
      hasHandler(topicName) {
        return this.topics.hasOwnProperty(topicName);
      }
  
      publish (topicName, data) {
        // ha nincs kezelőnk az adott témához,
        // nincs mit tenni:
        if (!this.hasHandler(topicName)) {
          return;
        } else {
          // ha vannak kezelőink,
          // menjünk át rajtuk és hívjuk meg őket a megadott adatokkal:
          this.topics[topicName].forEach((item) => {
            item(data);
          });
        }
      }
  
      subscribe (topicName, handler) {
        // ha nincsenek kezelőink az adott témához,
        // kezdje el egy lista létrehozásával: 
        if (!this.hasHandler(topicName)) {
          this.topics[topicName] = [];
        }
        // az új kezelő hozzáadása a téma kezelői listájához:
        this.topics[topicName].push(handler);
      }
  
      // egyenlőre nem tudjuk eltávolítani a hallgatókat, 
      // ami hasznos lehet egy általánosabb használati esetben.
    } 
  
    // A script.js így tudja használni ezt az egyetlen PubSub példányt:
    window.PubSub = new PubSub();
  
  })();
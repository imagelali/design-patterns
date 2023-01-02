(function(){

    class PubSub {
      constructor () {
        // this is where we will gather event handlers
        this.topics = {};
      }
  
      // this is how we check if we already have handlers for the given topic
      hasHandler(topicName) {
        return this.topics.hasOwnProperty(topicName);
      }
  
      publish (topicName, data) {
        // if we don't have any handlers for the given topic,
        // there's nothing to do
        if (!this.hasHandler(topicName)) {
          return;
        } else {
          // if we have handlers,
          // let's go through them and call them with the given data
          this.topics[topicName].forEach((item) => {
            item(data);
          });
        }
      }
  
      subscribe (topicName, handler) {
        // if we don't have handlers for the given topic,
        // start by creating a list 
        if (!this.hasHandler(topicName)) {
          this.topics[topicName] = [];
        }
        // add the new handler to the topic's handler list
        this.topics[topicName].push(handler);
      }
  
      // we don't have a way to remove listeners for now, 
      // that could come handy in a more general use case
    } 
  
    // this is how script.js will be able to use this one PubSub instance
    window.PubSub = new PubSub();
  
  })();
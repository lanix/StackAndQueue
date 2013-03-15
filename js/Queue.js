(function(box){ 

    var Queue = function(){

        var that = this === box ? {} : this;
        that.first  = null;

        that.dequeue = function(){
            var val = that.first;
            if(that.first != null){
                that.first = that.first.next;
            }
            else{
                throw "Queue is emtpy"
            }
            return val.content;
        };

        that.enqueue = function(Content) {
           
            var nextElement = that.first;

            if(that.first == null){
                that.first =  { content: Content, next : null };
                return that.first.content;
            }
            else{
                  
                while(nextElement.next != null){    
                    nextElement = nextElement.next;
                }

                nextElement.next =  { content: Content, next : null };
                return nextElement.next.content;
            }
        };

        that.content = function(){

            var result = [];
            var currentElement = that.first;

            while(currentElement){
                result.push(currentElement.content);
                currentElement = currentElement.next;
            }

            return result;
        };

        that.each = function(callBack){
            
            var currentElement = this.first;

            if(currentElement != null){

                if(typeof callBack === "function"){
      
                    while(currentElement){
                        callBack.call(this, currentElement.content);
                        currentElement = currentElement.next;
                    }
                }
                else{
                    throw "Missing CallBack Function";
                }                
            }
            else{
                throw "Stack is empty";
            }
        };

        return that;
    };

    box.Queue = Queue;
})(this);

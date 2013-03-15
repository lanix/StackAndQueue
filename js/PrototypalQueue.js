(function(box){

    var PrototypalQueue = function(){
        return (this === box ? new PrototypalQueue() : this);
    };

    PrototypalQueue.prototype = {
        first: null,
        dequeue: function(){
            var val = this.first;

            if(this.first != null){
                this.first = this.first.next;
            }
            else{
                throw "Queue is empty";
            }

            return val.content;
        },
        enqueue: function(Content){
            var nextElement = this.first;

            if(this.first == null){
                this.first = { content: Content, next : null };
                return this.first.content;
            }
            else{
                while(nextElement.next != null){
                    nextElement = nextElement.next;
                }
                nextElement.next = { content: Content, next : null };
                return nextElement.next.content;
            }
        },
        content: function(){
            var result = [];
            var currentElement = this.first;

            while(currentElement){
                result.push(currentElement.content);
                currentElement = currentElement.next;
            }

            return result;
        },
        each : function(callBack){
            
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
                throw "Queue is empty";
            }
        }
    };

    box.PrototypalQueue = PrototypalQueue;

})(this);
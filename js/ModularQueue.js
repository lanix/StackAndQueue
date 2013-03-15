var ModularQueue = function(){
    
    var first = null;

    return {
        dequeue: function(){
            var val = first;

            if(first != null){
                first = first.next;
            }
            else{
                throw "Queue is empty";
            }

            return val.content;
        },
        enqueue: function(Content){
            var nextElement = first;

            if(first == null){
                first = { content: Content, next : null };
                return first.content;
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
            var currentElement = first;

            while(currentElement){
                result.push(currentElement.content);
                currentElement = currentElement.next;
            }

            return result;
        },
        each : function(callBack){
            
            var currentElement = first;

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
};
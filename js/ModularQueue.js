var ModularQueue = function(){
    var first = null;

    return {
        Dequeue: function(){
            var val = first;

            if(first != null){
                first = first.next;
            }
            else{
                throw "Queue is empty";
            }

            return val.content;
        },
        Enqueue: function(Content){
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
        Content: function(){
            var result = [];
            var currentElement = first;
            var index = 0;

            while(currentElement != null){
                result[index] = currentElement.content;
                currentElement = currentElement.next;
                index += 1;
            }

            return result;
        }
    };
};
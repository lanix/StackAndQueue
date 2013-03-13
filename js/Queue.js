(function(box){ 

    var Queue = function(){

        var that = this === box ? {} : this;
        that.first  = null;

        that.Dequeue = function(){
            var val = that.first;
            if(that.first != null){
                that.first = that.first.next;
            }
            else{
                throw "Queue is emtpy"
            }
            return val.content;
        };

        that.Enqueue = function(Content) {
           
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

        that.Content = function(){

            var result = [];
            var currentElement = that.first;
            var index = 0;

            while(currentElement != null){
                result[index] = currentElement.content;
                currentElement = currentElement.next;
                index+= 1;
            }

            return result;
        };

        return that;
    };

    box.Queue = Queue;
})(this);

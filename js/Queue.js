var Queue = function(){

    this.first  = null;

    this.Dequeue = function(){

        if(this.first != null){
            var val = this.first;

            this.first = this.first.next;
        }
        else{
            throw "Queue is emtpy"
        }
        return val.content;
    };

    this.Enqueue = function(Content) {
        
        if(this.first == null){
            this.first =  { content: Content, next : null };
            return this.first.content;
        }
        else{
            
            var nextElement = this.first;
            
            while(nextElement.next != null){    
                nextElement = nextElement.next;
            }

            nextElement.next =  { content: Content, next : null };
            return nextElement.next.content;
        }       
    };

    this.Content = function(){

        var result = [];
        var currentElement = this.first;
        var index = 0;

        while(currentElement != null){
            result[index] = currentElement.content;
            currentElement = currentElement.next;
            index++;
        }

        return result;
    };
};
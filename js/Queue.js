var Queue = function(){

    this.first  = null;

    this.Dequeue = function(){
        var val = this.first;
        if(this.first != null){
            this.first = this.first.next;
        }
        else{
            throw "Queue is emtpy"
        }
        return val.content;
    };

    this.Enqueue = function(Content) {
       
        var nextElement = this.first;

        if(this.first == null){
            this.first =  { content: Content, next : null };
            return this.first.content;
        }
        else{
              
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
            index+= 1;
        }

        return result;
    };
};
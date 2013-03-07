var Stack = function(){

    this.last  = null;

    this.Pop = function(){
        var val = this.last;
        if(this.last == null){
            throw "Stack is empty";
        }
        else{
            this.last = this.last.previous;
        }

        return val.content;

    };
        
    this.Push = function(Content) {
        
        this.last = { content: Content, previous: this.last };

        return this.last.content;
    };

    this.Content = function(){

        var result = [];
        var currentElement = this.last;
        var index = 0;

        while(currentElement != null){
            result[index] = currentElement.content;
            currentElement = currentElement.previous;
            index++;
        }

        return result;
    };
};


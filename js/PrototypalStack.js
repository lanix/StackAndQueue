(function(box){

    var PrototypalStack = function(){
        return (this === box ? new PrototypalStack() : this);
    };

    PrototypalStack.prototype = {
        last: null,
        push : function(Content){
            this.last = { content: Content, previous:this.last };
            return this.last.content;
        },
        pop : function(){
            var val = this.last;

            if(this.last == null){
                throw "Stack is empty";
            }
            else {
                this.last = this.last.previous;
            }
            
            return val.content;
        },
        content : function(){
            var result = [];
            var currentElement = this.last;

            while(currentElement){
                result.push(currentElement.content);
                currentElement = currentElement.previous;
            }

            return result;
        },
        each : function(callBack){
            
           var currentElement = this.last;
            
            if(currentElement != null){

                if(typeof callBack === "function"){
      
                    while(currentElement){
                        callBack.call(this, currentElement.content);
                        currentElement = currentElement.previous;
                    }
                }
                else{
                    throw "Missing CallBack Function";
                }                
            }
            else{
                throw "Stack is empty";
            }
        }
    };

    box.PrototypalStack = PrototypalStack;

})(this);
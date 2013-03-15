(function(box){ 

    var Stack = function(){

        var that = this === box ? {} : this;
        that.last  = null;

        that.pop = function(){
            var val = that.last;
            if(that.last == null){
                throw "Stack is empty";
            }
            else{
                that.last = that.last.previous;
            }

            return val.content;

        };
            
        that.push = function(Content) {
            
            that.last = { content: Content, previous: that.last };

            return that.last.content;
        };

        that.content = function(){

            var result = [];
            var currentElement = that.last;

            while(currentElement){
                result.push(currentElement.content);
                currentElement = currentElement.previous;
            }

            return result;
        };

        that.each = function(callBack){

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
        };

        return that;
    };

    box.Stack = Stack;
})(this);


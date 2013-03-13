(function(box){ 

    var Stack = function(){

        var that = this === box ? {} : this;
        that.last  = null;

        that.Pop = function(){
            var val = that.last;
            if(that.last == null){
                throw "Stack is empty";
            }
            else{
                that.last = that.last.previous;
            }

            return val.content;

        };
            
        that.Push = function(Content) {
            
            that.last = { content: Content, previous: that.last };

            return that.last.content;
        };

        that.Content = function(){

            var result = [];
            var currentElement = that.last;
            var index = 0;

            while(currentElement != null){
                result[index] = currentElement.content;
                currentElement = currentElement.previous;
                index+= 1;
            }

            return result;
        };

        return that;
    };

    box.Stack = Stack;
})(this);


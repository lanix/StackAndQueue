var ModularStack =  function() {

    var last = null;

    return {

        Push : function(Content){
            last = {content: Content, previous:last };
            return last.content;
        },
        Pop : function(){
            var val = last;
            if(last == null){
                throw "Stack is empty";
            }
            else {
                last = last.previous;
            }

            return val.content;
        },
        Content : function(){
            var result = [];
            var currentElement = last;
            var index = 0

            while(currentElement != null){
                result[index] = currentElement.content;
                currentElement = currentElement.previous;
                index++;
            }

            return result;
        }
    };
};
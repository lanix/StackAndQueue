var ModularStack =  function() {

	var last = null;

	function stackElement(Content, NextElement) {
		return {
			content: Content,
			next : NextElement
		}
	};

	return {

		Push : function(Content){
			last = stackElement(Content, last);
			return last.content;
		},
		Pop : function(){
			var val = last;
			if(last == null){
				throw "Stack is empty";
			}
			else {
				last = last.next;
			}

			return val.content;
		},
		Content : function(){
			var result = [];
			var currentElement = last;
			var index = 0

			while(currentElement != null){
				result[index] = currentElement.content;
				currentElement = currentElement.next;
				index++;
			}

			return result;
		}
	};
};
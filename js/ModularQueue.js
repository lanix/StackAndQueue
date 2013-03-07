var ModularQueue = function(){
	var first = null;

	function queueElement(Content, NextElement){
		return {
			content: Content,
			next: NextElement
		};
	};

	return {
		Dequeue: function(){
			if(first != null){
				var val = first;

				first = first.next;
			}
			else{
				throw "Queue is empty";
			}

			return val.content;
		},
		Enqueue: function(Content){
			if(first == null){
				first = queueElement(Content, null);
				return first.content;
			}
			else{
				var nextElement = first;
				while(nextElement.next != null){
					nextElement = nextElement.next;
				}
				nextElement.next = queueElement(Content, null);
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
				index++;
			}

			return result;
		}
	};
};
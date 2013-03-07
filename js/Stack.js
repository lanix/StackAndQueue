var Stack = function(){

	this.last  = null;

	var stackElement = function(Content, NextElement) {
		this.content = Content;
		this.next = NextElement;
	};

	this.Pop = function(){
		var val = this.last;
		if(this.last == null){
			throw "Stack is empty";
		}
		else{
			this.last = this.last.next;
		}

		return val.content;

	};

	this.Push = function(Content) {
		
		this.last = new stackElement(Content, this.last);

		return this.last.content;
	};

	this.Content = function(){

		var result = [];
		var currentElement = this.last;
		var index = 0;

		while(currentElement != null){
			result[index] = currentElement.content;
			currentElement = currentElement.next;
			index++;
		}

		return result;
	};
};


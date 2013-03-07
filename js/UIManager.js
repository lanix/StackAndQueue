var UIManager = function(){
    
    // Constructor Pattern

    this.callPush = function() {
        var $val = $('#content').val();
        console.log('Stack Item Added: ' + myStack.Push($val));
        $('#list').empty();

        var itemList = myStack.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#list').append('<li>' + itemList[i] + '</li>');
        }

        $('#content').focus().select();
    };

    this.callPop = function(){
        console.log('Stack Item Deleted: ' + myStack.Pop());
        
        $('#list').empty();
        var itemList = myStack.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#list').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callEnqueue = function() {
        var $val = $('#content2').val();
        console.log('Queue Item Added: ' + myQueue.Enqueue($val));
        $('#list2').empty();

        var itemList = myQueue.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#list2').append('<li>' + itemList[i] + '</li>');
        }
        $('#content2').focus().select();
    };

    this.callDequeue = function(){
        console.log('Queue Item Deleted: ' + myQueue.Dequeue());
        
        $('#list2').empty();
        var itemList = myQueue.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#list2').append('<li>' + itemList[i] + '</li>');
        }
    };

    // Modular Pattern

    this.callModulePush = function() {
        var $val = $('#moduleContent').val();
        console.log('Stack Item Added: ' + myModularStack.Push($val));
        $('#moduleList').empty();

        var itemList = myModularStack.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#moduleList').append('<li>' + itemList[i] + '</li>');
        }

        $('#moduleContent').focus().select();
    };

    this.callModulePop = function(){
        console.log('Stack Item Deleted: ' + myModularStack.Pop());
        
        $('#moduleList').empty();
        var itemList = myModularStack.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#moduleList').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callModuleEnqueue = function() {
        var $val = $('#moduleContent2').val();
        console.log('Queue Item Added: ' + myModularQueue.Enqueue($val));
        $('#moduleList2').empty();

        var itemList = myModularQueue.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#moduleList2').append('<li>' + itemList[i] + '</li>');
        }
        $('#moduleContent2').focus().select();
    };

    this.callModuleDequeue = function(){
        console.log('Queue Item Deleted: ' + myModularQueue.Dequeue());
        
        $('#moduleList2').empty();
        var itemList = myModularQueue.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#moduleList2').append('<li>' + itemList[i] + '</li>');
        }
    };
}



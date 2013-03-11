var UIManager = function(){
    
 //   ____                _                   _               ____       _   _            
 //  / ___|___  _ __  ___| |_ _ __ _   _  ___| |_ ___  _ __  |  _ \ __ _| |_| |_ ___ _ __ 
 // | |   / _ \| '_ \/ __| __| '__| | | |/ __| __/ _ \| '__| | |_) / _` | __| __/ _ \ '__|
 // | |__| (_) | | | \__ \ |_| |  | |_| | (__| || (_) | |    |  __/ (_| | |_| ||  __/ |   
 //  \____\___/|_| |_|___/\__|_|   \__,_|\___|\__\___/|_|    |_|   \__,_|\__|\__\___|_| 

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

 //  __  __           _       _              ____       _   _            
 // |  \/  | ___   __| |_   _| | __ _ _ __  |  _ \ __ _| |_| |_ ___ _ __ 
 // | |\/| |/ _ \ / _` | | | | |/ _` | '__| | |_) / _` | __| __/ _ \ '__|
 // | |  | | (_) | (_| | |_| | | (_| | |    |  __/ (_| | |_| ||  __/ |   
 // |_|  |_|\___/ \__,_|\__,_|_|\__,_|_|    |_|   \__,_|\__|\__\___|_

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

 //  ____            _        _                     _   ____       _   _            
 // |  _ \ _ __ ___ | |_ ___ | |_ _   _ _ __   __ _| | |  _ \ __ _| |_| |_ ___ _ __ 
 // | |_) | '__/ _ \| __/ _ \| __| | | | '_ \ / _` | | | |_) / _` | __| __/ _ \ '__|
 // |  __/| | | (_) | || (_) | |_| |_| | |_) | (_| | | |  __/ (_| | |_| ||  __/ |   
 // |_|   |_|  \___/ \__\___/ \__|\__, | .__/ \__,_|_| |_|   \__,_|\__|\__\___|_|   
 //                               |___/|_|    


    this.callPrototypalPush = function() {
        var $val = $('#prototypalContent').val();
        console.log('Stack Item Added: ' + myPrototypalStack.Push($val));
        $('#prototypalList').empty();

        var itemList = myPrototypalStack.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList').append('<li>' + itemList[i] + '</li>');
        }

        $('#prototypalContent').focus().select();
    };

    this.callPrototypalPop = function(){
        console.log('Stack Item Deleted: ' + myPrototypalStack.Pop());
        
        $('#prototypalList').empty();
        var itemList = myPrototypalStack.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callPrototypalEnqueue = function() {
        var $val = $('#prototypalContent2').val();
        console.log('Queue Item Added: ' + myPrototypalQueue.Enqueue($val));
        $('#prototypalList2').empty();

        var itemList = myPrototypalQueue.Content();
        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList2').append('<li>' + itemList[i] + '</li>');
        }
        $('#prototypalContent2').focus().select();
    };

    this.callPrototypalDequeue = function(){
        console.log('Queue Item Deleted: ' + myPrototypalQueue.Dequeue());
        
        $('#prototypalList2').empty();
        var itemList = myPrototypalQueue.Content();

        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList2').append('<li>' + itemList[i] + '</li>');
        }
    };
}



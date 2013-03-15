var UIManager = function(){
    
 //   ____                _                   _               ____       _   _            
 //  / ___|___  _ __  ___| |_ _ __ _   _  ___| |_ ___  _ __  |  _ \ __ _| |_| |_ ___ _ __ 
 // | |   / _ \| '_ \/ __| __| '__| | | |/ __| __/ _ \| '__| | |_) / _` | __| __/ _ \ '__|
 // | |__| (_) | | | \__ \ |_| |  | |_| | (__| || (_) | |    |  __/ (_| | |_| ||  __/ |   
 //  \____\___/|_| |_|___/\__|_|   \__,_|\___|\__\___/|_|    |_|   \__,_|\__|\__\___|_| 

    this.callPush = function() {
        var $val = $('#content').val();
        console.log('Stack Item Added: ' + myStack.push($val));
        $('#list').empty();

        var itemList = myStack.content();
        for(var i = 0; i < itemList.length; i++){
            $('#list').append('<li>' + itemList[i] + '</li>');
        }

        $('#content').focus().select();
    };

    this.callPop = function(){
        console.log('Stack Item Deleted: ' + myStack.pop());
        
        $('#list').empty();
        var itemList = myStack.content();

        for(var i = 0; i < itemList.length; i++){
            $('#list').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callEnqueue = function() {
        var $val = $('#content2').val();
        console.log('Queue Item Added: ' + myQueue.enqueue($val));
        $('#list2').empty();

        var itemList = myQueue.content();
        for(var i = 0; i < itemList.length; i++){
            $('#list2').append('<li>' + itemList[i] + '</li>');
        }
        $('#content2').focus().select();
    };

    this.callDequeue = function(){
        console.log('Queue Item Deleted: ' + myQueue.dequeue());
        
        $('#list2').empty();
        var itemList = myQueue.content();

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
        console.log('Stack Item Added: ' + myModularStack.push($val));
        $('#moduleList').empty();

        var itemList = myModularStack.content();
        for(var i = 0; i < itemList.length; i++){
            $('#moduleList').append('<li>' + itemList[i] + '</li>');
        }

        $('#moduleContent').focus().select();
    };

    this.callModulePop = function(){
        console.log('Stack Item Deleted: ' + myModularStack.pop());
        
        $('#moduleList').empty();
        var itemList = myModularStack.content();

        for(var i = 0; i < itemList.length; i++){
            $('#moduleList').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callModuleEnqueue = function() {
        var $val = $('#moduleContent2').val();
        console.log('Queue Item Added: ' + myModularQueue.enqueue($val));
        $('#moduleList2').empty();

        var itemList = myModularQueue.content();
        for(var i = 0; i < itemList.length; i++){
            $('#moduleList2').append('<li>' + itemList[i] + '</li>');
        }
        $('#moduleContent2').focus().select();
    };

    this.callModuleDequeue = function(){
        console.log('Queue Item Deleted: ' + myModularQueue.dequeue());
        
        $('#moduleList2').empty();
        var itemList = myModularQueue.content();

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
        console.log('Stack Item Added: ' + myPrototypalStack.push($val));
        $('#prototypalList').empty();

        var itemList = myPrototypalStack.content();
        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList').append('<li>' + itemList[i] + '</li>');
        }

        $('#prototypalContent').focus().select();
    };

    this.callPrototypalPop = function(){
        console.log('Stack Item Deleted: ' + myPrototypalStack.pop());
        
        $('#prototypalList').empty();
        var itemList = myPrototypalStack.content();

        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList').append('<li>' + itemList[i] + '</li>');
        }
    };

    this.callPrototypalEnqueue = function() {
        var $val = $('#prototypalContent2').val();
        console.log('Queue Item Added: ' + myPrototypalQueue.enqueue($val));
        $('#prototypalList2').empty();

        var itemList = myPrototypalQueue.content();
        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList2').append('<li>' + itemList[i] + '</li>');
        }
        $('#prototypalContent2').focus().select();
    };

    this.callPrototypalDequeue = function(){
        console.log('Queue Item Deleted: ' + myPrototypalQueue.dequeue());
        
        $('#prototypalList2').empty();
        var itemList = myPrototypalQueue.content();

        for(var i = 0; i < itemList.length; i++){
            $('#prototypalList2').append('<li>' + itemList[i] + '</li>');
        }
    };
}



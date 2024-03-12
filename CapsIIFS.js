(function(str){
    for(var i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str); 
})([ 'hello', 'world' ]);
function converte(nbytes){

    var count = 0;
    var digital = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    if(nbytes <= 1024){
        return nbytes.toFixed(2) +" "+ digital[0];
    }
    
    do{
        nbytes = nbytes/1024
        count ++; 
    }while(nbytes >= 1024);

    return nbytes.toFixed(2) +" "+ digital[count];


}

console.log(converte(2000000000000000000000000));
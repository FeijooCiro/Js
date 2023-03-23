function EsGritar(t){
    let dig = 0;
    dig = t;
    let flag =false;
    
    for(let i=0; i < t.length; i++){
        if(t.charAt(i) == "!"){
            flag= true;
            break;
        }
    }
    return flag;
}
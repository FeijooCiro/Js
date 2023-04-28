function Mediana(arr) {
    let R;
    arr.sort((a,b) => a-b);
    const l = arr.length;
 
    if(l%2 == 0){
        R = arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2;
    } 
    else{
        R = arr.slice((l/2), l/2+1)[0];
    }
    return R;
}
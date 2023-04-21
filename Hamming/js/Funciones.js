function Contador(x){
    let count = 0;
    
    while(x >= 1){
      x = x/10;
      count++;
    }
  
    return count;
  }

function Hamming(a, b){
    let suma = 0;
    let dig = Contador(a);

    a.toString();
    b.toString();   

    for(let i=dig; i>=0; i--){
        if(a.charAt(i) == b.charAt(i)){
            i=i;
        }
        else{
            suma++;
        }

    }

    return suma;
}
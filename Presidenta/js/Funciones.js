function PrimosPresidenta(x){
    let FlagSum1 = false;
    let suma = 0;
    
    for(let i=1; i<x; i++){
        if(x%i == 0){
            suma += 1;
        }
    }
    
    if(suma == 1){
        let FlagSum2 = false;
        let suma2 = 0;
        let a = 0; 
        let b;
        let c;
        
        c = Cont(x);
        
        for(let i=c-1; i>=0; i--){
            a += parseInt(x/10**i);
            b = x-parseInt((x/10**i));
        }

        for(let i=1; i<a; i++){
            if(a%i == 0){
                suma2 += 1;
            }
        }

        if(suma2 == 1){
            FlagSum2 = true;
            return FlagSum2;
        }
        else{
            return FlagSum2;
        }
    }
    else{
        return FlagSum1;
    }


}

function Cont(x){
    let cont = 0;
    
    while(x >= 1){
        x = x/10;
        cont++;
    }
    return cont;
  }
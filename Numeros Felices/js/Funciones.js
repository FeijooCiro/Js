function EsFeliz(n){
    let flag = false;
    let suma = 1;                                                                           //Puesto en uno ya que el valor de los calculos siguientes da un valor menos de correcto
    let cadena, long;

    cadena = n.toString();                                                                  //Cadena del numero
    long = cadena.length;                                                                   //Longitud del numero en base a su cadena 

    while(suma > 1){
        for(let i = 0; i < long; i++){
            let entero = parseInt(cadena[i]);
            let elevado = entero ** 2;         
    
            suma += elevado;
        }
    }

    if(suma == 1){
        flag = true;
    }
    return flag;
}
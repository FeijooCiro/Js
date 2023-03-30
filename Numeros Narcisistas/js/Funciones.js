function EsNarciso(n){
    let flag = false;
    let suma = 0;
    let cadena, long;

    cadena = n.toString();                                                                  //Cadena del numero
    long = cadena.length;                                                                   //Longitud del numero en base a su cadena

    for(let i = 0; i < long; i++){
        let entero = parseInt(cadena[i]), elevado = entero ** long;                         /*Si i es igual a 0 o menor a la longitd, se crea una variable entero que representa cada cifra del numero para elevarla al numero de cifras del mismo. Este mismo es representado con la variable elevado, que es igual a la multiplicación entre la variable entero y la longitud*/
        suma += elevado;
    }

    if(suma == n){
        flag = true;
    }
    return flag;
}
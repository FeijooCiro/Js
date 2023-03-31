function ConvertirFrase(frase, clave){ 
    let letra, respuesta = '';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let cifrado  = alfabeto.slice(0, clave);                          //Crea una copia Cifrado de una parte de Alfabeto en base a Clave empezando por su inicio hasta su final, que no está incluido

    cifrado  += alfabeto.slice(0, alfabeto.length, clave);         //Suma en Cifrado la cantidad de casillas que se van moviendo según la Clave.

    for(let i = 0; i < frase.length; i++){                         
        letra = frase[i].toLowerCase();                             //Devuelve una cadena de texto minúscula de Frase[i]

        if(letra == ' '){
            letra = ' ';
        }
        else{
            letra = cifrado[alfabeto.indexOf(letra)];               //Se intercambia la letra original por la que es indicada.
        }

        respuesta += letra;
    }

    return  respuesta;
}



function getHashTags(x){
    const palabras = x.split(" ");                                      //Separa las palabras.

    palabras.sort((a, b) => b.length - a.length);                       //Ordena las palabras de mayor a menor.

    const Obt3 = palabras.slice(0, 3);                                  //Selecciona las ultimas tres (que son las tres más grandes gracias a slice).

    const hashtags = Obt3.map(palabra => "#" + palabra);                //Inserta un HashTag a cada palabra y guarda todo en una sola variable.

    return hashtags;                                        
}
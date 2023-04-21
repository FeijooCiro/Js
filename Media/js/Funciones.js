function Media(Arreglo) {
    let total = 0, res, numDatos;
    numDatos = Arreglo.length;

    for (let i = 0; i < numDatos; i++){
        total += Arreglo[i];
    }

    res = total/numDatos;
    return res;
}
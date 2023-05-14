function crearVector(n) {
    const vector = new Array(n);

    for (let i = 0; i < vector.length; i++) {
        vector[i] = Math.floor(Math.random() * 10);
    }
    return vector;
}

function sumarVectores(vec1, vec2) {
    if (vec1.length !== vec2.length) {
        throw new Error('Los arreglos deben tener la misma longitud.');
      }

    let resultado = 0;

    for (let i = 0; i < vec1.length; i++) {
        resultado += vec1[i] * vec2[i];
    }
    return resultado;
}
  
  
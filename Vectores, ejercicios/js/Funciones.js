function generarVectorAleatorio(n, max) {
    const vector = [];

    for (let i = 0; i < n; i++) {
        vector.push(Math.floor(Math.random() * max));
    }

    return vector;
}

function calcularPromedio(vector) {
    const sumatoria = vector.reduce((a, b) => a + b, 0);
    return sumatoria / vector.length;
}

function generarVectorB(vector, promedio) {
    return vector.filter((elemento) => elemento > promedio);
}

function contarMultiplosDosTres(vector) {
    let contador = 0;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] % 2 === 0 && vector[i] % 3 === 0) {
            contador++;
        }
    }

    return contador;
}

function calcularSuma(vector) {
    return vector.reduce((a, b) => a + b, 0);
}

function generarVectorC(vector) {
    return vector.map((elemento) => elemento * 2);
}


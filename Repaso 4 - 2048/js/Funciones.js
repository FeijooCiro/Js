function deslizar(fila) {
    let newFila = fila.filter(num => num !== 0);                            // Eliminar los ceros de la fila original
    for (let i = 0; i < newFila.length - 1; i++) {
      if (newFila[i] === newFila[i+1]) {                                    // Si dos números adyacentes son iguales, fusionarlos
        newFila[i] *= 2;
        newFila[i+1] = 0;
      }
    }
    newFila = newFila.filter(num => num !== 0);                             // Eliminar los ceros generados por la fusión
    const ceros = Array(fila.length - newFila.length).fill(0);              // Agregar ceros finales
    newFila = newFila.concat(ceros);
    return newFila;
  }
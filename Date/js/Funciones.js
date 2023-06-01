// Función para calcular la cantidad de días que faltan para año nuevo
function CantidadDiasAnioNuevo(fecha) {
    const anioNuevo = new Date(fecha.getFullYear() + 1, 0, 1); // Obtener la fecha de año nuevo del próximo año
    const unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día

    // Calcular la diferencia en días entre la fecha actual y la fecha de año nuevo
    const diasRestantes = Math.round((anioNuevo - fecha) / unDia);

    return diasRestantes;
}

// Función para calcular la cantidad de días que somos campeones del Mundo de fútbol
function CantidadDiasCatar2022(fecha) {
    // Fecha del último partido del Mundial de fútbol en Catar 2022 (incluye día y mes)
    const fechaCampeonato = new Date(2022, 11, 18); // 18 de diciembre de 2022
    const unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día

    // Calcular la diferencia en días entre la fecha actual y la fecha del campeonato
    const diasTranscurridos = Math.round((fecha - fechaCampeonato) / unDia);

    return diasTranscurridos;
}

// Función para calcular la cantidad de años completos transcurridos entre dos fechas
function CantidadAniosCompletos(fecha1, fecha2) {
    let diferenciaAnios = fecha2.getFullYear() - fecha1.getFullYear();

    // Verificar si la fecha2 aún no ha alcanzado el mes y día de fecha1
    if (fecha2.getMonth() < fecha1.getMonth() || (fecha2.getMonth() === fecha1.getMonth() && fecha2.getDate() < fecha1.getDate())) {
        diferenciaAnios--;
    }

    return diferenciaAnios;
}

// Función para determinar si una fecha es un día laborable (de lunes a viernes)
function EsDiaLaborable(fecha) {
    const diaSemana = fecha.getDay();

    // Si el día de la semana es sábado (6) o domingo (0), no es un día laborable
    return diaSemana !== 6 && diaSemana !== 0;
}


function Multiplos(Valor, Multiplo){
    let Resto;

    Resto = Valor % Multiplo;
    return Resto;
}

function ContarMultiplosDe2(n){
    let a;
    if(Multiplos(n, 2)){
        a = 1;
    }
    return a;
}

function ContarMultiplosDe3(n){
    let a;
    if(Multiplos(n, 3) == 0){
        a = 1;
    }
    return a;
}

function ContarMultiplosDe4(n){
    let a;
    if(Multiplos(n, 4) == 0){
        a = 1;
    }
    return a;
}

function ContarMultiplosDe5(n){
    let a;
    if(Multiplos(n, 5) == 0){
        a = 1;
    }
    return a;
}
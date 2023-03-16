function EsPerfecto(n){
    let divisores = 0;
    let es = false;

    for (let div=1; div<=n/2; div++) {
        if (n % div == 0){
            divisores += div;
        }
    }

    if (divisores == n) {
        es = true;
    }
    return es;
}
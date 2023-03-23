function EsPalindromo(t) {
    let flag = false;
    let TextoNormal = t.toLowerCase().replace();
    let TextoReverso = TextoNormal.split('').reverse().join(''); 
    
    if(TextoNormal === TextoReverso){
        flag = true;
    }
    return flag;
}    
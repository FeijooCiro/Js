function ConvertirNombre(frase){
	const vocales = 'aeiouAEIOU';                       //Define las vocales. Es constante para que su valor no cambie.
	const n = 'N n';                                    //Define las consonantes 'n' y 'N'. Es constante para que su valor no cambie.
    let name = "";                                      //Inicializa la variable que guardará la cadena.

	frase.toString();                                   //Define 'frase' como cadena.
	
	for(let i = 0; i < frase.length; i++){              //Recorre la frase caracter por caracter.    
		if(vocales.includes(frase[i]) == false &&  (n.includes(frase[i]) == false && vocales.includes(frase[i+1]) == false)){           //Incluye las vocales, las consonantes 'n' y las consonantes con vocales a su derecha para asignarles el valor 'false'. 
			name += frase.charAt(i) + 'u';              //Cada consonante que no sea 'n' tendrá una 'u' a su derecha, asignando esto a la variable name.
		}
		else{
			name += frase.charAt(i);                    //En caso contrario, solo se le asignará el valor de frase.charAt(i) a la variable name sin concatenar ninguna 'u'.
		}
	}
	name += '-san';                                     //Al nombre ya puesto y traducido, se le añade un '-san' a la derecha.
    return name;                                        //Retorna name para mostrarlo en el archivo Pag1.html.
}
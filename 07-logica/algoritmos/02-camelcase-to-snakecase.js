// function camelToSnake(text){
//     //1. Recorrer la cadena de caracteres
//     let union;
//     for(let i = 0; i < text.length; i++){
//         let letra = text[i];
//         let newText1;
//         let newText2;
//         //2. Verificar si hay una mayusucula
//         if(letra === letra.toUpperCase() && letra !== letra.toLowerCase()){
//             //3. Obtener la posicion de la primera mayuscula para poner el guin bajo en el indice anterior 
//             newText1 = text.substring(0, i)
//             newText2 = text.substring(i, text.length)
//             union = newText1+"_"+newText2
//         }
//     }
//     console.log(union)
// }

// camelToSnake("holaDakotaComo")

function camelToSnake(text){
    //1. Recorrer la cadena de caracteres
    let newString= '';
    for(let i = 0; i < text.length; i++){
        let letra = text[i];
        //2. Verificar si hay una mayusucula
        if(letra === letra.toLowerCase()){
            newString += letra
        } else if(letra === letra.toUpperCase()){
            newString+= "_"+ letra
        }
    }
    console.log("string final:", newString.toLowerCase())
}

camelToSnake("holaDakotaComoEstas")
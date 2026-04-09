/** 
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);

**/


/*
  1.Un sistema de riego que activa la bomba, luego verifica si el suelo tiene humedad suficiente. Si no la tiene, vuelve a activar. Si la tiene, para. 
*/

let humedad = 100;//Aumenta en 20 cada ciclo limite 100
let estaLloviendo = true;
const limite = 100


const activarRiego = (humedad, estaLloviendo) => {
  if(estaLloviendo === true ) {
    throw new Error('Esta lloviendo');
  }

  if(humedad === limite){
    throw new Error('Esta en 100');
  }
  
  do{
    humedad+=20;
    console.log(`Humedad en ${humedad}`)
    if(humedad === limite) {
      console.log(`El loop ha llegado al límite ${limite}`)
    } 
  
  } while (humedad<limite);
  
}

activarRiego(humedad, estaLloviendo);
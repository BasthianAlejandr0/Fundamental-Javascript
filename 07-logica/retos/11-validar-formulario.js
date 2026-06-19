const formulario = {
    nombre: "Basthian",
    email: "basthian@gmail.com",
    edad: 17,
    terminos: false
}

/**
 * Crear funcion que valide:
    1. Que ningun campo esté vacío usuando every
    2. Que al menos un campo sea string usando some 
 * Retorna { valido: true/false, mensaje: "..." }.
 */

/**
 * 1. Convertir formulario en un arreglo
 * 2. Con every que ningun campo este vacio osea  que sea distinto de null
 * 3. Con some que al menos un campo sea string osea que sea igual a 'string'
 * 4. Finalmente retornoamos valido? para every y mensaje para validar string
*/
const validarFormulario = (form) => {
    const convertirFormulario = Object.values(form)
    let validarCampoVacio = convertirFormulario.every(((e) => e !== null && e !== '' && e !== undefined));
    let validarString = convertirFormulario.some((((e) => typeof e === 'string')));
    if(validarString === true && validarCampoVacio === true){
        return {
            valido: validarString && validarCampoVacio,
            mensaje: 'Formulario valido'
        }
    } else{
        return { valido: false, mensaje: "Alguna condicion no se cumple" }
    }
}


console.log(validarFormulario(formulario))

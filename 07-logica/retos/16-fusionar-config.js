/**
    *Fusione ambos objetos — las propiedades del usuario sobreescriben los defaults
    *Retorne la config final
    *Verifique que el objeto original defaults no fue mutado
 */

const defaults = {
    idioma: "es",
    tema: "light",
    notificaciones: true,
    sesion: { duracion: 30, recordar: false }
}

const usuarioConfig = {
    tema: "dark",
    sesion: { duracion: 60 }
}


function mergeConfig(){
    let sesionMerge = Object.assign({}, defaults.sesion, usuarioConfig.sesion)
    console.log('sesionMerge :', sesionMerge);
    let fusion = Object.assign({}, defaults, usuarioConfig, { sesion: sesionMerge })
    return fusion;
}
console.log('Config:', mergeConfig());

console.log(defaults)

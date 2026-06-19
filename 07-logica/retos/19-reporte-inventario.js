/**
 *  Escribe una función reporteInventario(productos) que:    
        Filtre solo productos con stock disponible
        Separe en dos grupos por categoría usando reduce
        Para cada grupo calcule el precio promedio
        Retorne un objeto { electronica: { productos: [...], promedio: N }, muebles: { productos: [...], promedio: N } }
 */

/**
 * Intuicion:
 *  
 */

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "", stock: 0 },
    { id: 2, nombre: "Teclado", precio: 45, categoria: "", stock: 15 },
    { id: 3, nombre: "Escritorio", precio: 350, categoria: "", stock: 3 },
    { id: 4, nombre: "Monitor", precio: 400, categoria: "", stock: 8 },
    { id: 5, nombre: "Silla", precio: 200, categoria: "", stock: 0 },
    { id: 6, nombre: "Mouse", precio: 25, categoria: "electronica", stock: 20 },
]

const reporteInventario = (obj) => {
    //Paso 1: Filtrar productos por stock disponible
    let filtrarProductos = productos.filter((item) => item.stock !== 0)
    console.log(filtrarProductos)
    console.log("------Segunda parte----------")
    //Paso 2: Separar en 2 grupos
    const separadorPorCategorias = filtrarProductos.reduce((acomulador, producto, indice) =>{
        if(producto.categoria === 'electronica'){
            acomulador.electronica.push(producto)
        } else if(producto.categoria === 'muebles'){
            acomulador.muebles.push(producto)
        }
        return acomulador
        }, { electronica: [], muebles: [] },
    
    ) 
    console.log(separadorPorCategorias)
    const categoriaElectronica = separadorPorCategorias.electronica
    const categoriaMuebles = separadorPorCategorias.muebles
    /*Paso 3: Calcular precio promedio por cada grupo
        1. Tengo que acceder al objeto y luego al precio de (electronica, muebles de -> separadorPorCategorias)
        2. Necesito generar el acomulado mediante una suma de todos los precio de la categoria 
        3. luego divir el esa suma entre el total de elementos de la lista
    */
    const totalSumaElectronica = separadorPorCategorias.electronica.reduce((acumulador, item) => acumulador + item.precio, 0);
    const largoCategoriaElectronica = separadorPorCategorias.electronica.length
    const promedioCategoriaElectronica = largoCategoriaElectronica === 0 ? 0 : totalSumaElectronica/largoCategoriaElectronica 
    console.log('promedioCategoriaElectronica :', promedioCategoriaElectronica);

    const totalSumaMuebles = separadorPorCategorias.muebles.reduce((acomulador, item) => acomulador + item.precio, 0)
    const largoCategoriaMuebles = separadorPorCategorias.muebles.length
    const promedioCategoriaMuebles = largoCategoriaMuebles === 0 ? 0 : totalSumaMuebles/largoCategoriaMuebles
    console.log('promedioCategoriaMuebles :', promedioCategoriaMuebles);

    return {
        electronica: {
            productos: categoriaElectronica,
            promedio: promedioCategoriaElectronica
        },
        muebles: {
            productos: categoriaMuebles,
            promedio: promedioCategoriaMuebles
        }
    }
}
reporteInventario(productos)

const num = 10;

// Ejecuta la logica
try {
  // Early return
  if (num !== 10) {
    throw new Error("No es 10")
  }
  console.log(num);
// Maneja el error del codigo
} catch (err) {
  console.log(err)
} finally {
  console.log("Proceso terminado")
}

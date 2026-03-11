const calculatePrice = (precio, descuento, impuesto, cantidad) => {
  //1. Validar que sea number
  const p = Number(precio);
  const c = Number(cantidad);
  const d = Number(descuento);
  const i = Number(impuesto);
  if ([p, d, c, i].some(isNaN)) {
    throw new Error("Parametros incorrectos");
  }

  let total = (p - d + i) * c;
  return total;
};

calculatePrice("19", 10, 0.16, "3");

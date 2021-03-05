//obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcularMarca(modelo) {
  let incremento;

  switch (modelo) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function obtenerPlan(plan) {
  return (plan === 'Básico') ? 1.2 : 1.5;
}

//primera letra mayuscula
export function primerMayuscula (texto){
  return texto.charAt(0).toUpperCase()+texto.slice(1); //el chartAt(0) indica que en la posicion cero lo hace mayuscula
}

/* Simulador maquina de helados, esta maquina de helado realiza helados de hasta 3 sabores
se pueden elegir entre 5 sabores y al final da el precio a pagar por el usuario*/


console.log("Bienvenido a la heladeria Tropicana")
// Se declaran las variables globales y se pide la cantidad de sabores que va a traer el helado
let cantidadSabores =parseInt(prompt("Ingrese la cantidad de sabores del helado, recuerde que son desde 1 a 3"))
let contador = 0
let sabores
// se declaran las constantes
const IVA = 0.19
const valorSabor = 2000
// Se hace la funcion que me pida el sabor del helado, este lo transforma de numero a string para visualizarlo en la consola
function numASabor (){
   sabores = parseInt((prompt("Ingrese el sabor "+ contador + "\n 1. Chocolate \n 2. Vainilla \n 3. Mora \n 4. Ron con pasas \n 5. Fresa ")))
  
   switch(sabores){
      case 1 :
          sabores='Chocolate';
          break
      case 2 :
         sabores='Vainilla';
          break
      case 3 :
         sabores='Mora';
          break
      case 4 :
         sabores='Ron con Pasas';
           break
      case 5 :
         sabores='Fresa';
              break      
      default:
          alert("No eligió nada")
          break
  
  }
  return sabores
}
// funciones flecha las cuales se utilizaran para calcular el precio y el IVA para el calculo final
const subtotal = (cantidad, precio) => cantidad * precio
const valoriva = (subtotal,IVA) => subtotal * IVA
const precioTotal = (subtotal, valoriva) => subtotal + valoriva
const mostrarPrecio = (precio) => alert("El valor a pagar por el helado es $ " + precio)
const mostrarConsola = (subtotal,IVA) => console.log("Subtotal $ " + subtotal + " valor IVA $" + IVA )

// se realiza una validación que el numero ingresado por el usuario sea entre 1 y 3 de lo contrario no se puede realizar
if(cantidadSabores<=3 && cantidadSabores>=1){
   for (let index=1; index <= cantidadSabores; index ++){
   contador++  
   numASabor()
   console.log("Su sabor "+contador+" elegido fue "+sabores)
   }
// se calculan los valores para dar el precio final del helado
let precioCantidad= subtotal(cantidadSabores,valorSabor)
let valorImpuesto = valoriva(precioCantidad,IVA)
let precioFinal = precioTotal(precioCantidad,valorImpuesto)
mostrarConsola(precioCantidad,valorImpuesto)
mostrarPrecio(precioFinal)
}else{
// en caso de elegir un numero menor a 1 o mayor a 3 sale este alert
alert("Recuerde que debe elegir la cantidad entre 1 a 3")
}

/* 1. ¿Cuántos snacks vas a comer por el resto de tu vida?

Mostrá en un alerta cuántos snacks necesitarás para que te alcancen hasta tu edad máxima.

   1- Almacená tu edad en una Variable.
   2- Guardá tu edad máxima en otra Variable.
   3- Declará una Variable con el nombre de tu snack favorito.
   4- Estimá cuántos snacks comerás por día y guardalo como un número en una Variable.
   5- Calculá cuántos snacks te quedan por comer en el resto de tu vida.
   6- Mostrá el resultado en un alert: "Necesitarás NN snacks para que te alcancen hasta los XX años."
   7- Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.
 */

   let miEdad = 22;
   let edadMaxima = 90;
   let papasFritas;
   let papasFritasDiarias = 15;
   let precio = 50;
   
   let añosRestantes = edadMaxima - miEdad;
   let snacksRestantes = añosRestantes * 365 * papasFritasDiarias;

   alert("Necesitarás " + snacksRestantes + " snacks para que te alcancen hasta los " + edadMaxima + " años." )

   let gastosTotales = snacksRestantes * precio;

   alert("El gato total sería de " + gastosTotales + " pesos.")
   

/* 2. Presupuestando las vacaciones

Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida. Teniendo en cuenta el total de días que vas a estar de viaje deberás mostrar la información al usario usando un alert, similar a : "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".

   1- Almacená en una Variable la cantidad de días que vas a estar de viaje.
   2- Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
   3- Declará la Variable comida.
   4- Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
   5- Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
   6- Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".
 */

   let diasVacaciones = 5;
   let presupuesto = 35000;
   let comidas;
   comidas = 15;

   let gastoPorComida = presupuesto / comidas;

   alert("Podés gastar $" + parseInt(gastoPorComida) + " en cada comida para que te alcance los " + diasVacaciones + " días de viaje.");
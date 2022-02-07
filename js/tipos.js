// Tipos en TypeScript
// Sintaxis de declaración en variables o constantes
// let identificador: tipo;
// Tipos primitivos
var mensaje; // Establece un tipado fuerte
// mensaje = 12; Devuelve error
var resultado; // Ya existen en TS los bigint pero habría que compilar a ES2020
resultado = 12.45;
var mayorEdad;
mayorEdad = true;
// tipos null o undefined (poco usado)
// Inferencia de tipos JavaScript => TypeScript
var puntuacion = 12; // Obtiene el tipo por inferencia JS pero al ser TS el tipado pasa a ser fuerte
// puntuacion = '14'; Error
// Tipos complejos
// Tipo any
var id;
id = 123;
id = 'A157657';
// Arrays
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>
var frutas;
frutas = ['peras', 'naranjas', 'manzanas'];
var puntuaciones;
puntuaciones = [2, 4, 5.6];
// Tipado de funciones
function suma(a, b) {
    return 'El resultado es ' + a + b;
}
function getMensaje(mensaje) {
    console.log('Nuevo mensaje ' + mensaje);
}
// getMensaje(12); Error
// Parámetros opcionales
function multiplicacion(a, b, mensaje) {
    return mensaje ? mensaje + a * b : 'El resultado es ' + a * b;
}
// Tipos genéricos (definición en tiempo de invocación)
function getResultado(valor) {
    return 'El resultado es ' + valor;
}
var resultado1 = getResultado('9,8');
var resultado2 = getResultado(3.4);
var sku;
sku = 1234;
sku = 'A1572';
var perro1;
perro1 = "Mastín";
// perro1 = 'Chow Chow'; Error

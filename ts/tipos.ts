// Tipos en TypeScript

// Sintaxis de declaración en variables o constantes

// let identificador: tipo;

// Tipos primitivos

let mensaje: string; // Establece un tipado fuerte
// mensaje = 12; Devuelve error

let resultado: number; // Ya existen en TS los bigint pero habría que compilar a ES2020

resultado = 12.45;

let mayorEdad: boolean;
mayorEdad = true;

// tipos null o undefined (poco usado)

// Inferencia de tipos JavaScript => TypeScript

let puntuacion = 12; // Obtiene el tipo por inferencia JS pero al ser TS el tipado pasa a ser fuerte
// puntuacion = '14'; Error

// Tipos complejos

// Tipo any

let id: any;

id = 123;
id = 'A157657';

// Arrays
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>

let frutas: string[];
frutas = ['peras','naranjas','manzanas'];

let puntuaciones: Array<number>;
puntuaciones = [2,4,5.6];

// Tipado de funciones

function suma(a: number, b: number): string {
    return 'El resultado es ' + a + b;
}

function getMensaje(mensaje: string): void {
    console.log('Nuevo mensaje ' + mensaje);
}

// getMensaje(12); Error

// Parámetros opcionales

function multiplicacion(a: number, b: number, mensaje?: string): string {
    return mensaje ? mensaje + a * b : 'El resultado es ' + a * b;
}

// Tipos genéricos (definición en tiempo de invocación)

function getResultado<T> (valor: T): string {
    return 'El resultado es ' + valor;
}

const resultado1 = getResultado<string>('9,8');
const resultado2 = getResultado<number>(3.4);

// Tipos de unión

// type identificador = tipo1 | tipo2 | ...

type _id = string | number;

let sku: _id;

sku = 1234;
sku = 'A1572';

// Tipos de unión complejos

// type identificador = valor1 | valor2 | ...

type razasPerroAceptadas = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let perro1: razasPerroAceptadas;
perro1 = "Mastín";
// perro1 = 'Chow Chow'; Error
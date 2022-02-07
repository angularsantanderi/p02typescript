// Clases en TypeScript

class Jugador {
    nombre: string; // Si no se define el modificador es public
    apellidos: string;
    private goles: number;

    constructor(nombreIn: string, apellidosIn: string) {
        this.nombre = nombreIn;
        this.apellidos = apellidosIn;
        this.goles = 0;
    }

    getGoles(): number {
        return this.goles;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

}

let jugador1 = new Jugador('Lionel','Messi');
console.log(jugador1.nombre);
// console.log(jugador1.goles); Error

let jugadores: Array<Jugador>;

jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo', goles: 0} Error al no ser de la clase Jugador
]

// Clases con constructor breve (no es necesario declarar las propiedades)

class Player {
    // Crea las propiedades a partir de los parámetros declarados en el constructor
    // Hay que declararlos con el modificador
    constructor(public name: string, public surname: string, private goals: number) {
        // no es necesario hacer ninguna asignación
    }

    getGoals(): number {
        return this.goals;
    }

    setGoals(goals: number): void {
        this.goals = goals;
    }

}

// Interfaces (como tipado estructural)

interface ButtonState {
    hidden: boolean;
    disabled: boolean;
    waiting: boolean;
    backgroundColor?: string; // Propiedades opcionales
}

let sendButtonState: ButtonState = {
    hidden: false,
    disabled: true,
    waiting: false,
    // backgroundColor: 'crimson'
}

// Interfaces (en implementación en clases)

interface DatosMaestros {
    razonSocial: string;
    cif: string;

    getCif(): string; // Para métodos solo define la cabecera
}

class Proveedor implements DatosMaestros {
    razonSocial: string;
    cif: string;
    constructor(){}
    getCif(): string {
        return this.cif;
    }
}

// Herencia

class Employee {
    name: string;
    protected age: number; // Accesible desde cualquier clase que herede de Employee
    private mobileNumber: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // get y set

}

class Manager extends Employee {

    role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }

    // get y set

}

let manager1 = new Manager('Juan', 40, 'ventas');

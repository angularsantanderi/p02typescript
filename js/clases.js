var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clases en TypeScript
var Jugador = /** @class */ (function () {
    function Jugador(nombreIn, apellidosIn) {
        this.nombre = nombreIn;
        this.apellidos = apellidosIn;
        this.goles = 0;
    }
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Lionel', 'Messi');
console.log(jugador1.nombre);
// console.log(jugador1.goles); Error
var jugadores;
jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo', goles: 0} Error al no ser de la clase Jugador
];
// Clases con constructor breve (no es necesario declarar las propiedades)
var Player = /** @class */ (function () {
    // Crea las propiedades a partir de los parámetros declarados en el constructor
    // Hay que declararlos con el modificador
    function Player(name, surname, goals) {
        this.name = name;
        this.surname = surname;
        this.goals = goals;
        // no es necesario hacer ninguna asignación
    }
    Player.prototype.getGoals = function () {
        return this.goals;
    };
    Player.prototype.setGoals = function (goals) {
        this.goals = goals;
    };
    return Player;
}());
var sendButtonState = {
    hidden: false,
    disabled: true,
    waiting: false
};
var Proveedor = /** @class */ (function () {
    function Proveedor() {
    }
    Proveedor.prototype.getCif = function () {
        return this.cif;
    };
    return Proveedor;
}());
// Herencia
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, role) {
        var _this = _super.call(this, name, age) || this;
        _this.role = role;
        return _this;
    }
    return Manager;
}(Employee));
var manager1 = new Manager('Juan', 40, 'ventas');

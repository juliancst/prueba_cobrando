const process = require("process");
const operaciones = require("./cal_modules");

let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
let operacion = process.argv[2];

switch (operacion) {
    case "suma":
        operaciones.suma(num1, num2);
        break;
    case "resta":
        operaciones.resta(num1, num2);
        break;
    case "multiplicacion":
        operaciones.multiplicacion(num1, num2);
        break;
    case "division":
        operaciones.division(num1, num2);
        break;
    default:
        console.log("Porfavor indica que operación deseas realizar ya sea suma, resta, multiplicacion o division");
}
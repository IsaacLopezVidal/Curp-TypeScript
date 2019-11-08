"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var Curp = /** @class */ (function () {
    function Curp() {
    }
    Curp.prototype.getNombre = function () {
        return this.nombre;
    };
    Curp.prototype.setNombre = function (nombre) {
        this.nombre = nombre.trim().toUpperCase();
    };
    Curp.prototype.getApellidoPaterno = function () {
        return this.ApellidoPaterno;
    };
    Curp.prototype.setApellidoPaterno = function (apellidoPaterno) {
        this.ApellidoPaterno = apellidoPaterno.trim().toUpperCase();
    };
    Curp.prototype.getApellidoMaterno = function () {
        return this.ApellidoMaterno;
    };
    Curp.prototype.setApellidoMaterno = function (apellidoMaterno) {
        this.ApellidoMaterno = apellidoMaterno.trim().toUpperCase();
    };
    Curp.prototype.getDia = function () {
        return this.Dia;
    };
    Curp.prototype.setDia = function (dia) {
        this.Dia = dia;
    };
    Curp.prototype.getMes = function () {
        return this.Mes;
    };
    Curp.prototype.setMes = function (mes) {
        this.Mes = mes;
    };
    Curp.prototype.getAnio = function () {
        return this.Anio;
    };
    Curp.prototype.setAnio = function (anio) {
        this.Anio = anio;
    };
    Curp.prototype.getSexo = function () {
        return this.Sexo;
    };
    Curp.prototype.setSexo = function (sexo) {
        this.Sexo = sexo.trim().toUpperCase();
        if (this.Sexo == "HOMBRE" || this.Sexo == "MASCULINO")
            this.Sexo = "H";
        if (this.Sexo == "MUJER" || this.Sexo == "FEMENINO")
            this.Sexo = "M";
    };
    Curp.prototype.getCD = function () {
        return this.CD;
    };
    Curp.prototype.setCD = function (cD) {
        this.CD = cD.trim().toUpperCase();
    };
    Curp.prototype.getCurp = function () {
        return this.Curp;
    };
    Curp.prototype.setCurp = function (curp) {
        this.Curp = curp;
    };
    Curp.prototype.GeneraCurp = function () {
        var dat;
        var nomAux = this.CD.split(" ");
        var nameAux = this.nombre.split(" ");
        var letraAux;
        dat = this.ApellidoPaterno.substring(0, 1);
        dat += this.ApellidoPaterno.substr(this.validaVocal(this.ApellidoPaterno), 1);
        dat += this.ApellidoMaterno.substr(0, 1);
        if (nameAux.length > 1) {
            if (this.validaExcepcioVocal(nameAux[0])) {
                dat += nameAux[1].substr(0, 1);
            }
            else {
                dat += nameAux[0].substr(0, 1);
            }
        }
        else {
            dat += this.nombre.substr(0, 1);
        }
        dat += this.Anio.toString().substr(this.Anio.toString().length - 2, 2);
        dat += this.Mes;
        dat += this.Dia;
        dat += this.Sexo;
        dat += this.CD.substr(0, 1);
        if (nomAux.length == 1) {
            dat += this.CD.substr(this.validaConsonantes(this.CD, false), 1);
        }
        else {
            dat += nomAux[nomAux.length - 1].substr(0, 1);
        }
        letraAux = this.ApellidoPaterno.substr(1, this.ApellidoPaterno.length - 1);
        dat += letraAux.substr(this.validaConsonantes(letraAux, true), 1);
        letraAux = this.ApellidoMaterno.substr(1, this.ApellidoMaterno.length - 1);
        dat += letraAux.substr(this.validaConsonantes(letraAux, true), 1);
        letraAux = this.nombre.substr(1, this.nombre.length - 1);
        dat += letraAux.substr(this.validaConsonantes(letraAux, true), 1);
        dat += Math.floor(Math.random() * 9) + 1;
        dat += Math.floor(Math.random() * 9) + 1;
        return dat;
    };
    Curp.prototype.validaConsonantes = function (cadena, primera) {
        var i;
        if (primera) {
            for (i = 0; i < cadena.length; i++) {
                if (cadena.charAt(i) != "A" && cadena.charAt(i) != "E" && cadena.charAt(i) != "I" && cadena.charAt(i) != "O" && cadena.charAt(i) != "U") {
                    return i;
                }
            }
        }
        else {
            for (i = cadena.length - 1; i >= 0; i--) {
                if (cadena.charAt(i) != "A" && cadena.charAt(i) != "E" && cadena.charAt(i) != "I" && cadena.charAt(i) != "O" && cadena.charAt(i) != "U") {
                    return i;
                }
            }
        }
    };
    Curp.prototype.validaVocal = function (cadena) {
        var i;
        for (i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i) == "A" || cadena.charAt(i) == "E" || cadena.charAt(i) == "I" || cadena.charAt(i) == "O" || cadena.charAt(i) == "U") {
                return i;
            }
        }
    };
    Curp.prototype.validaExcepcioVocal = function (nombre) {
        if (nombre.search(/MARIA/gi) == 0) {
            return true;
        }
        if (nombre.search(/MARIA/gi) == 0) {
            return true;
        }
        if (nombre.search(/MA./gi) == 0) {
            return true;
        }
        if (nombre.search(/MA/gi) == 0) {
            return true;
        }
        if (nombre.search(/JOSE/gi) == 0) {
            return true;
        }
        if (nombre.search(/J/gi) == 0) {
            return true;
        }
        if (nombre.search(/J./gi) == 0) {
            return true;
        }
        return false;
    };
    return Curp;
}());
var op;
var datos;
var fechaDMY;
var ops;
try {
    do {
        console.clear();
        datos = new Curp();
        datos.setNombre(readline_sync_1.question("Ingresa tu nombre:"));
        datos.setApellidoPaterno(readline_sync_1.question("Ingresa tu Apellido Paterno:"));
        datos.setApellidoMaterno(readline_sync_1.question("Ingresa tu Apellido Materno:"));
        datos.setSexo(readline_sync_1.question("Ingresa su sexo (H=Hombre|M=Mujer):"));
        fechaDMY = readline_sync_1.question("Ingresa tu fecha de nacimiento (DD/MM/YYYY):");
        var fecha = fechaDMY.split("/");
        datos.setDia(fecha[0]);
        datos.setMes(fecha[1]);
        datos.setAnio(Number(fecha[2]));
        datos.setCD(readline_sync_1.question("Ingresa lugar de naciemiento:"));
        console.log(datos.GeneraCurp());
        ops = readline_sync_1.question("Desea generar otro CURP (s/n)");
    } while (ops != "n");
}
catch (e) {
    e.printStackTrace();
}

"use strict";
//Importando apenas algumas funções
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importando tudo do modulo Matematica
//import * as Matematica from './Matematica';
//import { somar, subtrair } from './Matematica';
const Matematica_1 = __importDefault(require("./Matematica"));
let n1 = 10;
let n2 = 2;
//Matematica.somar()
console.log(`SOMA: ${Matematica_1.default.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica_1.default.subtrair(n1, n2)} `);
//console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)} `);

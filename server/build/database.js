"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const db = mysql2_1.default.createConnection({
    host: 'tecnoceramic.cbyoy8ww6wlm.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'Linux2024!',
    database: 'tecnoceramic',
    port: 3306
});
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});
exports.default = db;

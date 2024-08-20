"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database")); // Asegúrate de que la ruta sea correcta
const router = (0, express_1.Router)();
// Registrar usuario en la base de datos
const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    // Validar los datos recibidos
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    // Consulta SQL para insertar un nuevo usuario
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    database_1.default.query(query, [name, email, password], (err, results) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
};
// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);
exports.default = router;

import { Router, Request, Response } from 'express';
import db from '../database';  // Asegúrate de que la ruta sea correcta

const router = Router();

// Registrar usuario en la base de datos
const registerUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // Validar los datos recibidos
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Consulta SQL para insertar un nuevo usuario
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    db.query(query, [name, email, password], (err, results) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
};

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

export default router;

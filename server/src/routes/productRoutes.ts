import { Router } from 'express';
import db from '../database';
import { ResultSetHeader } from 'mysql2';

const router = Router();

// Ruta para obtener todos los productos
router.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    res.json(results);
  });
});

// Ruta para registrar un nuevo producto
router.post('/products', (req, res) => {
  const { description, amount } = req.body;
  if (!description || amount === undefined) {
    return res.status(400).json({ message: 'Descripción y cantidad son requeridos' });
  }
  const query = 'INSERT INTO products (description, amount) VALUES (?, ?)';
  db.query(query, [description, amount], (err, result: ResultSetHeader) => {
    if (err) {
      console.error('Error al insertar el producto:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    res.status(201).json({ message: 'Producto registrado con éxito', id: result.insertId });
  });
});

// Ruta para eliminar un producto por id
router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, result: ResultSetHeader) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado con éxito' });
  });
});

router.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  if (!description || amount === undefined) {
    return res.status(400).json({ message: 'Descripción y cantidad son requeridos' });
  }
  const query = 'UPDATE products SET description = ?, amount = ? WHERE id = ?';
  db.query(query, [description, amount, id], (err, result: ResultSetHeader) => {
    if (err) {
      console.error('Error al actualizar el producto:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto actualizado con éxito' });
  });
});





export default router;

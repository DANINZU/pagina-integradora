import express, { Application } from 'express';  
import cors from 'cors'; 
import mysql from 'mysql2';
import productsRoutes from './routes/productRoutes'; // Ruta a tu archivo de rutas

const app: Application = express();
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Usar las rutas para productos
app.use('/api', productsRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

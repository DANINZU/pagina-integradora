import mysql from 'mysql2';

const db = mysql.createConnection({
    host:'tecnoceramic.cbyoy8ww6wlm.us-east-2.rds.amazonaws.com',
    user:'root',
    password:'Linux2024!',
    database:'tecnoceramic',
    port:3306
});

db.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos:',err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

export default db; 
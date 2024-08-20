import mysql from 'mysql2';

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tecnoceramic'
});

db.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos:',err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

export default db; 
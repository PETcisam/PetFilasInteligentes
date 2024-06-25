import bcrypt from 'bcrypt';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Henr84989",
  database: "petcrud",
});
//node createAdmin.js executar esse script para criar o adm_maximo
const password = 'adminmaximo123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  const insertAdmin = "INSERT INTO usuarios (nome, email, password, cpf, role) VALUES (?, ?, ?, ?, ?)";
  const values = ['Admin Maximo', 'adminmaximo@example.com', hashedPassword, '00000000000', 'ADM_MAXIMO'];

  db.query(insertAdmin, values, (err, result) => {
    if (err) {
      console.error('Error inserting admin:', err);
    } else {
      console.log('Admin Maximo created successfully:', result);
    }
    db.end();
  });
});

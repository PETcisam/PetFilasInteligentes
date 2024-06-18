// Controlador para operações de administradores.
export const getAllUsers = (req, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(data);
  });
};

export const createUser = (req, res) => {
  const { nome, email, password, cpf, role } = req.body;
  const values = [nome, email, password, cpf, role];

  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`, `role`) VALUES (?)";

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'User created successfully', data });
  });
};

// Similarmente, criar os métodos updateUser e deleteUser

import express from 'express';
import sequelize from './database';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post('/users', createUser);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Sync the database
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
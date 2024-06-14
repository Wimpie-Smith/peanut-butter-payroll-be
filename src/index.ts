import express, { Application } from 'express';
import employeeRoutes from './routes/payrollProfileConfig';
import sequelize from './config/datebaseConfig';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('Unable to connect to the database:', error);
});

export default app;

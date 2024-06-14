import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

interface IDatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: Dialect;
  }
  
  const databaseConfig: IDatabaseConfig = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'mydatabase',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql'
  };

const sequelize = new Sequelize(
    databaseConfig.database, 
    databaseConfig.username, 
    databaseConfig.password,
    {
        host: databaseConfig.host,
        dialect: databaseConfig.dialect,
    });

export default sequelize;
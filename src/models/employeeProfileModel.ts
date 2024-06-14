import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/datebaseConfig';

class EmployeeProfile extends Model {
  public employeeNumber!: number;
  public firstName!: string;
  public lastName!: string;
  public salutation!: string;
  public gender!: string;
  public grossSalary!: number;
  public profileColour!: string;
}

EmployeeProfile.init({
  employeeNumber: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salutation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grossSalary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileColour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'employees',
});

export default EmployeeProfile;

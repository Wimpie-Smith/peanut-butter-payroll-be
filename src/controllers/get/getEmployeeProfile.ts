import { Request, Response } from 'express';
import EmployeeProfile from '../../models/employeeProfileModel';

export const getEmployeeProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const employees = await EmployeeProfile.findAll();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving employee profiles', error });
    }
  };
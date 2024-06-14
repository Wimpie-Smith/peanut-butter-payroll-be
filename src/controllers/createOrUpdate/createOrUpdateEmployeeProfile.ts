import { Request, Response } from 'express';
import EmployeeProfile from '../../models/employeeProfileModel';

export const createOrUpdateProfile = async (req: Request, res: Response): Promise<void> => {
    const { employeeNumber, firstName, lastName, salutation, gender, grossSalary, profileColour } = req.body;
  
    try {
      let employee = await EmployeeProfile.findByPk(employeeNumber);
  
      if (employee) {
        await employee.update({ firstName, lastName, salutation, gender, grossSalary, profileColour });
        res.status(200).json({ message: 'Profile updated successfully' });
      } else {
        employee = await EmployeeProfile.create({ employeeNumber, firstName, lastName, salutation, gender, grossSalary, profileColour });
        res.status(201).json({ message: 'Profile created successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error creating or updating profile', error });
    }
  };

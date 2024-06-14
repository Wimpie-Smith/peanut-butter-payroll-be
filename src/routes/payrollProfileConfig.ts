import { Router } from 'express';
import {createOrUpdateProfile } from '../controllers/createOrUpdate/createOrUpdateEmployeeProfile';
import { getEmployeeProfile } from '../controllers/get/getEmployeeProfile';

const router = Router();

router.get('/getEmployeeProfile', getEmployeeProfile);
router.post('/createOrUpdateProfile', createOrUpdateProfile);

export default router;

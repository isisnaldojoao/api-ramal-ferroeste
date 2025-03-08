import { Router } from 'express';
import { getExcelData } from '../controllers/excelController';

const router = Router();

router.get('/excel', getExcelData);

export default router;

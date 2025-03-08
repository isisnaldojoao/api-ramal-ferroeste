import { Request, Response } from 'express';
import { readExcelFile } from '../services/excelService';

export const getExcelData = (req: Request, res: Response) => {
    try {
        const filePath = './lista-ramais.xlsx'; // Você pode tornar isso dinâmico
        const jsonData = readExcelFile(filePath);
        res.json(jsonData);
    } catch (error) {
        res.status(500).json({ error });
    }
};

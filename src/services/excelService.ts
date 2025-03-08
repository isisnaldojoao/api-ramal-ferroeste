import * as reader from 'xlsx';

export const readExcelFile = (filePath: string) => {
    try {
        const file: reader.WorkBook = reader.readFile(filePath);
        const sheets: string[] = file.SheetNames;
        const result: Record<string, any[]> = {};

        sheets.forEach((sheetName) => {
            const sheet = file.Sheets[sheetName];
            if (sheet) {
                result[sheetName] = reader.utils.sheet_to_json(sheet);
            }
        });

        return result;
    } catch (error) {
        throw new Error(`Erro ao ler o arquivo Excel: ${error}`);
    }
};

import * as reader from 'xlsx';

const file: reader.WorkBook = reader.readFile('./planilha-exemplo.xlsx');
const sheets: string[] = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
    const sheetName: string = sheets[i];
    const sheet = file.Sheets[sheetName];

    if (!sheet) continue; // Evita erros caso a planilha seja inválida

    const data: any[] = reader.utils.sheet_to_json(sheet);

    data.forEach((res: any) => {
        console.log(res);
    });
}

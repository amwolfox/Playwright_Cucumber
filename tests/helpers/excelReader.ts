import * as XLSX from 'xlsx';
import * as path from 'path';

export class ExcelReader {
    private workbook: XLSX.WorkBook;

    constructor(excelPath: string) {
        this.workbook = XLSX.readFile(excelPath);
    }

    async readTestData(sheet: string, rowNumber: number) {
        const worksheet = this.workbook.Sheets[sheet];
        const data = XLSX.utils.sheet_to_json(worksheet);
        return data[rowNumber - 1];
    }
}
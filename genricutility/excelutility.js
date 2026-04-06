import excel from 'exceljs'

export async function readdatafrom (path, shetnum, rowcount, cellcount) {

    let book = new excel.Workbook()
    await book.xlsx.readFile(path)
     let sheet = book.getWorksheet(shetnum)
     let data=  sheet.getRow().getCell(cellcount).toString()
    return data
    
    
}
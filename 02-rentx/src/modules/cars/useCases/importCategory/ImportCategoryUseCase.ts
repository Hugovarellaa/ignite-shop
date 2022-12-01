import { parse } from 'csv-parse'
import fs from 'fs'

class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path)
    const csvParse = parse()

    stream.pipe(csvParse)

    csvParse.on('data', async (row: any) => {
      console.log(row)
    })
  }
}

export { ImportCategoryUseCase }
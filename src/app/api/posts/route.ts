import { NextResponse } from 'next/server';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// GET
// POST
// PATCH
// PUT
// DELETE

export async function GET(request: Request, response: NextResponse) {
  const { method } = request

  switch(method) {
    case 'GET': {
      const data = readPostsInfo()
      return NextResponse.json({postInfo: data})
    }
    default:
      return NextResponse.json({status: 404})
  }

}

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), 'posts')
  const dirs = fs.readdirSync(dirPathToRead)
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename)
    const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
    //console.log(matter(fileContent))
    return matter(fileContent).data
  })

  return data
}
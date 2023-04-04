import { NextPage } from 'next'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { resolve } from 'path/win32'

interface Props {}

export async function generateStaticParams() { // getStaticPaths()の置き換え
  const dirPathToRead = path.join(process.cwd(), 'posts')
  const dirs = fs.readdirSync(dirPathToRead)
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename)
    const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
    return [
      { postSlug: matter(fileContent).data.slug }
    ]
  })
  return paths
}

export async function getData(context: any) {
  const { postSlug } = context
  const filePathToRead = path.join(process.cwd(), `posts/${postSlug}.md`)
  const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
  const {content, data} = matter(fileContent)

  return {
    content,
    title: data.title
  }
}

const SinglePage: NextPage<Props> = async ({ content, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default SinglePage
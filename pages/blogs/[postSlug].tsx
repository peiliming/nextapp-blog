import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Props {}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const dirPathToRead = path.join(process.cwd(), 'posts')
  const dirs = fs.readdirSync(dirPathToRead)
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), `posts/${filename}`)
    const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
    return { params: { postSlug: matter(fileContent).data.slug} }
  })
  return {
    paths,
    fallback: false
  }
} 

const SinglePage: NextPage<Props> = () => {
  return (<div>SinglePage</div>)
}

export default SinglePage
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Props {
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { postSlug } = params as any
  const filePathToRead = path.join(process.cwd(), `posts/${postSlug}.md`)
  const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
  const {content, data} = matter(fileContent)
  return {
    props: {
      content,
      title: data.title
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

const SinglePage: NextPage<Props> = (props) => {
  return (<div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>)
}

export default SinglePage
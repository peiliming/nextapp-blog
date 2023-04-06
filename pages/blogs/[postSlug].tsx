import { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
// next-mdx-remote: https://fuyu.hatenablog.com/entry/2021/01/17/235610
import { serialize } from 'next-mdx-remote/serialize'

type Props = InferGetStaticPropsType<typeof getStaticProps>
interface StaticProps extends ParsedUrlQuery {
  postSlug: string
}

interface Post {
  post: {
    title: string
    content: MDXRemoteSerializeResult
  }
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const { params } = context
  const { postSlug } = params as StaticProps
  const filePathToRead = path.join(process.cwd(), `posts/${postSlug}.md`)
  const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
  // const {content, data} = matter(fileContent)
  // const source = await serialize(content)
  //const { compiledSource, frontmatter }: any = await serialize(fileContent, {parseFrontmatter: true})
  const source: any = await serialize(fileContent, {parseFrontmatter: true})
  return {
    props: {
      post: {
        content: source,
        title: source.frontmatter.title
      }
    }
  }
}

export const getStaticPaths = () => {
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

const SinglePage: NextPage<Props> = ({post}) => {
  const {content, title} = post
  return (<div className='max-w-3xl mx-auto'>
    <h1 className='front-semibold text-2xl py-5'>{title}</h1>
    {/* <p>{props.post.content}</p> */}
    <div className='prose pb-20'>
      <MDXRemote {...content} />
    </div>
  </div>)
}

export default SinglePage
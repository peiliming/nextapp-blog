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
    // return [
    //   { postSlug: matter(fileContent).data.slug,
    //   fallback: false }
    // ]
    return {
      params: {
        postSlug: matter(fileContent).data.slug,
      }
    
    }
  })
  console.log(paths)
  return {
    paths
  }
}

const slugs = await generateStaticParams()


// export async function getData(slug) { 
//   const slug = slugs.map((slug) => {
//     const filePathToRead = path.join(process.cwd(), `posts/${slug.postSlug}.md`)
//     const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})


//     const {content, data} = matter(fileContent)
//     return {
//       content,
//       title: data.title
//     }
//   })
  
//   return slug
// }



const SinglePage: NextPage<Props> = async () => {

  return (
  //   <div>
  //     {data}
  //     <h1>{data.title}</h1>
  //     <p>{data.content}</p>
  //   </div>
  
  <div>
    <h1>single page</h1>
  </div>
  )
}

export default SinglePage
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import BlogCard from '@/components/BlogCard'

interface PostApiResponse {
  postInfo: {
    title: string
    meta: string
    slug: string
  }[]
}

export const getStaticProps = async () => {
  const { postInfo }: PostApiResponse = await fetch('http://localhost:3000/api/posts').then((data) => data.json())
  return {
    props: {
      posts: postInfo
    }
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className='max-w-3xl mx-auto p-5'>
      {posts.map((post) => (
        <BlogCard key={post.slug} title={post.title} meta={post.meta} slug={post.slug} />
      ))}
    </div>
  )
}

export default Blogs
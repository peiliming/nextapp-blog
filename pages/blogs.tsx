import { NextPage } from 'next'
import BlogCard from '@/components/BlogCard'

interface Props{}

const Blogs: NextPage<Props> = () => {
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <BlogCard title="テスト" desc="テスト テスト" />
    </div>
  )
}

export default Blogs
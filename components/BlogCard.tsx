import { NextPage } from 'next'
import { FC } from 'react'
import Link from 'next/link'

interface Props{
  title: string
  desc?: string
  meta: string
  slug: string
}

const BlogCard: FC<Props> = ({title, meta, slug}): JSX.Element => {
  return (<Link href={'/blogs/'+ slug}>
    <div className='bg-green-100 p-2 rounded my-5 cursor-pointer'>
      <h1 className='text-gray-900 text-3xl font-semibold'>{title}</h1>
      <p className='text-gray-500'>{meta}</p>
    </div>
  </Link>)
}

export default BlogCard
// 'use client'

import { NextPage, InferGetStaticPropsType } from 'next'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import BlogCard from '@/app/components/BlogCard'

interface PostApiResponse {
  postInfo: {
    title: string
    slug: string
    meta: string
  }[]
}

// export const getStaticProps = async () => {
//     const { postInfo }: PostApiResponse = await fetch('http://localhost:3000/api/posts').then(data => data.json())

//   return {
//     props: { posts: postInfo }
//   }
// }

export async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  return res.json()
}

const data: PostApiResponse = await getData()

type Props = InferGetStaticPropsType<typeof data>
// interface Props {
// }

const Blogs: NextPage<Props> = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((post) => (
        <BlogCard title={post.title} desc={post.meta} />)
      )}
    </div>
  )
}

export default Blogs
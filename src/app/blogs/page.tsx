//'use client'

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

export async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'force-cache' })
  return res.json()
}
const { postInfo }: PostApiResponse = await getData()
interface Props{}

const Blogs: NextPage<PostApiResponse> = async () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {postInfo.map((post, index) => (
        <BlogCard key={index} title={post.title} desc={post.meta} />)
      )}
    </div>
  )
}

export default Blogs
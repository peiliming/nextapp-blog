import { NextPage } from 'next'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Props {}

export async function generateStaticParams() { // getStaticPaths()の置き換え
  return [
    { postSlug: 'clever-lazy-loading-for-javascript' }
  ]
}

const SinglePage: NextPage<Props> = () => {
  // const router = useRouter()
  // console.log(router)
  return (<div>SinglePage</div>)
}

export default SinglePage
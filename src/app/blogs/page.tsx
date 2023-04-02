import { NextPage } from 'next'
import BlogCard from '@/components/BlogCard'

interface Props {}

const BlogsPage: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <BlogCard title="ゲーム紹介" desc="さあ、新しい世界に飛び込みましょう！あなたは、未知の冒険に出発する準備ができていますか？あなたの目的は、危険な敵を倒し、多くの宝物を探すことです。強力な武器と魔法を使い、敵を撃破し、進んでいきましょう。" />
      <BlogCard title="ゲーム紹介" desc="さあ、新しい世界に飛び込みましょう！あなたは、未知の冒険に出発する準備ができていますか？あなたの目的は、危険な敵を倒し、多くの宝物を探すことです。強力な武器と魔法を使い、敵を撃破し、進んでいきましょう。" />
      <BlogCard title="ゲーム紹介" desc="さあ、新しい世界に飛び込みましょう！あなたは、未知の冒険に出発する準備ができていますか？あなたの目的は、危険な敵を倒し、多くの宝物を探すことです。強力な武器と魔法を使い、敵を撃破し、進んでいきましょう。" />
    </div>
  )
}

export default BlogsPage
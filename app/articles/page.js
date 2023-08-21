import React from 'react'
import Link from 'next/link'

const ArticlesPage = () => {
  return (
    <div>
        <h3>Articles Page</h3>
        <Link href="/posts">
            <button>Take me to the posts page</button>
        </Link>
    </div>
  )
}

export default ArticlesPage
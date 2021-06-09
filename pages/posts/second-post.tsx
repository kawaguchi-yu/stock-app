import React,{FC} from "react"
import Link from 'next/link'

const SecondPost:FC = () => {
  return (
    <>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </h2>
    </>
  )
}

export default SecondPost

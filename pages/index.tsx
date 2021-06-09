import React, { FC } from "react"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home:FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[im kiricheese nice to meet you]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://finance.yahoo.co.jp/">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
export default Home
import type { NextPage } from 'next'
import Head from 'next/head'
import { works } from '@/works'
import Header from '@/components/Header'
import Works from 'src/components/Works'
import Top from 'src/components/Top'
import Other from 'src/components/Other'

type Props = {
  items: Item[]
}

export async function getStaticProps() {
  const items: Item[] = works

  return {
    props: {
      items
    },
  }
}

const Home: NextPage<Props> = ({items}) => {
  return (
    <div>
      <Head>
        <title>ナカムラのサイト</title>
        <meta name="description" content="ナカムラのポートフォリオサイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header topPage={true}></Header>
      <Top></Top>
      <Works workItems={items}></Works>
      <Other></Other>
    </div>
  )
}

export default Home
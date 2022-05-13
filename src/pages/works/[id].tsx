import Head from 'next/head'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import { works } from '@/works'
import { css } from '@emotion/react'
import { mq } from '@/styles/breakpoint'

type PathParams = {
  id: string;
}

// 事前生成するページのパス（URL のパラメータ部分）のリストを返します。
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const itemCount = works.length
  let path: (string | {params: PathParams;locale?: string | undefined;})[] = []
  for (let i = 1; i <= itemCount; i++) {
    path.push({ params: {id: `${i}`}})
  }

  return {
    paths: path,
    fallback: false  // 上記以外のパスでアクセスした場合は 404 ページにする
  }
}

export const getStaticProps: GetStaticProps<Item> = async context => {
  // ファイル名が [id].tsx なので id パラメーターを取り出すことができる
  const { id } = context.params as PathParams

  // 本来はここで getBook(id) のように API を呼び出してデータを取得する
  const props: Item = works[Number(id) - 1]

  return { props }
}

// ページコンポーネントの実装
const BookPage: React.FC<Item> = (props: Item) => {
  return <>
    <Head>
      <title>{props.title} の詳細ページ</title>
    </Head>
    <Header topPage={false}></Header>
    <div css={detailWrap}>
      <section css={detailSection}>
        <div css={workItem}>
          <div css={sizedImage}>
            <Image src={`/assets/${props.image}`} alt={props.imageAlt} objectFit={'contain'} layout={"fill"} priority={true}></Image>
          </div>
          <div css={itemBox}>
            <h2 css={heading2}>{props.title}</h2>

            <h3 css={heading3}>概要</h3>
            <p css={paragraph}>{props.exp}</p>

            <h3 css={heading3}>使用技術</h3>
            <p css={paragraph}>{props.tech.join(', ')}</p>

          </div>
        </div>
        <div css={buttonBox}>
          {props.site ? <a css={linkButton} href={props.site as string} target="_blank" rel="noreferrer noopener">サイトへ</a> : undefined}
        </div>
      </section>
    </div>
  </>
}
export default BookPage

const detailWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dddddd;
`

const detailSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  background-color: #ffffff;
`

const workItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-width: 360px;
  max-width: 800px;
  padding: 40px 0;
  background-color: #ffffff;
`

const sizedImage = css`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 400px;
  margin-bottom: 2rem;
  border: 1px solid #dddddd;
`

const itemBox = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 10%;
`

const heading2 = css`
  font-size: 2rem;
  /* margin-bottom: 1.5rem; */
`

const heading3 = css`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 5px;
  font-size: 1.5rem;
  border-bottom: 2px solid #333333;
`

const paragraph = css`
  font-size: 1.2rem;
  padding: 0 1rem;
`

const buttonBox = css`
  position: sticky;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  padding: 1rem;
  text-align: center;
`

const linkButton = css`
  padding: 5px 15px;
  border-radius: 100vh;
  background-color: #333333;
  color: #ffffff;
`
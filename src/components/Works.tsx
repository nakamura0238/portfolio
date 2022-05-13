import Image from 'next/image'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { mq } from '@/styles/breakpoint'

type Props = {
  workItems: Item[]
}

const Works: React.FC<Props> = ({workItems}) => {
  const router = useRouter()

  const movePage = (id: number) => {
    router.push(`/works/${id}`)
  }

  return (
    <section css={worksSection} data-id={"works"}>
      <h2 css={sectionTitle}>WORKS</h2>
      <div css={workArea}>
        {workItems.map((item, i) => {
          return (
            <div key={i} css={workPadding}>
              <div css={workItem}>
                <div css={workImage}>
                  <Image src={'/assets/sample_image.jpeg'} alt={'test'} objectFit='contain' layout='fill' priority={true}></Image>
                </div>
                <div css={itemBox}>
                  <p css={itemTitle}>{item.title}</p>
                  <p css={itemExp}>{item.shortExp}</p>
                  <div css={linkBox}>
                    <button css={linkButton} onClick={() => movePage(i+1)}>詳細ページ</button>
                    {item.site ? <a css={linkButton} href={item.site as string} target="_blank" rel="noreferrer noopener">サイト</a> : undefined}
                  </div> 
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Works

const worksSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
`

const sectionTitle = css`
padding: 1rem;
  font-size: 2rem;
`

const workArea = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  min-width: 360px;
  max-width: 800px;
`

const workPadding = css`
  width: 360px;
  padding: 20px;
  ${mq("md")} {

  }
  
`

const workItem = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 2px solid #aaaaaa;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
`

const workImage = css`
  position: relative;
  width: calc(100%);
  height: 240px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  object-fit: contain;
`

const itemBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const itemTitle = css`
  font-size: 1.4rem;
  margin-bottom: 15px;
`

const itemExp = css`
  font-size: 1rem;
  margin-bottom: 15px;
  padding: 0 10px;
`

const linkBox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: auto;
  padding: 15px 0 5px 0;
  border-top: 2px solid #dddddd;
`

const linkButton = css`
  font-size: 1.2rem;
  color: #1a0dab;
  text-decoration: underline dashed 1px;
  text-underline-offset: 0.2rem;
`
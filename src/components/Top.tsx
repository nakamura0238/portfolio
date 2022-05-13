import { css } from '@emotion/react'

const Top = () => {
  return (
    <section css={topSection} data-id={"top"}>
      <h1 css={title}>ナカムラのサイト</h1>
      <p css={description}>制作物の置き場所です</p>
      <p css={description}>随時更新していきます</p>
    </section>
  )
}

export default Top

const topSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eeeeee;
`

const title = css`
  font-size: 2rem;
  padding: 1rem;
`

const description = css`
  font-size: 1rem;
  padding: 0.5rem;
`
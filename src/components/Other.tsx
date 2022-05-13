import { css } from '@emotion/react'

const Other = () => {
  const contactUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe-NSLrd6lcqhJoJlup8q888iLFHZg8GWXAa81fFRQpX70NQQ/viewform?usp=sf_link"
  return (
    <section css={otherSection} data-id={"other"}>
      <div css={itemBox}>
        <a css={linkButton} href={contactUrl} target="_blank" rel="noreferrer noopener">CONTACT</a>
        <span css={itemExp}>Googleフォームへ移動します</span>
      </div>
    </section>
  )
}

export default Other

const otherSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #dddddd;
`

const itemBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const linkButton = css`
  font-size: 1.8rem;
  color: #1a0dab;
  text-decoration: underline dashed 1px;
  text-underline-offset: 0.2rem;
`

const itemExp = css`
  padding-top: 8px;
  font-size: 0.8rem;
`
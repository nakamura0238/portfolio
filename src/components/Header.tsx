import { useRouter } from 'next/router'
import { css } from '@emotion/react'

type Props = {
  topPage: boolean
}

const Header = (props: Props) => {
  const router = useRouter()
  const toTop = () => {
    router.push("/")
  }

  const pageScroll = (id: string) => {
    const tmp = document.querySelector('[data-id="' + id + '"]')
    tmp?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return(
    
    <header css={header}>
      <button onClick={toTop}>ナカムラのサイト</button>
      {props.topPage? 
        <nav css={nav}>
          <button css={navItem} onClick={() => pageScroll("top")}>TOP</button>
          <button css={navItem} onClick={() => pageScroll("works")}>WORKS</button>
          <button css={navItem} onClick={() => pageScroll("other")}>OTHER</button>
        </nav>
        : undefined }
    </header>
  )
}

export default Header

const header = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  font-size: 1.4rem;
  z-index: 9999;
`

const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const navItem = css`
  margin-left: 20px;
`
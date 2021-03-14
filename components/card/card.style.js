import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 1.4rem 0 0;

  @media (prefers-color-scheme: light) {
    --secondary: var(--tertiary);
  }
`

export const Section = styled.div`
  border-radius: 5px;
  background: var(--foreground);
  font-family: var(--primary-font);
  box-shadow: var(--elevation);
  border-radius: var(--smooth-radius);
  padding: 1rem;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 2rem 0 0;
  color: var(--primary);
`

export const Subtitle = styled(Title)`
  margin-top: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  a {
    color: var(--primary);
    text-decoration: none;

    :hover, :focus  {
      text-decoration: underline;
    }
  }
`

export const Text = styled.p`
  margin-bottom: 0;
`

export const Illustration = styled.img`
  display: block;
  margin: 0 auto 4em;
`

export const Options = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const Item = styled.li`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  border-top: 1px solid var(--secondary);
  box-sizing: border-box;

  :first-of-type {
    border-top: 0;
    padding-top: 8px;
  }

  :last-of-type {
    padding-bottom: 8px;
  }

  p {
    margin-left: 48px;
  }
`

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-bottom: 10px;

  @media (max-width: 700px) {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    transform: translateX(-10px);
    width: 100vw;

    ::-webkit-scrollbar {
      display: none;
    }

    & > div {
      /*height: 240px;*/
      min-width: calc(100% - 30px);
      margin-right: 10px;
      scroll-snap-align: center;

      :first-of-type {
        margin-left: 10px;
      }

      :last-of-type {
        margin-right: 0;
      }
    }

    &:after {
      content: '';
      min-width: 10px;
      height: 240px;
      background: transparent;
    }
  }

  @media (min-width: 701px) {
    & > div {
      flex: 1;
      margin-right: 1em;

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`

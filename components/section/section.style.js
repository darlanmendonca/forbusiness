import styled from '@emotion/styled'

export const Section = styled.section`
  position: relative;
  box-sizing: border-box;
  margin: 1.4rem 0;

  @media (prefers-color-scheme: light) {
    --secondary: var(--tertiary);
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 2em;
  margin: 2rem 0 0;
  color: var(--primary);
`

export const Options = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-bottom: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 2px 0;

  @media (max-width: 700px) {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    transform: translateX(-10px);
    width: 100vw;

    ::-webkit-scrollbar {
      display: none;
    }

    & > li {
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
    & > li {
      flex: 1;
      margin-right: 1em;

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`

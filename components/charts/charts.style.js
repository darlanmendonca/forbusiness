import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 10px;

  @media (max-width: 700px) {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
      display: none;
    }

    & > div {
      height: 240px;
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
    padding: 0 10px;

    & > div {
      flex: 1;
      height: 310px;
      margin-right: 1em;

      :last-of-type {
        margin-right: 0;
      }
    }
  }

`

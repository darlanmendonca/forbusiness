import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 700px) {
    overflow-x: auto;

    & > div {
      display: inline-block;
      height: 240px;
      min-width: calc(100% - 20px);
      margin-right: 10px;

      :first-of-type {
        border-left: 10px solid var(--background);
      }

      :last-of-type {
        border-right: 10px solid var(--background);
      }
    }
  }

  @media (min-width: 701px) {
    padding: 0 10px;

    & > div {
      flex: 1;
      height: 310px;
      margin-right: 2em;

      :last-of-type {
        margin-right: 0;
      }
    }
  }

`

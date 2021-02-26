import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.4rem;

  & > div {
    flex: 1;
    height: 240px;

    :not(:last-of-type) {
      margin-right: 2em;
    }
  }
`

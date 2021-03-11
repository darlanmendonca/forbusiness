import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  color: var(--primary);
  font-family: var(--primary-font);
  overflow: hidden;
`

export const Header = styled.header`
  background: var(--brand-gradient);
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: var(--primary-font);
  box-sizing: border-box;

  a {
    color: white;
    margin-left: 10px;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
  }

  p {
    font-size: 15px;
    line-height: 1.4;
    margin: 10px 0 0;
    padding: 0 20px;

    @media (max-width: 700px) {
      text-align: center;
    }
  }

  strong, a {
    white-space: nowrap;
  }
`

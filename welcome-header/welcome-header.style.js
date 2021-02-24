import styled from '@emotion/styled'

export const Header = styled.header`
  background: var(--brand-gradient);
  padding: 1rem 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: var(--primary-font);

  a {
    color: white;
    margin-left: 10px;
  }
`

export const Title = styled.h3`
  font-size: 2em;
  font-weight: 300;
  margin: 0;
  margin-top: 15px;
`

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.4;
  margin: 10px 0 0;
  padding: 0 20px;
`

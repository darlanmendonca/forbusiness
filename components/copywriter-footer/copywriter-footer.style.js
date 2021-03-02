import styled from '@emotion/styled'

export const Footer = styled.footer`
  color: var(--secondary);
  font-family: var(--primary-font);
  margin: 34px auto 0;
  max-width: 1200px;
  padding: 20px 10px;
  box-sizing: border-box;
  border-top: 1px solid var(--tertiary);
  font-size: 12px;
  line-height: 34px;
  width: 100%;
  white-space: nowrap;

  @media (max-width: 700px) {
    text-align: center;
  }

  img {
    transform: translateY(6px);
    margin-right: 10px;
  }

  a {
    color: var(--accent);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

import styled from '@emotion/styled'

export const Card = styled.div`
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
  margin: 0;

  @media (prefers-color-scheme: light) {
    --secondary: var(--tertiary);
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 2em;
  margin: 0 0 8px;
  color: var(--primary);

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

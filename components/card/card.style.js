import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 1.4rem 0 0;

  @media (prefers-color-scheme: light) {
    /*--primary: #797979;*/
    --secondary: var(--tertiary);
  }
`

export const Section = styled.div`
  border-radius: 5px;
  background: var(--foreground);
  font-family: var(--primary-font);
  box-shadow: var(--elevation);
  border-radius: var(--smooth-rounding);
  padding: 1rem;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
`

export const Title = styled.h2`
  font-weight: 500;
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

  :first-child {
    border-top: 0;
    padding-top: 8px;
  }

  :last-child {
    padding-bottom: 8px;
  }
`

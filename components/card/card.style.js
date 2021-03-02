import styled from '@emotion/styled'

export const Container = styled.div`
  border-radius: 5px;
  background: var(--foreground);
  margin: 1.4rem 0 0;
  font-family: var(--primary-font);
  box-shadow: var(--elevation);
  border-radius: 2px;
  padding: 1em;
  box-sizing: border-box;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 1.4em 0 0;
  color: var(--primary);
`

export const Subtitle = styled(Title)`
  margin-top: 0;
`

export const Illustration = styled.img`
  display: block;
  margin: 0 auto 4em;
`

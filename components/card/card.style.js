import styled from '@emotion/styled'

export const Container = styled.div`
  border-radius: 5px;
  background: var(--foreground);
  margin: 1.4rem 0 0;
  font-family: var(--primary-font);
  box-shadow: var(--elevation);
  border-radius: var(--smooth-rounding);
  padding: 1em;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 1.4em 0 0;
  color: var(--primary);
`

export const Subtitle = styled(Title)`
  margin-top: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  small {
    opacity: .5;
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
    display: inline-block;
    transform: translateY(1px);
  }
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
  top: -52px;
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

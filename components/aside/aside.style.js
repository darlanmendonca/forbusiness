import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 380px;
  max-width: 100vw;
  z-index: 10;
  background: var(--foreground);
  box-shadow: var(--elevation);
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: -1px 0 3px 0 rgba(0, 0, 0, 0.2);
  transition: transform var(--fast) ease;
  visibility: visible;
  transform: translateX(0%);

  &[hidden] {
    visibility: hidden;
    display: block;
    transform: translateX(100%);
    transition: transform var(--fast) ease, visibility 0s .3s;
  }

  nav {
    display: block;
    margin-top: 40px;

    a {
      display: block;
      line-height: 4em;
      height: 4em;
      padding: 0 10px;
      background-color: transparent;
      margin: 10px 0 0;
      border-radius: 4px;
      transition: background-color var(--fast) ease;

      :after {
        content: none;
      }

      :hover {
        background-color: var(--secondary);
      }

      :not([href]) {
        background-color: var(--accent);
      }
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 0;
`

export const CloseButton = styled.button`
  border: 0;
  background: none;
  position: fixed;
  top: 20px;
  right: 10px;
  cursor: pointer;
`

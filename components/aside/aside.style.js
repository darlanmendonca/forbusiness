import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  &[hidden] {
    pointer-events: none;
    display: block;
  }
`

export const Content = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 100vw;
  background: var(--foreground);
  box-shadow: var(--elevation);
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: -1px 0 3px 0 rgba(0, 0, 0, 0.2);
  transform: translateX(0);
  transition: all var(--fast) ease;

  &[hidden] {
    display: block;
    transform: translateX(100%);
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

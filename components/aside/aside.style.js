import styled from '@emotion/styled'

export const Container = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 380px;
  max-width: 100vw;
  background: var(--foreground);
  box-shadow: var(--elevation);
  margin: 0;
  padding: 20px;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: -1px 0 3px 0 rgba(0, 0, 0, 0.2);

  &[hidden] {
    display: none;
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

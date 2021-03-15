import styled from '@emotion/styled'
import Button from 'components/button/button.component.js'

export const Container = styled.div`
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: calc(1200px - 20px);
  z-index: 10;
  background: var(--foreground);
  box-shadow: var(--elevation);
  margin: 0;
  box-sizing: border-box;
  box-shadow: -1px 0 3px 0 rgba(0, 0, 0, 0.2);
  transition: transform var(--fast) ease;
  visibility: visible;
  transform: translate(-50%, 0%);
  overflow: auto;
  border-top-left-radius: var(--smooth-radius);
  border-top-right-radius: var(--smooth-radius);

  &[hidden] {
    visibility: hidden;
    display: block;
    transform: translate(-50%, 100%);
    transition: transform var(--fast) ease, visibility 0s .3s;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 64px;
  margin: 0;
  padding: 0 65px 0 16px;
  color: var(--primary);
`

export const CloseButton = styled(Button)`
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 10px;
`

import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 430px;
  max-width: 100vw;
  z-index: 10;
  background: var(--foreground);
  box-shadow: var(--elevation);
  margin: 0;
  box-sizing: border-box;
  box-shadow: -1px 0 3px 0 rgba(0, 0, 0, 0.2);
  transition: transform var(--fast) ease;
  visibility: visible;
  transform: translateX(0%);
  overflow: auto;

  @media (min-width: 500px) {
    border-top-left-radius: var(--smooth-radius);
    border-bottom-left-radius: var(--smooth-radius);
  }

  &[hidden] {
    visibility: hidden;
    display: block;
    transform: translateX(100%);
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

export const CloseButton = styled.button`
  border: 0;
  background: none;
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

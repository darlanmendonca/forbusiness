import styled from '@emotion/styled'

export const FlatButton = styled.button`
  display: inline-flex;
  position: relative;
  border: 0;
  background: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: var(--smooth-radius);
  transition: background-color var(--fast) ease;
  cursor: pointer;
  position: relative;
  transform: translateZ(0);
  z-index: 1;

  :after {
    content: attr(aria-label);
    font-size: 13px;
    line-height: 1.2em;
    position: fixed;
    top: calc(100% + 1px);
    left: 50%;
    transform:  translate(-50%, 2px);
    background: var(--foreground);
    color: var(--primary);
    padding: 4px 8px;
    border-radius: var(--smooth-radius);
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    transition: opacity var(--fast) ease;
  }

  :hover, :focus {
    :after {
      opacity: 1;
    }
  }

  :hover, :focus {
    background-color: var(--secondary);
  }

  svg {
    font-size: 24px;
  }
`

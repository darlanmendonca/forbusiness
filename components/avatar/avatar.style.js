import styled from '@emotion/styled'
import { css } from '@emotion/react'

const size = ({ size }) => size

export const Image = styled.div`
  background-color: white;
  background-size: cover;
  border: 0;
  border-radius: 50%;
  color: black;
  display: inline-block;
  font-family: var(--primary-font);
  font-size: ${ size };
  font-weight: 600;
  height: 3em;
  line-height: 3em;
  padding: 0;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: bottom;
  width: 3em;
  -webkit-font-smoothing: antialiased;
  position: relative;
  border: 2px solid white;
  box-sizing: border-box;
  transform: translateZ(0);
  z-index: 1;

  ${({ image }) => !image ? '' : css`
    &:before {
      content: '';
      background-image: url(${ image });
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `}

  ${({ tooltip }) => tooltip && css`
    :after {
      content: attr(aria-label);
    }
  `}

  :after {
    font-size: 13px;
    line-height: 1.2em;
    position: fixed;
    top: 100%;
    left: 50%;
    transform:  translate(-50%, 6px);
    background: var(--foreground);
    color: var(--primary);
    padding: 4px 8px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    transition: opacity var(--fast) ease;
  }

  :hover, :focus {
    :after {opacity: 1}
  }

  &[aria-expanded="true"] {
    :after {opacity: 0}
  }
`

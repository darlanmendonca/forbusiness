import styled from '@emotion/styled'
import { NavigationLink } from '../main-header/main-header.style.js'

export const Container = styled.div`
  display: inline-block;
  position: relative;
  /*height: 44px;*/
`

export const Button = styled(NavigationLink)`
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 1em;

  :after {visibility: hidden}

  box-icon {
    transform: translate(.2em, .45em);
  }
`

Button.defaultProps = { as: 'button' }

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  margin: 0;

  background: var(--foreground);
  border-radius: 4px;
  display: inline-flex;
  flex-direction: column;
  min-width: 200px;
  padding: 16px 0;
  position: absolute;
  top: 100%;
  right: 0;
  line-height: 24px;
  font-family: var(--primary-font);
  transform: translate(-23px, 0);
  box-sizing: border-box;

  &[hidden] {
    display: none;
  }

  a {
    display: block;
    padding: 0 16px;
    color: var(--primary);
    text-decoration: none;

    :hover {
      color: var(--professionals-color);
    }
  }

  :before {
    border-width: 9px;
    border-style: solid;
    border-color: transparent transparent var(--foreground);
    content: '';
    position: absolute;
    right: 16px;
    top: -18px;
  }
`

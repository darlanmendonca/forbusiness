import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Avatar from 'components/avatar/avatar.component.js'
import Button from 'components/button/button.component.js'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--brand-gradient);
  color: white;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  min-height: 66px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  button {
    color: inherit;

    &:not([role="menuitem"]) {
      --secondary: rgba(255, 255, 255, .2);
    }
  }


  nav, aside {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (min-width: 1201px) {
    button[aria-label="Menu"] {
      display: none;
    }
  }
`

export const Logotype = styled.a`
  ${ props => props.theme.type === 'mobile' && css`
    display: none;
  `}
`

export const Navigation = styled.nav`
  ${ props => props.theme.type === 'mobile' && css`
    margin-top: 8px;
    padding: 0 10px;
  `}
`

export const NavigationLink = styled.a`
  font-family: var(--primary-font);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: inherit;

  ${ props => props.theme.type === 'desktop' && css`
    margin-right: 33px;
    position: relative;
    line-height: 66px;
    height: 44px;
    outline-offset: 10px;

    :last-of-type {
      margin-right: 0;
    }

    :hover:after, &[aria-current="page"]:after {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
      width: 100%;
    }

    :after {
      left: 50%;
      background-color: currentColor;
      content: '';
      height: 2px;
      opacity: 0;
      position: absolute;
      top: 108%;
      transform: translate3d(-50%, 0, 0);
      transition: all var(--fast) ease;
      width: 4px;
      will-change: transform;
    }
  `}


  ${ props => props.theme.type === 'mobile' && css`
    display: block;
    line-height: 4em;
    height: 4em;
    padding: 0 10px;
    margin: 8px 0 0;
    border-radius: var(--smooth-radius);
    transition: background-color var(--fast) ease;
    width: 100%;
    box-sizing: border-box;
    color: var(--primary);

    :hover {
      background-color: var(--secondary);
    }

    &[aria-current="page"] {
      background-color: var(--accent);
    }
  `}
`

export const Options = styled.aside`
  ${ props => props.theme.type === 'mobile' && css`
    margin-top: 40px;
    padding: 20px 10px;
    border-top: 1px solid var(--secondary);
    position: relative;

    :before {
      content: attr(aria-label);
      position: absolute;
      top: 0;
      left: -10px;
      line-height: 1em;
      transform: translate(10px, -50%);
      background: var(--foreground);
      color: var(--accent);
      padding: 0 8px 0 10px;
      font-size: 12px;
    }
  `}

  button:not([role="menuitem"]) {
    justify-content: center;
    align-items: center;
    border-radius: var(--smooth-radius);

    ${ props => props.theme.type === 'mobile' && css`
      display: block;
      font-size: 14px;
      line-height: 4em;
      height: 4em;
      padding: 0 10px;
      background-color: transparent;
      margin: 8px 0 0;
      border-radius: var(--smooth-radius);
      transition: background-color var(--fast) ease;
      width: 100%;
      box-sizing: border-box;
      color: var(--primary);
      font-weight: 600;
      font-family: var(--primary-font);

      :hover {
        background-color: var(--secondary);
      }

      border: 0;
      display: flex;
      justify-content: start;
      overflow: hidden;

      svg {
        margin-right: 10px;
      }

      :before {
        content: attr(aria-label);
        order: 1;
      }
    `}
  }
`

export const AvatarButton = styled(Avatar)`
  cursor: pointer;

  ${ props => props.theme.type === 'desktop' && css`
    transform: translateY(-2px);
    margin-left: 8px;
  `}

  ${ props => props.theme.type === 'mobile' && css`
    display: none;
  `}
`

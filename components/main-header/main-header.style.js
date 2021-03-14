import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Avatar from '../avatar/avatar.component.js'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--brand-gradient);
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

  nav, aside {
    @media (max-width: 1200px) {
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
  outline-offset: 10px;

  ${ props => props.theme.type === 'desktop' && css`
    color: white;
    margin-right: 33px;
    position: relative;
    line-height: 66px;
    height: 44px;

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
`

export const Button = styled.button`
  border: 0;
  background: none;
  justify-content: center;
  align-items: center;
  border-radius: var(--smooth-radius);

  ${ props => props.theme.type === 'desktop' && css`
    width: 40px;
    height: 40px;
    display: inline-flex;
    transform: translateY(0);
    cursor: pointer;
    position: relative;
    transition: background var(--fast) ease;

    :after {
      content: attr(aria-label);
      font-size: 13px;
      line-height: 1.2em;
      position: fixed;
      top: 100%;
      left: 50%;
      transform:  translate(-50%, 2px);
      background: var(--foreground);
      color: var(--primary);
      padding: 4px 8px;
      opacity: 0;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
      border-radius: var(--smooth-radius);
      transition: opacity var(--fast) ease;
    }

    :hover, :focus {
      background: rgba(255, 255, 255, .2);
      :after {opacity: 1}
    }
  `}

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

    /*button[role="menuitem"] {
      display: none;
    }*/
  `}
`

export const MenuButton = styled(Button)`
  @media (min-width: 1201px) {
    display: none;
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

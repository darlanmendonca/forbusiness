import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--brand-gradient);
  /*box-shadow: var(--elevation);*/
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
`

export const Navigation = styled.nav`
  @media (max-width: 1023px) {
    display: none;
  }
`

export const NavigationLink = styled.a`
  font-family: var(--primary-font);
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-right: 33px;
  position: relative;
  line-height: 66px;
  height: 44px;

  :hover:after, &[data-active]:after {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
    width: 100%;
  }

  :after {
    left: 50%;
    background-color: white;
    border-radius: 4px;
    content: "";
    height: 2px;
    opacity: 0;
    position: absolute;
    top: 108%;
    transform: translate3d(-50%, 0, 0);
    transition: all .2s ease;
    width: 4px;
    will-change: transform;
  }
`

export const Button = styled.button`
  border: 0;
  background: none;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: translateY(6px);
  cursor: pointer;
  position: relative;

  :first-of-type {
    margin-left: 54px;
  }

  :after {
    content: attr(aria-label);
    font-size: 13px;
    line-height: 1.2em;
    position: absolute;
    top: 100%;
    left: 50%;
    transform:  translate(-50%, 2px);
    background: var(--foreground);
    color: var(--primary);
    padding: 4px 8px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  }

  :hover, :focus {
    :after {opacity: 1}
  }
`

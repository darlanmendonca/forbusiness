import styled from '@emotion/styled'

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
`

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  background: var(--foreground);
  border-radius: var(--smooth-radius);
  display: inline-flex;
  flex-direction: column;
  min-width: 200px;
  padding: 16px 0 8px;
  position: absolute;
  top: 100%;
  right: 0;
  line-height: 24px;
  font-family: var(--primary-font);
  transform: translate(25px, 30px);
  box-sizing: border-box;
  transition: opacity var(--fast) ease;
  box-shadow: var(--elevation);

  &[hidden] {
    display: block;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--fast) ease, visibility 0s .3s;
  }

  a {
    display: block;
    padding: 0 10px;
    margin: 0 10px 0;
    line-height: 2.4em;
    height: 2.4em;
    color: var(--primary);
    text-decoration: none;
    border-radius: var(--smooth-radius);
    transition: background-color var(--fast) ease;
    margin-bottom: 8px;

    :hover, :focus {
      /*color: var(--professionals-color);*/
      background-color: var(--secondary);
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

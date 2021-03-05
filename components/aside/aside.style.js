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

  &[hidden] {
    visibility: hidden;
    display: block;
    transform: translateX(100%);
    transition: transform var(--fast) ease, visibility 0s .3s;
  }

  nav, aside {
    display: block;
    padding: 0 10px;

    a, button {
      display: block;
      font-size: 14px;
      line-height: 4em;
      height: 4em;
      padding: 0 10px;
      background-color: transparent;
      margin: 8px 0 0;
      border-radius: 4px;
      transition: background-color var(--fast) ease;
      width: 100%;
      height: 56px;
      box-sizing: border-box;
      text-align: left;
      color: var(--primary);
      font-weight: 600;
      font-family: var(--primary-font);

      :hover {
        background-color: var(--secondary);
      }
    }

    a {
      :after {
        content: none;
      }

      &[aria-current="page"] {
        background-color: var(--accent);
      }
    }

    button {
      margin: 0 !important;
      transform: none !important;
      border: 0;
      display: flex;
      justify-content: start;
      overflow: hidden;

      box-icon {
        /*display: none;*/
        transform: translateY(-10px);
        margin-right: 10px;
      }

      :before {
        content: attr(aria-label);
        order: 1;
      }
    }

    button[role="menuitem"] {
      display: none;
    }
  }

  nav {
    margin-top: 40px;
  }

  aside {
    border-top: 1px solid var(--secondary);
    padding-top: 10px;
    margin-top: 10px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 64px;
  margin: 0;
  padding: 0 65px 0 10px;
  background: var(--brand-gradient);
  color: white;
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

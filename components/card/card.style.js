import styled from '@emotion/styled'

export const Card = styled.div`
  border-radius: 5px;
  background: var(--foreground);
  font-family: var(--primary-font);
  box-shadow: var(--elevation);
  border-radius: var(--smooth-radius);
  padding: 1rem;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
  margin: 0;

  :empty {
    min-height: 200px;
  }

  &[aria-busy="true"] {
    animation: loading var(--normal) ease alternate infinite;
  }

  @keyframes loading {
    from {opacity: .4}
    to {opacity: 1}
  }

  @media (prefers-color-scheme: light) {
    --secondary: var(--tertiary);
  }
`

export const List = styled(Card)`
  padding: 0 1rem;
`

List.defaultProps = {
  as: 'ul',
}

export const Link = styled.a`
  color: var(--primary);
  text-decoration: none;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--smooth-radius);
    transition: all var(--fast) ease;
  }

  @media (hover: hover) {
    :hover, :focus {
      text-decoration: none;

      :after {
        box-shadow: 0 0 0 2px var(--accent);
      }
    }
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 2em;
  margin: 0;
  color: var(--primary);
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  margin-bottom: 0;
`

export const Illustration = styled.img`
  display: block;
  margin: 0 auto 4em;
`

export const Item = styled.li`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  border-bottom: 1px solid var(--secondary);
  box-sizing: border-box;
  position: relative;

  :first-of-type {
    padding-top: 16px;
  }

  :last-of-type {
    border-bottom: 0;
    padding-bottom: 16px;
  }

  p {
    margin-left: 48px;
  }

  h2 a {
    color: var(--primary);
    text-decoration: none;
    outline-offset: 4px;

    @media (hover: hover) {
      :hover:after {
        box-shadow: 0 0 0 2px var(--accent);
      }
    }


    :after {
      content: '';
      position: absolute;
      top: 0;
      left: -1rem;
      right: -1rem;
      bottom: 0;
      border-radius: var(--smooth-radius);
      box-shadow: 0 0 0 0 var(--accent);
      transition: box-shadow var(--fast) ease;
    }
  }
`

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background: red;
  width: 100%;
  height: 160px;
  background-image: url(${ props => props.src });
  background-size: cover;
  display: none;

  & + h2 {
    /*margin-top: 160px;*/
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 30vh;
    max-width: 100%;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 240px);

    img, div {
      width: 50%;
      height: 30vh;
    }

    img {
      height: auto;
    }

    div {
      height: 500px;
    }
  }
`

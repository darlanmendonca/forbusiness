import styled from '@emotion/styled'

export const List = styled.ul`
  padding: 0;
`

export const Item = styled.li`
  font-size: 12px;
  display: inline-flex;
  margin-top: 8px;
  margin-right: 10px;
  line-height: 18px;
  border: 1px solid ${ props => props.color };
  border-radius: 16px;
  padding: 4px 8px 4px 6px;
  color: ${ props => props.color };
  position: relative;
  box-sizing: border-box;
  transform: translateZ(0);

  :before {
    content: '';
    background: ${ props => props.color };
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .2;
    border-radius: inherit;
  }

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

  box-icon {
    margin-right: 2px;
  }
`

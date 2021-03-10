import styled from '@emotion/styled'

export const List = styled.ul`
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  transform: translateX(-1rem);
  width: calc(100% + 2rem);
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: none;
  }
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

  :first-of-type {
    margin-left: 1rem;
  }

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

  svg {
    margin-right: 2px;
  }
`

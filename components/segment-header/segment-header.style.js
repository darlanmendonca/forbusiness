import styled from '@emotion/styled'

export const Navigation = styled.nav`
  height: 40px;
  align-items: center;
  display: flex;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`

const segmentColor = props => props.color

export const Link = styled.a`
  font-family: var(--primary-font);
  font-size: 15px;
  line-height: 20px;
  padding: 0 12px;
  position: relative;
  text-decoration: none;
  color: ${ segmentColor };
  /*text-shadow: 1px 1px 0 #f7f7f7;*/

  :not(:last-of-type) {
    border-right: 1px solid var(--secondary);
    /*padding-right: 12px;*/
  }

  :not([href]):after {
    content: '';
    border-bottom: 6px solid;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    bottom: -11px;
    display: inline-block;
    height: 0;
    left: 50%;
    margin-left: -11px;
    position: absolute;
    width: 0;
    color: ${ segmentColor };
  }
`

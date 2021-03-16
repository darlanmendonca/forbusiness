import styled from '@emotion/styled'

export const List = styled.ol`
  margin: 2em auto 2em;
  display: block;
  width: fit-content;
  counter-reset: steps;
  user-select: none;
  white-space: nowrap;
  padding: 0;

  [aria-current="step"]:after {
    background: var(--tertiary);
  }

  [aria-current="step"] ~ li {
    color: var(--secondary);

    :after {
      background-color: var(--tertiary);
    }

    button:before {
      background-color: var(--tertiary);
    }
  }
`

export const Item = styled.li`
  display: inline-block;
  margin-right: 56px;
  position: relative;
  counter-increment: steps;
  color: var(--primary);

  :last-of-type {
    margin-right: 0;

    :after {
      display: none;
    }
  }

  &[aria-current="step"] {
    color: var(--accent);
  }

  :after {
    background: var(--accent);
    border-radius: 4px;
    content: '';
    display: block;
    height: 4px;
    left: calc(100% - 8px);
    position: absolute;
    top: 12px;
    width: 68px;
    z-index: -1;
  }

  button {
    color: inherit;
    background: none;
    border: 0;
    font-size: inherit;
    outline-offset: 4px;
    cursor: pointer;

    :disabled {
      cursor: default;
    }

    :before {
      content: counter(steps);
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      background-color: var(--accent);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-size: 14px;
      color: white;
      margin: 0 auto 8px;
    }
  }
`

export const Step = styled.div``

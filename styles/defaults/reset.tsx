import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0 auto;
    min-width: 320px;
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: inherit;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
  }


  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`

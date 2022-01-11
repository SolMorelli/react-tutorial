import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return <h1>This is Sol, and this is my first component!</h1>
}
const Description = () => {
  return [
    <Greeting />,
    React.createElement(
      'p',
      {},
      'I am currently learning React to further expand my skillset as a web developer. This is the beginning of a journey!'
    ),
  ]
}
ReactDom.render(<Description />, document.getElementById('root'))

import React from 'react'

function SuperChild(props) {
  return (
    <div>
        <h1>Super Child</h1>
        <button onClick={props.super}>Click</button>
    </div>
  )
}

export default SuperChild
import React from 'react'
import SuperChild from './SuperChild'


function ChildComp(props) {
  return (
    <div>
        <h1>Hello Child</h1>
        <button onClick={props.fun}>Click Function</button>
        <SuperChild super={props.fun}/>
    </div>
  )
}

export default ChildComp
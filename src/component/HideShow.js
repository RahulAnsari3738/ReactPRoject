import React ,{useState} from 'react'

function HideShow() {
    const [set,setFun]=useState(true)
  return (

      
    <div>


        {
            set?
            <h1>hello World</h1>
            :null
        }
    {/* <button onClick={()=>setFun(false)}>
  hide
    </button>
    <button onClick={()=>setFun(true)}>
   show
    </button> */}
    <button onClick={()=>setFun(!set)}>view</button>
    </div>
  )
}

export default HideShow
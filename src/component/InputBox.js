import React,{useState}from 'react'

function InputBox() {

    const[eve,setEve]=useState(null)
    const [print,setPrint]=useState(false)

let onChangeHandler = (val) => {
    setEve(val.target.value)
};
let onClickHandler=()=>{

    setPrint(true)
}

  return (
    <div>
      {print?
      <h1>{eve}</h1>
      :null  
    }
        <input type="text" onChange={onChangeHandler}></input>
        <button onClick={onClickHandler}>click</button>
    </div>
  )
}

export default InputBox
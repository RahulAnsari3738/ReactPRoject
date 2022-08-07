import React ,{useState} from 'react'

function BasicForm() {

    const[name,setName]=useState("")
    const[interset,setIntrest]=useState("")
    const[tnc,setTnc]=useState(false)


    let reloadPrevent=(e)=>{
        console.warn(name,interset,tnc)
       e.preventDefault()
    }
  return (
    <div className="container">
      <center>
        <h1>Handling Form Data</h1>
        <form onSubmit={reloadPrevent}>
          <input
            type="text"
            placeholder="Enter Your Name" value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br></br>
          <select onChange={(e) => setIntrest(e.target.value)}>
            <option>Select Optionse</option>
            <option>Marval</option>
            <option>Dc</option>
          </select>
          <br></br>
          <input
            type="checkbox"
            onChange={(e) => setTnc(e.target.checked)}
          ></input>
          <span>Accept Trem and Condation</span>
          <br></br>
          <button>Submit</button>
        </form>
      </center>
    </div>
  );
}

export default BasicForm
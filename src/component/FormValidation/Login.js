import React ,{useState} from 'react'

function Login() {

    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const[emailError,setemailError]=useState(false)
    const[passError,setpassError]=useState(false)




    let emailHandler=(e)=>{
const email=e.target.value;
var mailformat  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (email.match(mailformat)) {
  //   alert("You have entered a valid email address!"); //The pop up alert for a valid email address
  setemailError(false);
} else {
  //   alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
  setemailError(true);
}
setEmail(email)
    }


let passHandler = (e) => {
  const pass = e.target.value;
  console.log(pass);
//    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
if (pass.lenght<8) {
  //   alert("You have entered a valid email address!"); //The pop up alert for a valid email address
  setpassError(true);
} else {
  //   alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
  setpassError(false);
}
setPassword(pass)
};



let onSubmitHandler=(e)=>{
  e.preventDefault()
  if(email<4 || password<8){
  alert("not valid")
  }
  else{
    alert("all good :)")
  }

}


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="emailID"
          style={{
            textAlign: "center",
            borderRadius: "10px",
            height: "5vh",
            width: "20%",
          }}
          onChange={emailHandler}
        ></input>
        {emailError ? <span>Not a valid email</span> : ""}
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="password"
          style={{
            textAlign: "center",
            borderRadius: "10px",
            height: "5vh",
            width: "20%",
          }}
          onChange={passHandler}
        ></input>
        {passError ? <span>Not a valid password</span> : ""}
        <br></br>
        <br></br>
        <button value="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
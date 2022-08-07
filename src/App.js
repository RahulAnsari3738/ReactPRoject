import logo from './logo.svg';
import './App.css';
import InputBox from './component/InputBox';
import HideShow from './component/HideShow';
import BasicForm from './component/BasicForm';
import ConditionRendering from './component/ConditionRendering';
import Login from './component/FormValidation/Login'
import ChildComp from './component/ChildComp';

function App() {
  let mainFun=()=>{
    alert("main Function")
  }
  return (
   <>
   <center>
    {/* <Login/> */}
   {/* <ConditionRendering/> */}
   {/* <InputBox/> */}
   {/* <HideShow/> */}
   {/* <BasicForm/> */}
   <ChildComp fun={mainFun}/>
   </center>
   </>
  );
}

export default App;

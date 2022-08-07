
import React,{useState} from 'react';

function ConditionRendering()
 {
    const [loggin,setLoggin]=useState(true)

return (
<div>

    {/* {loggin==1?
    <h1>Welcome User1</h1>
    :loggin==2?<h1>Welcome User2</h1>:
    <h1>welcome Guset</h1>} */}
    {loggin?<h1>Welcome User</h1>:<h1>Welecom Guset</h1>}
</div>
)

 }

export default ConditionRendering;
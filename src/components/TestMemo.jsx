import { useState } from "react";
import View from "./View";

function TestMemo() {
    const [current,setCurrent] = useState(0);
    const [view,setView] = useState(0);
    return (<>
    view compoenet: =-- <View value={view}/> <br />
    Current Compoent =-- {current}
    <br />
    <button onClick={()=>setCurrent(current+1)}>Update current compoent</button>
    <button onClick={()=>setView(view+1)}>Update view compoent</button>
    
    </>);
}

export default TestMemo;
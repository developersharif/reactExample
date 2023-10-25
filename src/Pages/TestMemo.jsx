import { useState } from "react";
import View from "../components/View";
import AppLayout from "./layout/AppLayout";
import ViewWithmemo from "../components/ViewWithmemo";

function TestMemo() {
    const [current,setCurrent] = useState(0);
    const [view,setView] = useState(0);
    const [memoView,setMemoView] = useState(0);
    return (<>
    <AppLayout>
    1.view compoenet: =-- <View value={view}/> <br />
    2.Current Compoent =-- {current} <br />
    3.usedMemo Component =-- <ViewWithmemo value={memoView}/>
    <br />
    <button onClick={()=>setView(view+1)}>1.Update view compoent</button>
    <button onClick={()=>setCurrent(current+1)}>2.Update current compoent</button>
    <button onClick={()=>setMemoView(memoView+1)}>3.Update UsedMemoView compoent</button>
    </AppLayout>
    </>);
}

export default TestMemo;
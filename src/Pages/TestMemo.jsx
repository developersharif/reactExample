import { useState } from "react";
import View from "../components/View";
import AppLayout from "./layout/AppLayout";
import ViewWithmemo from "../components/ViewWithmemo";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";

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
    <Description>
    React.memo is a higher-order component (HOC) that can be used to optimize the performance of functional components. It's designed for preventing unnecessary re-renders of a component by memoizing it based on its props. When the props of a memoized component don't change, React will reuse the previously rendered result, helping to improve performance.
    <CodeExample code={`
    /*
    Suppose you have a component that renders a list of items, and you want to prevent it from re-rendering when its parent component re-renders. Here's how you can use React.memo to achieve this:
    jsx
    Copy code
    */
    import React from 'react';

    // Create a functional component
    function ItemList({ items }) {
    console.log("ItemList is rendering");
    return (
        <ul>
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    );
    }

    // Memoize the component to prevent unnecessary re-renders
    const MemoizedItemList = React.memo(ItemList);

    function ParentComponent() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ];

    return (
        <div>
        <h1>Items List:</h1>
        <MemoizedItemList items={items} />
        </div>
    );
}`}/>
    </Description>
    </AppLayout>
    </>);
}

export default TestMemo;
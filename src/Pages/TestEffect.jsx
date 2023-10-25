import { useEffect, useState } from "react";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";

function TestEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    alert("UseEffect Hook Called!(With Data Dependency)");
  }, [data]);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });
  return (
    <>
      <AppLayout>
        UseEffect Example here
        <br />
        {count} (Without Dependency)
        <hr />
        {data} (With Dependency)
        <br />
        <button onClick={() => setData(data + 1)}>Click</button>
        <Description>
          useEffect is another essential React hook that allows you to perform
          side effects in your functional components. Side effects can be
          actions like data fetching, DOM manipulation, or subscribing to
          events. useEffect is used to manage these side effects in a
          declarative way, ensuring they occur at the right times during the
          component's lifecycle.
          <CodeExample
            code={`
            
            
            import React, { useState, useEffect } from 'react';

            function DataFetchingApp() {
            const [data, setData] = useState(null);

            useEffect(() => {
                // Use the 'fetch' API to get data from an endpoint
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((result) => setData(result));
            }, []); // The empty array ensures this effect runs only once on component mount

            return (
                <div>
                <h1>Data from API:</h1>
                {data ? (
                    <div>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}
                </div>
  );
}`}
          />
        </Description>
      </AppLayout>
    </>
  );
}

export default TestEffect;

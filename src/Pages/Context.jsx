import { useContext } from "react";
import { DefaultContext } from "../contexts/DefaultContext";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";
import Anchor from "../components/Anchor";

function Context() {
  const globalValues = useContext(DefaultContext);
  function handleClick() {
    globalValues.setData({
      ...globalValues.data,
      isLoading: true,
      data: {
        ...globalValues.data.data,
        user: { ...globalValues.data.data.user, name: "updated name" },
      },
    });
  }
  return (
    <>
      <AppLayout>
      Global State: {globalValues?.data?.data?.user?.name} <br />
      <button onClick={handleClick}>Update Global State</button>
      <Description>
        <Anchor>https://react.dev/reference/react/memo#reference</Anchor>
      The Context API is a feature in React that provides a way to share data between components without having to pass props through every level of the component tree. It's particularly useful for managing global state or sharing configuration settings in an application.
      <CodeExample code={`
      /*
      Suppose you have a theme configuration that you want to make available to various components throughout your application. Here's how you can use the Context API to achieve this:
      jsx
      Copy code
      */
        import React, { createContext, useContext, useState } from 'react';

        // Step 1: Create a context
        const ThemeContext = createContext();

        // Step 2: Create a provider component
        function ThemeProvider({ children }) {
          const [theme, setTheme] = useState('light');

          return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
              {children}
            </ThemeContext.Provider>
          );
        }

        // Step 3: Create a custom hook to access the context
        function useTheme() {
          return useContext(ThemeContext);
        }

        // Component that uses the theme
        function ThemedButton() {
          const { theme, setTheme } = useTheme();

          const toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          };

          return (
            <button onClick={toggleTheme}>
              Toggle Theme (Currently: {theme})
            </button>
          );
        }

        function App() {
          return (
            <ThemeProvider>
              <div>
                <h1>Themed Button</h1>
                <ThemedButton />
              </div>
            </ThemeProvider>
          );
        }`}/>
      </Description>
      </AppLayout>
    </>
  );
}

export default Context;

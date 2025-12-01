import { useEffect, useState } from "react";

import Left from "./left/Left"
import Right from "./right/Right"

function App() {
  
  const [theme, settheme] = useState(() => {
    return localStorage.getItem("theme") || "dark" ;
  })
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Show loading screen for exactly 6 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    
    // Cleanup timer if component unmounts
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  
  useEffect(() => {
    if(theme === "light") {
      document.documentElement.classList.add("light");
    }else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme" , theme)
  } , [theme])
  
  if (loading) {
    return (
      <div id="loading-page" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <img id="loading-image" src="./ALI.gif" alt="Loading..." style={{
          // maxWidth: '200px',
          // maxHeight: '200px'
        }} />
      </div>
    );
  }
  
  return (
    <>
    <section className='container'>
      <span 
      onClick={() => {
        settheme(theme=== "dark" ? "light" : "dark")}}
      className={theme === "dark" ? "icon-moon" : "icon-sun"}></span>
      <Left/>
      <Right/>
    </section>
    </>
  )
}

//TODO:
//FIX:
export default App
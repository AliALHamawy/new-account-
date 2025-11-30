import { useEffect } from "react";
import { useState } from "react";

import Left from "./left/Left"
import Right from "./right/Right"

function App() {
  
  const [theme, settheme] = useState(() => {
    return localStorage.getItem("theme") || "dark" ;
  })
  useEffect(() => {
    if(theme === "light") {
      document.documentElement.classList.add("light");
    }else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme" , theme)
  } , [theme])
  return (
    <>
      <span 
      onClick={() => {
        settheme(theme=== "dark" ? "light" : "dark")}}
      className={theme === "dark" ? "icon-moon" : "icon-sun"}></span>
    <section className='container'>
      <Left/>
      <Right/>
    </section>
    </>
  )
}
//TODO:
//FIX:
export default App
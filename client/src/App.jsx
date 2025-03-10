import React from 'react'
import "./styles/global.css"
import AboutUs from './Components/AboutUs'
import Services from './pages/Services.jsx'
import Homepage from "./pages/Homepage.jsx";

function App (){
    return (
        <>
          <AboutUs />
          <Services />
          <Homepage />
        </>
        
    )
}

  export default App
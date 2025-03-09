import React from 'react'
import "./styles/global.css"
import Homepage from "./Components/Homepage";
import AboutUs from './Components/AboutUs'
import Services from './pages/Services.jsx'

function App (){
    return (
        <>
          <Homepage />
          <AboutUs />
          <Services />
        </>
    )
}

  export default App;

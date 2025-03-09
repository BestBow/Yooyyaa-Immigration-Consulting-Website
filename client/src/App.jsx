import React from 'react'
import "./styles/global.css"
import AboutUs from './Components/AboutUs'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

function App (){
    return (
        <>
          <AboutUs />
          <Services />
          <Contact/>
        </>
        
    )
}

  export default App;
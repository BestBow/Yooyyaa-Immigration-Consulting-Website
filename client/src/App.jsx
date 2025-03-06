import React from 'react'
import AboutUs from './Components/AboutUs'
import './Styles/global.css'

function App() {

  return (
    <>
      <AboutUs />
      <h1 className="flex items-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-400">Yellow header 1</h1>
      <h3>Blue Header</h3>
      <p>Paragraph</p>
      <button>Hello</button>
    </>
  )
}

  export default App;
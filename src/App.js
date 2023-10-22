import React, { Fragment } from 'react'
import "./App.css"
import Calculator from './components/Calculator/Calculator'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Fragment>
      <Calculator/>
      <Footer/>
    </Fragment>
  )
}

export default App

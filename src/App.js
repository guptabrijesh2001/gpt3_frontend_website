import React from 'react'
import {Article,Brand,Cta,Feature,Navbar} from './components'
import {Footer,Blog,Possibility,Features,Whatgpt3,Header} from './containers'
import './App.css'
const App = () => {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
         <Brand/>
         <Whatgpt3/>
         <Features/>
         <Possibility/>
         <Cta/>
         <Blog/>
         <Footer/>
      </div>
    </>
  )
}

export default App

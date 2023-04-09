import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import Ai from '../../assets/Ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis ex porro, sapiente distinctio, eos iste rerum eaque, ratione provident cumque optio voluptas laboriosam. Consectetur, in! Quia quo ullam aperiam?</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type="button">Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people'/>
            <p>1600+ People requested access a visit in last 24 hours.</p>
          </div>
          </div>
          <div className='gpt3__header-image'>
            <img src={Ai} alt='Ai'/>
          </div>
    </div>
  )
}

export default Header

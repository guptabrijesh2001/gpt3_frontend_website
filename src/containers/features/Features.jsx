import React from 'react'
import './Features.css'
import {Feature} from '../../components'
const featuresData=[
  {
  title:'Improving end distrusts instatntly',
  text:'hello nskhnxzkhxz hzxjnx jzkz jsjks kjska x bcmzx zmz'
  },
  {
    title:'Become the tended active',
    text:'hello nskhnxzkhxz hzxjnx jzkz jsjks kjska x bcmzx zmz'
  },
  {
    title:'Message or em nothing',
    text:'hello nskhnxzkhxz hzxjnx jzkz jsjks kjska x bcmzx zmz'
  },
  {
    title:'Really boy law country',
    text:'hello nskhnxzkhxz hzxjnx jzkz jsjks kjska x bcmzx zmz'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize it.Step into Future Today & make it Happpen.
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__features-container'>
          {featuresData.map((currElem,index)=>(
            <Feature title={currElem.title} text={currElem.text} key={currElem.title + currElem.text}/>
          ))}
      </div>
    </div>
  )
}

export default Features

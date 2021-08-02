import React from 'react'

const Title = ({ heading }) => {
  return (
    <div>
      <div className='hero-title'>
        <div className='overlay'>
          <h2>{heading}</h2>
        </div>
      </div>
    </div>
  )
}

export default Title

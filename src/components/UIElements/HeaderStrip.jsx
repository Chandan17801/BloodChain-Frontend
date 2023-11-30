import React from 'react'

function HeaderStrip(props) {
  return (
    <div className="h-20 flex items-center header-gradient">
        <div className='text-2xl text-white pl-6'>

      {props.text}
        </div>
    </div>
  )
}

export default HeaderStrip
import React from 'react'

function HeaderStrip(props) {
  return (
    <div className="h-20 bg-gradient-to-r from-red-800 to-red-500 flex items-center">
        <div className='text-2xl text-white pl-6'>

      {props.text}
        </div>
    </div>
  )
}

export default HeaderStrip
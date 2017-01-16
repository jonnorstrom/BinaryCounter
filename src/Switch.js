import React from 'react'

function Switch({on, index, handleSwitchClick}) {
  return (
    <div className={on === 1 ? 'pink switch' : 'orange switch'}
         onClick={() => handleSwitchClick(index)}>
      <p>{on}</p>
    </div>
  )
}

export default Switch;

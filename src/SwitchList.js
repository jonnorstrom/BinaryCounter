import React from 'react'
import Switch from './Switch'

function SwitchList ({ handleSwitchClick, switches }) {
  return (
    <div className="switch-list">
      {
        switches.map((value, index) => {
          return <Switch
               on={value}
               key={index}
               index={index}
               handleSwitchClick={handleSwitchClick}
             />
        })

      }
    </div>
  )
}

export default SwitchList;

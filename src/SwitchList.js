import React, { Component } from 'react'
import Switch from './Switch'

class SwitchList extends React.Component {

  renderSwitches(switches, handleSwitchClick) {
    return switches.map((value, index) => {
      return <Switch
               on={value}
               key={index}
               index={index}
               handleSwitchClick={handleSwitchClick}
             />
    })
  }

  render(){
    const { switches, handleSwitchClick } = this.props
    return (
      <div className="switch-list">
        {this.renderSwitches(switches, handleSwitchClick)}
      </div>
    )
  }
}

export default SwitchList;

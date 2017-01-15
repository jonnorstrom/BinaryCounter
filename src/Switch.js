import React, { Component } from 'react'
class Switch extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.handleSwitchClick(this.props.index)
  }

  render(){
    const { on, key, handleSwitchClick } = this.props
    return (
        <div className={on === 1 ? 'pink switch' : 'orange switch'} onClick={this.handleClick.bind(this)}>
          <p>{on}</p>
        </div>
    )
  }
}

export default Switch;

import React, { Component } from 'react';
import TotalSum from './TotalSum'
import Switch from './Switch'
import SwitchList from './SwitchList'


class App extends React.Component{
    constructor(props) {
    super(props)

      this.state = {
        switches: [0, 0, 1, 0, 1, 0, 1, 0]
      }
    }

    calculateTotal(){
      var switches = this.state.switches;
      var total = 0;
      for (var i = 0; i < switches.length; i++) {
        if (switches[i] === 1) {
          total += this.valueForIndex(i)
        }
      }

      return total;
    }

    valueForIndex(i){
      return 2**(this.state.switches.length-1-i)
    }

    handleSwitchClick(index) {
        var array  = this.state.switches
        this.state.switches[index] === 1 ? array[index] = 0 : array[index] = 1;

        this.setState({
          switches: array
        })
    }


    makeNewBinaryArray(array, newTotal){
      for (var i = 0; i < array.length; i++) {
        var value = this.valueForIndex(i);
        if (value <= newTotal) {
          array[i] = 1
          newTotal -= value
        }
      }
    }

    handleChange(e) {
      var newTotal = e.target.value;
      var array = new Array(8).fill(0);

      this.makeNewBinaryArray(array, newTotal)

      this.setState({
        switches: array
      })
    }

    render() {
     return (
      <div className="App">
         <TotalSum total={this.calculateTotal()} onChange={this.handleChange.bind(this)}/>
         <p className="directions">(click to toggle the switches, or change the number above)</p>
         <SwitchList
           handleSwitchClick={this.handleSwitchClick.bind(this)}
           switches={this.state.switches}
          />
      </div>
    )}
}

export default App;

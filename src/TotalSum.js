import React, { Component } from 'react';

class TotalSum extends React.Component {
  render() {
    const { total, onChange } = this.props
    return (
      <div className="total-sum">
        <form>
          <label>
            Total: &nbsp;
            <input autofocus value={total} type="text" onChange={onChange}/>
          </label>
        </form>
      </div>
    )
  }
}

export default TotalSum;

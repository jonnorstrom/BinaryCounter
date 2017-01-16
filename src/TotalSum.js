import React from 'react'

function TotalSum({total, onChange}) {
  return(
    <div className="total-sum">
      <form>
        <label>
          Total: &nbsp;
          <input autoFocus value={total} type="text" onChange={onChange}/>
        </label>
      </form>
    </div>
  )
}

export default TotalSum;

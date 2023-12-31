import React from 'react';

//Select number of items to be shown on table
function PaggingNumSelect() {
  return (
    <div className='entries'>
      <span className="text">Show</span>
      <select name="show-entries" id="entries">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span className="text">entries</span>
    </div>
  )
}

export default PaggingNumSelect;

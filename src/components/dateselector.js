import React from 'react';

function handleChange(event) {
  console.log("-- A selection was made for " + event.target.value);
}

export function DateSelector(props) {
  return(
      <div id="dateselector">
        <select onChange={handleChange}>
          <option key="0" value="">( Please select a date )</option>
          <option key="1" value="2016-01-01">2016-01-01</option>
          <option key="2" value="2016-02-01">2016-02-01</option>
          <option key="3" value="2016-03-01">2016-03-01</option>
        </select>
      </div>
    );
}

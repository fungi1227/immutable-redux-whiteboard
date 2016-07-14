import React from 'react';

function handleChange(event) {
  console.log("-- A selection was made for " + event.target.value);
}

export function PersonSelector(props) {
  return(
    <div id="personselector">
      <select onChange={handleChange}>
        <option key="0" value="">( Please select a person )</option>
        <option key="1" value="judy">Judy Bau</option>
        <option key="2" value="kathy">Kathy Cabezas</option>
        <option key="3" value="chad">Chad Davis</option>
      </select>
    </div>
  );
}

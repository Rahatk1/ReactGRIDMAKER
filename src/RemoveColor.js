import React from 'react';

function RemoveColor(props) {
  return (
    <button onClick={props.onRemoveAllColors}>Remove All Colors</button> // creates the button
  );
}

export default RemoveColor; //exports

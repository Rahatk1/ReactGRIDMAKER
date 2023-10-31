import React from 'react';

function RemoveCol({ onRemoveCol }) 
{
  return (
    <div className="remove-col">
      <button onClick={onRemoveCol}>Remove Column</button>
    </div>
  );
}

export default RemoveCol;
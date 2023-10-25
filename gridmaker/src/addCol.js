import React from 'react';

function AddCol({ onAddCol }) {
  return (
    <div className="add-col">
      <button onClick={onAddCol}>Add Column</button>
    </div>
  );
}

export default AddCol;
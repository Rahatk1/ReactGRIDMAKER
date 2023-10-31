import React from 'react';

function RemoveRow({ onRemoveRow }) {
  return (
    <div className="remove-row">
      <button onClick={onRemoveRow}>Remove Row</button>
    </div>
  );
}

export default RemoveRow;
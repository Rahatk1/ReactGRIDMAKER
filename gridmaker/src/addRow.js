import React from 'react';

function AddRow({ grid, setGrid }) //function called when add row button is clicked
{
  const addRow = () => 
  {
    //create new row full of null values, num of cells = num of cells in the row above, or if no row above its set to 1
    const newRow = Array(grid[0] ? grid[0].length : 1).fill(null); //new row created witht he same number of cells as the row before it
    setGrid([...grid, newRow]); //updates the grid w new rows?
  };

  return (
    <div>
      <button onClick={addRow}>Add Row</button> 
    </div> //makes button element
  );
}

export default AddRow;

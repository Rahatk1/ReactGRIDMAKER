import React, { useState } from 'react'; // Import the necessary stuff and below the components from teh files
import './styles.css';
import AddRow from './addRow';
import AddCol from './addCol';
import RemoveRow from './removeRow';
import RemoveCol from './removeCol';
import SelectColor from './selectColor';

function App() 
{
  const [tableData, setTableData] = useState([]); // a state variable tableData (initialized as empty array)

  const handleAddRow = () => //called when addrow is clicked, same explanation for the rest so I won't repeat
  { 
    if (tableData.length === 0) //ADDED THIS ONE TODAY - this checks if tabledata is empty like there are no rows yet
    { 
      setTableData([['square']]);
    } 
    
    else //if ur here that means there ARE rows in the grid
    {
      setTableData([...tableData, Array(tableData[0].length).fill('square')]); 
      //tableData[0].length gets number of cells int he first row of the grid
      //then blah blah.fill('square') creates array with same amount of cells as the first row & fills them all with 'square'
    }
  };

  const handleAddCol = () => 
  {
    const newTableData = tableData.map(row => [...row, 'square']); // new array where ur adding a 'square' value to each row aka a column
    setTableData(newTableData); //Update tableData state so it now includes the new column
  };

  const handleRemoveRow = () => 
  {
    if (tableData.length > 0) //checks if there are any rows in the grid to remove in the first place, if there are then:
    {
      const newTableData = tableData.slice(0, -1); //slice(0, -1) removes the last item aka the last row) from the array and puts it in newTableData
      setTableData(newTableData); //this updates state of tabledata with new array (newTableData) which now has the last row remoed
    }
  };

  const handleRemoveCol = () => 
  {
    if (tableData[0].length > 1) //are there more than one column in the table rn? if yes then enter
    {
      const newTableData = tableData.map(row => [...row.slice(0, -1)]); //new table data same expl as the rest, .map iterates thru the rows, spread operator with the slice creates new row with the last cell removed aka removes a column
      setTableData(newTableData); //update
    } 
    
    else //if there is only one column left to remove in the grid, just update it so it goes back to an empty grid! this fixed the addRow edge case
    {
      setTableData([]); //update state to empty grid
    }
  };

  const handleSelectColor = () =>
  {
    // to be handle to have a prop be sent to handle the choice the user picks
  } 
  
  
  return (
    <div>
      <AddRow onAddRow={handleAddRow} />
      <AddCol onAddCol={handleAddCol} />
      <RemoveRow onRemoveRow={handleRemoveRow} />
      <RemoveCol onRemoveCol={handleRemoveCol} />
      <SelectColor/>
      <table className="table">
        <tbody>
          {tableData.map((row, rowIndex) => (
            // Map through the tableData array to create rows. also for the above lines ur basically rendering the components & passing handleAddXYZ as a prop
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                // Map thru each row to create cells
                <td key={cellIndex} className={cell}></td>
                // not rlly sure what this does but web site gives a bunch of errors without it
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App; // Exportapp comp
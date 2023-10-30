import React, { useState } from 'react'; // Import the necessary stuff and below the components from teh files
import './styles.css';
import AddRow from './addRow';
import AddCol from './addCol';
import RemoveRow from './removeRow';
import RemoveCol from './removeCol';
import SelectColor from './selectColor';
import FillAllCells from './FillAllCells';
import RemoveColor from './RemoveColor'; // Import the new component
import FillAllUncolored from './FillAllUncolored';

function App() 
{
  const [tableData, setTableData] = useState([]); // a state variable tableData (initialized as empty array)

  // i think i should use state for the color selection
  const [colorChoice, setColor] = useState("#FFFFFF");

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
    if (tableData.length > 1) //are there more than one column in the table rn? if yes then enter, why the [0]? its no longer needed, it was causing the error but now it checks the whole array
    {
      const newTableData = tableData.map(row => [...row.slice(0, -1)]); //new table data same expl as the rest, .map iterates thru the rows, spread operator with the slice creates new row with the last cell removed aka removes a column
      setTableData(newTableData); //update
    } 
    
    else //if there is only one column left to remove in the grid, just update it so it goes back to an empty grid! this fixed the addRow edge case
    {
      setTableData([]); //update state to empty grid
    }
  };

  const handleSelectColor = (event) => {
    setColor(event.target.value);
  };

  // Color in all cells in the grid
  const handleFillAllCells = () => {
    const newTableData = tableData.map(row => row.map(cell => ({ ...cell, color: colorChoice }))); // This row basically updates the color of all cells in the table to the currently selected
    setTableData(newTableData); // Update the state component
  };

  // handler func to render user color choice to an click event
  const handleCellClick = (clickedRow, clickedCell) => {
    const updatedTableData = tableData.map((row, rowIndex) =>
      rowIndex === clickedRow ? 
        row.map((cell, cellIndex) =>
          cellIndex === clickedCell ? { ...cell, color: colorChoice } : cell
        ) : row
    );
    setTableData(updatedTableData);
  };
  
  const handleFillAllUncoloredCells = () => 
  {
    const newTableData = tableData.map((row) => //iterate thru each row
      row.map((cell) => //in each row iterate thru each cell
      {
        if (!cell.color || cell.color === "#FFFFFF") //the ! made me feel so smart fr but anyways this is like if the cell color is null or not there aka uncolored
        //update to above condition, rahats remove color updates cell colors to white so fill uncolor should now also be able to color in cells that are white now too
        {
          return { ...cell, color: colorChoice }; //update color based on colorchocie
        }
        return cell;
      })
    );
    setTableData(newTableData); //update as per usual
  };  
  
  //Removes all color
  const handleRemoveColor = () => {
    const clearedTableData = tableData.map(row => row.map(cell => ({ ...cell, color: '#FFFFFF' }))); // Set all cell colors to white
    setTableData(clearedTableData); //update
  };

  return (
    <>
    <h2>Assignment#4 React Gridmaker</h2>
    <h4>Group: Lally Enthusiasts</h4>
      <div className="container">
        <AddRow onAddRow={handleAddRow} />
        <AddCol onAddCol={handleAddCol} />
        <RemoveRow onRemoveRow={handleRemoveRow} />
        <RemoveCol onRemoveCol={handleRemoveCol} />
        <SelectColor value={colorChoice} onChange={handleSelectColor} />
        <FillAllCells onFillAllCells={handleFillAllCells} />
        <RemoveColor onRemoveAllColors={handleRemoveColor} />      <FillAllUncolored onFillAllUncoloredCells={handleFillAllUncoloredCells} />
      </div>
      
      <table className="table">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ border: '1px solid black', backgroundColor: cell.color, width: '34px', height: '34px' }}
              onClick={() => handleCellClick(rowIndex, cellIndex)}></td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </>

  );
}

export default App; // Exportapp comp
import React, { useState } from 'react';
import './styles.css';
import AddRow from './addRow';
import AddCol from './addCol';
import RemoveRow from './removeRow';
import RemoveCol from './removeCol';
import SelectColor from './selectColor';
import FillAllCells from './FillAllCells';
import RemoveColor from './RemoveColor';
import FillAllUncolored from './FillAllUncolored';
import debounce from 'lodash/debounce'; // Import debounce

function App() {
  const [tableData, setTableData] = useState([]);
  const [colorChoice, setColor] = useState("#FFFFFF");
  const [fillMode, setFillMode] = useState("default");
  
  const handleAddRow = () => {
    if (tableData.length === 0) {
      setTableData([['square']]);
    } else {
      const newRow = Array(tableData[0].length).fill('square');
      setTableData([...tableData, newRow]);
    }
  };

  const handleAddCol = () => {
    if (tableData.length === 0) {
      setTableData([['square']]);
    } else {
      const newTableData = tableData.map(row => [...row, 'square']);
      setTableData(newTableData);
    }
  };

  const handleRemoveRow = () => {
    if (tableData.length > 0) {
      const newTableData = tableData.slice(0, -1);
      setTableData(newTableData);
    }
  };

  const handleRemoveCol = () => {
    if (tableData.length > 0 && tableData[0].length > 1) {
      const newTableData = tableData.map(row => [...row.slice(0, -1)]);
      setTableData(newTableData);
    } else {
      setTableData([]);
    }
  };

  const handleSelectColor = (event) => {
    setColor(event.target.value);
  };

  const handleFillAllCells = () => {
    const newTableData = tableData.map(row => row.map(cell => ({ ...cell, color: colorChoice })));
    setTableData(newTableData);
  };






  const handleCellClick = (clickedRow, clickedCell) => {
    const targetColor = tableData[clickedRow][clickedCell].color;
    let updatedTableData = [...tableData];
  
    if (fillMode === 'default') {
      // In "default" mode, change the color of the clicked cell only
      updatedTableData[clickedRow] = [...updatedTableData[clickedRow]];
      updatedTableData[clickedRow][clickedCell] = { ...updatedTableData[clickedRow][clickedCell], color: colorChoice };
    } else if (fillMode === 'fill') {
      // In "fill" mode, fill adjacent cells with the same color using an iterative approach
  
      const stack = [[clickedRow, clickedCell]];
      const visited = new Set();
  
      while (stack.length > 0) {
        const [row, cell] = stack.pop();
        if (visited.has(`${row}-${cell}`)) continue;
        visited.add(`${row}-${cell}`);
  
        if (
          row >= 0 &&
          cell >= 0 &&
          row < updatedTableData.length &&
          cell < updatedTableData[0].length &&
          updatedTableData[row][cell].color === targetColor
        ) {
          updatedTableData[row] = [...updatedTableData[row]];
          updatedTableData[row][cell] = { ...updatedTableData[row][cell], color: colorChoice };
  
          stack.push([row + 1, cell]);
          stack.push([row - 1, cell]);
          stack.push([row, cell + 1]);
          stack.push([row, cell - 1]);
        }
      }
    }
  
    setTableData(updatedTableData);
  };
  
  
  
  
  
  

  const handleFillAllUncoloredCells = () => {
    const newTableData = tableData.map((row) =>
      row.map((cell) => {
        if (!cell.color || cell.color === "#FFFFFF") {
          return { ...cell, color: colorChoice };
        }
        return cell;
      })
    );
    setTableData(newTableData);
  };

  const handleRemoveColor = () => {
    const clearedTableData = tableData.map(row =>
      row.map(cell => ({ ...cell, color: '#FFFFFF' }))
    );
    setTableData(clearedTableData);
  };

  const handleToggleFillMode = () => {
    setFillMode(fillMode === 'default' ? 'fill' : 'default');
  };

  const debouncedHandleCellClick = debounce(handleCellClick, 100); // Adjust the delay as needed


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
        <RemoveColor onRemoveAllColors={handleRemoveColor} />
        <FillAllUncolored onFillAllUncoloredCells={handleFillAllUncoloredCells} />
        <button onClick={handleToggleFillMode}>
          Toggle Fill Mode: {fillMode === 'default' ? 'Default' : 'Fill'}
        </button>
      </div>

      <table className="table">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ border: '1px solid black', backgroundColor: cell.color, width: '34px', height: '34px' }}
                  onClick={() => debouncedHandleCellClick(rowIndex, cellIndex)} // Use the debounced function
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

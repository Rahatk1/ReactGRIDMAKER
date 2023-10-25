// import React, { useState } from 'react'; ///imports modules needed fromn react and
// import AddRow from './addRow'; // import AddRow

// function App() {
//   const [grid, setGrid] = useState([[]]); //empty grid? empty array?

//   return (
//     <div className="App">
//       <AddRow grid={grid} setGrid={setGrid} /> {/* passes grid and setGrid to AddRow so u can add*/}
//       <table>
//         <tbody>
//           {grid.map((row, rowIndex) => ( //loop thru the rwos and then tr is new row 
//             <tr key={rowIndex}>
//               {row.map((cell, cellIndex) => ( //loop thru cells in that row
//                 <td key={cellIndex}>{cell}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// export default App;


import React, { useState } from 'react'; // Import the necessary stuff and below the components from teh files
import './styles.css'; 
import AddRow from './addRow'; 
import AddCol from './addCol';
import RemoveRow from './removeRow';

function App() {
  const [tableData, setTableData] = useState([]); // a state variable tableData (initialized as empty array)

  const handleAddRow = () => { //called when addrow is clicked
    setTableData([...tableData, Array(tableData[0] ? tableData[0].length : 1).fill('square')]);
    // adding new row (anotha array filled with 'square' vals)
    // num of cells matches num of cells in the new row but if there are no cells in the first place, u just add one
  };

  const handleAddCol = () => { //called when addcol is clicked
    const newTableData = tableData.map(row => [...row, 'square']);
    // new array where ur adding a 'square' value to each row aka a column
    setTableData(newTableData);
    // Update tableData state so it now includes the new column
  };

  const handleRemoveRow = () => //new func
  { 
    if (tableData.length > 0) //checks if there are any rows in the grid to remove in the first place
    {
      const newTableData = [...tableData]; //... is called the spread operator, in javascript it copies an array into another and here it does that and makes a new table element so u dont modify the og state
      newTableData.pop(); //like pop in a linked list, this pop also removes the last but from the new array we created (which is a copy from the og)
      setTableData(newTableData); //this updates state of tabledata with new array which now has the last row remoed
    }
  };

  return (
    <div>
      <AddRow onAddRow={handleAddRow} />
      <AddCol onAddCol={handleAddCol} />
      <RemoveRow onRemoveRow={handleRemoveRow} />
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

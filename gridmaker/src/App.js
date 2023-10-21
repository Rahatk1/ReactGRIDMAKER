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


import React, { useState } from 'react'; //imports necessary stuff from react
import './styles.css'; // imports CSS file
import AddRow from './addRow'; // imports AddRow component

function App() 
{
  const [tableData, setTableData] = useState([]); //variable tableData holds grid (initially empty) & useState creates/manages state

  const handleAddRow = () => //func
  {
    setTableData([...tableData, ['square']]); //updates grid and adds a new sq everyime the button is clicked
  };


  
  return (
    <div>
      <AddRow onAddRow={handleAddRow} />
      <table className="table">
        <tbody> 
          {tableData.map((row, rowIndex) => ( //iterates thru each row, maps each row to JSX element
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => ( //iterates thru each cell (?), maps each cell to JSX element too
                <td key={cellIndex} className={cell}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
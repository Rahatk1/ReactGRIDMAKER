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


import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import AddRow from './addRow'; // Import the AddRow component

function App() {
  const [tableData, setTableData] = useState([]);

  const handleAddRow = () => {
    setTableData([...tableData, ['square']]);
  };


  
  return (
    <div>
      <AddRow onAddRow={handleAddRow} />
      <table className="table">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
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
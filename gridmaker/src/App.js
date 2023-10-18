// export default function Square() {
//   return <button className="square">z</button>;
// }

import Square from './addRow'; // Ensure the correct path

export default function App() {
  return (
    <div className="App">
      <Square /> {/* Render the Circle component */}
    </div>
  );
}

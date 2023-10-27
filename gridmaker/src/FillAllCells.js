import React from 'react'; //imports react

function FillAllCells(props) {
  return (
    <button onClick={props.onFillAllCells}>Color All Cells</button> //create a button when te button is clicked onFillAllcells is passed into as props 
  );
}

export default FillAllCells; // Exports FillALLCells
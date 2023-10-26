import React from "react";

function SelectColor(props) {

    // props.colorChoice("woww im a child :)")

    // const element = document.getElementById("colorPicker").value;

    // current undefined
    console.log(props.colorChoice);
    return (
        <div>
             <input type="color" value={props.colorChoice}  id="colorPicker" onChange={e => setColor(e.target.value)}></input>
        </div>
    )
}

export default SelectColor;
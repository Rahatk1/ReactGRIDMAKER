import React from "react";

function SelectColor(props) {

    return (
        <div className="select-color">
             <input type="color" value={props.value} onChange={props.onChange}></input>
        </div>
    )
}

export default SelectColor;
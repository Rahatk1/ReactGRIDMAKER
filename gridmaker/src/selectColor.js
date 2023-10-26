import React from "react";

function SelectColor() {
    return (
        <div>
            <select id="colorPicker">
            <option value="select">SELECT</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
        </div>
    )
}

export default SelectColor;
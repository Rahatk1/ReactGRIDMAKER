import React from "react";

function RetrieveColor(props) {

    return (
        <div>
             <input type="color" value={props.value} onChange={props.onChange}></input>
        </div>
    )
}

export default RetrieveColor;
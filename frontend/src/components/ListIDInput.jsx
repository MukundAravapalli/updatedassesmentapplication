import React from "react";

function ListIDInput(props){
    return(
        <div>
            <h2>Enter Query</h2>
            <form action = "http://127.0.0.1:5000/queries" method = "POST">
            <p><strong>Input Query</strong></p>
            {/* <input type= "text" name="inputQuery"></input> */}
            <textarea name="inputQuery" rows="4" cols="50"></textarea>
            <p><input type="submit" value="Enter"></input></p>
            </form>
        </div>
    );
}

export default ListIDInput;
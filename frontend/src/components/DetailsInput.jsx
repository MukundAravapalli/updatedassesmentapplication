import React from "react";

function DetailsInput(props){
    return(
        <div>
            <form action = "http://127.0.0.1:5000/details" method = "POST">
                <p><strong>Input List of IDs</strong></p>
                <small>Enter just the ID numbers, and seperate each one by a comma</small>
                <br></br>
                {/* <input type="text" name="idList"></input> */}
                <textarea name="idList" rows="4" cols="50"></textarea>
                <p><input type="submit" value="Enter"></input></p>
            </form>
        </div>
    )
}

export default DetailsInput;
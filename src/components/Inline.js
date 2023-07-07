// Inline CSS

import React from "react";

const heading = {
    fontSize: "70px",
    color: "tomato",
};

function Inline() {
    return (
        <div>
            <h3 style={heading}>Femini</h3>
        </div>
    );
}

export default Inline;

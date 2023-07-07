import React from "react";

function ChildComponent(props) {
    return (
        <div>
            {/* fetching methods from ParentClass in the form of props */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* passing parameters from child to parent */}
            <button onClick={() => props.greetHandler("TrueBlood", "MudBlood")}>
                Greet Parent
            </button>
        </div>
    );
}

export default ChildComponent;

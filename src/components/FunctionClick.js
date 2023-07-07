// function component 'Event Handling'

import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Just Did It");
  }

  return (
    <div>
      <button onClick={clickHandler}>Just Click It!</button>
    </div>
  );
}

export default FunctionClick;

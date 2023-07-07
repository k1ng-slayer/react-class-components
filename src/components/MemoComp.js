// Memo Component is similar to Pure Components but applicable in Functional Components

import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return <>{name}</>;
}

export default React.memo(MemoComp);

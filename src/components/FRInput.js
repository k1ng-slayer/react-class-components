// Forward Ref Input file

import React from "react";

// function FRInput() {
//   return (
//     <>
//       <input type="text"></input>
//     </>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
});

export default FRInput;

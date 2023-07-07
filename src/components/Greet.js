// use of 'props' in passing multiple

import React from "react";

// without using JSX
// const Greet = () => {
//   return React.createElement(
//     "div",
//     { id: "hello", className: "dummyClass" },
//     React.createElement("h1", null, "Hello without JSX")
//   );
// };

const Greet = (props) => {
    const { fname, lname } = props;

    return (
        <>
            <h3 className="dummyClass">
                {/* Hello with JSX, {props.fname} freakin' {props.lname} */}
                Hello with JSX, {fname} freakin' {lname}
            </h3>
            {props.children}
        </>
    );
};

export default Greet;

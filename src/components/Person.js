// List rendering

import React from "react";

function Person({ person }) {
    return (
        <p>
            My name is {person.name}. My age is {person.age} and I play{" "}
            {person.position}
        </p>
    );
}

export default Person;

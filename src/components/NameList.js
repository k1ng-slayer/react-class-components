// list rendering

import React from "react";
import Person from "./Person";

function NameList() {
    const names = ["Leo", "Ilkay", "Joao", "Inigo", "Endrick"];

    const nameList = names.map((name, index) => (
        <h3 key={index}>
            {index}. {name}
        </h3>
    ));

    const persons = [
        {
            id: 1,
            name: "Leo",
            age: 34,
            position: "CAM",
        },
        {
            id: 2,
            name: "Ilkay",
            age: 32,
            position: "CM",
        },
        {
            id: 3,
            name: "Joao",
            age: 27,
            position: "RWB",
        },
        {
            id: 4,
            name: "Inigo",
            age: 31,
            position: "CB",
        },
        {
            id: 5,
            name: "Vitor",
            age: 17,
            position: "CF",
        },
    ];

    const personList = persons.map((person) => (
        <Person key={person.id} person={person} />
    ));

    return (
        <>
            {nameList}
            {personList}
        </>
    );
}

export default NameList;

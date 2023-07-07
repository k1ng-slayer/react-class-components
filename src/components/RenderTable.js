import React, { Component } from "react";

class RenderTable extends Component {
  render() {
    const data = [
      { id: 1, name: "Michael", experience: 10, job_profile: "Manager" },
      { id: 2, name: "Jim", experience: 5, job_profile: "Sales" },
      { id: 3, name: "Pam", experience: 2, job_profile: "Receptionist" },
      { id: 4, name: "Dwight", experience: 7, job_profile: "Sales" },
    ];

    return (
      <>
        <h3>RenderTable</h3>
        <b>The Office</b>
        <table style={{ border: "1px solid" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Role</th>
          </tr>

          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.experience}</td>
              <td>{item.job_profile}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

export default RenderTable;

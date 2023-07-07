import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
            topic: "laliga",
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value, //'event.target.value' => to make the textbox work
        });
    };

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value,
        });
    };

    handleSubmit = (event) => {
        alert(
            `${this.state.username} says, "${this.state.comments}" ~ ${this.state.topic} player`
        );
        event.preventDefault();
    };

    render() {
        const { username, comments, topic } = this.state;

        // styling
        const Style = {
            padding: "7.5px",
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <div style={Style}>
                    <label style={Style}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUsernameChange}
                        style={Style}
                    />
                </div>
                <div style={Style}>
                    <label style={Style}>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                        style={Style}
                    />
                </div>
                <div style={Style}>
                    <label style={Style}>League</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="EPL">EPL</option>
                        <option value="La Liga">La Liga</option>
                        <option value="Bundesliga">Bundesliga</option>
                    </select>
                </div>
                <button type="submit" style={Style}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;

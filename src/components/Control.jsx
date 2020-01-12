import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode("create");
            }}
          >
            create
          </a>
        </li>

        <li>
          <a
            href="/update"
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode("update");
            }}
          >
            update
          </a>
        </li>

        <li>
          <input
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }}
            type="button"
            value="delete"
          ></input>

        </li>
        
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onChangeMode("delete")}
        >  remove
        </button>
      </ul>
    );
  }
}

export default Control;

import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
// import { render } from "@testing-library/react";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      welcome: { title: "welcome", desc: "hello! React!!" },
      subject: { title: "WEB!!!", sub: "world wide web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is ..." },
        { id: 2, title: "CSS", desc: "CSS is ..." },
        { id: 3, title: "Javascript", desc: "Javascript is ..." }
      ]
    };
  }

  getReadContent() {
    const data = this.state.contents.filter(
      content => content.id === this.state.selected_content_id
    )[0];
    return data;
  }

  createArticle = (title, desc) => {
    const new_id = this.max_content_id + 1;
    this.max_content_id = new_id;
    this.setState({
      contents: [...this.state.contents, { id: new_id, title, desc }],
      mode: "read",
      selected_content_id: new_id
    });
  };

  updateArticle = (id, title, desc) => {
    var contents = Array.from(this.state.contents);
    contents.splice(id - 1, 1, { id, title, desc });
    this.setState({
      contents,
      mode: "read"
    });
  };

  deleteArticle = mode => {
    if (mode === "delete") {
      if (window.confirm("really?")) {
        const contents = this.state.contents.filter(c => c.id !== this.state.selected_content_id);
        this.setState({ mode: "welcome", contents });
      }
    } else {
      this.setState({ mode });
    }
  };

  getContent() {
    var currentArticle = null;

    if (this.state.mode === "welcome") {
      const { title, desc } = this.state.welcome;
      currentArticle = <ReadContent title={title} desc={desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      currentArticle = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      currentArticle = (
        <CreateContent onSubmit={this.createArticle}></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      currentArticle = (
        <UpdateContent
          data={_content}
          onSubmit={this.updateArticle}
        ></UpdateContent>
      );
    }
    return currentArticle;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: "welcome" });
          }}
        ></Subject>

        <TOC
          onChangePage={id => {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }}
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={this.deleteArticle}
        ></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import { render } from '@testing-library/react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB!!!", sub:"world wide web"}
    }
  }

  render() {
  return (

    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      <Subject title="React" sub="for UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is ... "></Content>
    </div>
  );
    
  }
}



export default App;

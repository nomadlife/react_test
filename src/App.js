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
      mode:"welcome",
      welcome:{title:"welcome",desc:"hello! React!!"},
      subject:{title:"WEB!!!", sub:"world wide web"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is ..."},
        {id:2, title:"CSS", desc:"CSS is ..."},
        {id:3, title:"Javascript", desc:"Javascript is ..."}
  ]
    }
  }

  render() {
    var _title, _desc;
    if(this.state.mode == 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if (this.state.mode == 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  return (
    <div className="App">
      <Subject 
      title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function(){
        this.setState({mode:'read'});
      }.bind(this)}></Subject>

      {/* <header>
            <h1><a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              this.setState({
                mode:"read"
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
      <Subject title="React" sub="for UI"></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
    
  }
}



export default App;

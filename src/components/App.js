import React, { Component } from 'react';
import Sidebar from './partial/SidebarComp'
import Header from './partial/Header'
import Main from '../routes/index'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div className="page-wrapper">
	        <Header/>
	        <Main/>
	     </div>
      </div>
    );
  }
}

export default App;

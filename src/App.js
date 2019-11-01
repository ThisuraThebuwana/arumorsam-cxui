import React, { Component } from 'react';
import './App.css';
import SiteHeader from "./components/SiteHeader";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteBody from "./components/SiteBody";

class App extends Component {
  render() {
      ReactDOM.render(<SiteHeader/>,document.getElementById('siteHeader'));
      ReactDOM.render(<SiteBody/>,document.getElementById('siteBody'));

    return (
      <div className="App">
        SiteBody
      </div>
    );
  }
}

export default App;

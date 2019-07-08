import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <a>LOGO</a> 
          <div>
            <a>MLB</a>
            <a>NBA</a>
          </div>
        </div>
        <div>
          {/* <MLB />
          <NBA /> */}
        </div>
      </>
    )
  }
}

export default App

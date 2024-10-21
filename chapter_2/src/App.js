import React, { Component } from 'react';
import Products from './Products';

class App extends Component {

  formatName(users) {
    return users.firstName + " " + users.lastName;
  }

  render() {
    // const users = {
    //   firstName: "Juan",
    //   lastName: "Badenhorst",
    // };


    return (<div>
      {/* <h1>My Frist React App</h1> */}
      <Products />
      {/* <h1>Hello, {this.formatName(users)}!</h1> */}
    </div>
    );
  }

}

export default App;

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: 'super simple demo'
    };
  }

  render() {
    return (
      <div>{this.state.info}</div>
    );
  }
}

export default App;

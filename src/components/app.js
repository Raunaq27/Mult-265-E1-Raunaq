import React from 'react';

// import Game from './Game';

class App extends React.Component {
  render() {
    return <Game randomCount={6} intialSec={10} />;
  }
}
import Game from './Game';
export default App;

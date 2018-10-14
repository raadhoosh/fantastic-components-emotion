import * as React from 'react';
import { Alert } from './components';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Alert margin={'5px'} primary={true} > This is a primary alert it out! </Alert>
      </div>
    );
  }
}

export default App;

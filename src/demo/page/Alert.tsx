import * as React from 'react';
import { Alert, Code } from './../../components';

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>
          Alerts
        </h1>
        <p>
          Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
        </p>
        <h2>
          Examples
        </h2>
        <p>
          <Alert margin={'5px'} primary={true} > This is a primary alert it out! </Alert>
          <Alert margin={'10px'} secondary={true} > This is a secondary alert it out! </Alert>
          <Alert margin={'10px'} warning={true} > This is a warning alert it out! </Alert>
          <Alert margin={'10px'} light={true} > This is a light alert it out! </Alert>
          <Alert margin={'10px'} success={true} > This is a success alert it out! </Alert>
          <Alert margin={'10px'} info={true} > This is a info alert it out! </Alert>
          <Alert margin={'10px'} danger={true} > This is a danger alert it out! </Alert>
        </p>
        <Code>
          {"<Alert margin={'10px'} danger={true} > This is a danger alert it out! </Alert>"}
        </Code>
      </div>
    );
  }
}

export default App;

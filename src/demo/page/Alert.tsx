import * as React from 'react';
import { Alert, Code, Card, CardBody, Button, CardFooter } from './../../components';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hide: false
    };
  }
  onPress = () => {
    this.setState({
      hide: !this.state.hide
    });
  }
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
          Alerts are available for any length of text, as well as an optional dismiss button.
        </p>
        <Card bgColor="#fff">
          <CardBody>
            <Alert primary > This is a primary alert it out! </Alert><br />
            <Alert secondary > This is a secondary alert it out! </Alert><br />
            <Alert warning > This is a warning alert it out! </Alert><br />
            <Alert light > This is a light alert it out! </Alert><br />
            <Alert success > This is a success alert it out! </Alert><br />
            <Alert info > This is a info alert it out! </Alert><br />
            <Alert danger > This is a danger alert it out! </Alert><br />
          </CardBody>
        </Card>
        <Code>
          {`
           <Alert primary > This is a primary alert it out! </Alert>

           <Alert secondary > This is a secondary alert it out! </Alert>

           <Alert warning > This is a warning alert it out! </Alert>

           <Alert light > This is a light alert it out! </Alert>

           <Alert success > This is a success alert it out! </Alert>

           <Alert info > This is a info alert it out! </Alert>

           <Alert danger > This is a danger alert it out! </Alert>

          `}
        </Code>
        <h2>
          Additional content
        </h2>
        <p>
          Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
        </p>
        <Card bgColor="#fff">
          <CardBody>
            <Alert success>
              <h4>Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr className="hr" />
              <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </Alert>
          </CardBody>
        </Card>
        <Code>
          {`
        <Alert success>
            <h4>Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
          `}
        </Code>
        <h2>
          Hide | Show
        </h2>
        <p>
          You can see this in action with a live demo:
        </p>
        <Card bgColor="#fff">
          <CardBody>
            <Alert warning hide={this.state.hide}>
              This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
            </Alert>
            <CardFooter>
              <Button primary onClick={this.onPress}> <span aria-hidden="true">{this.state.hide ? 'Show' : 'Hide'}</span></Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Code>
          {`
         <Alert warning hide={this.state.hide}>
            This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
         </Alert>
          `}
        </Code>
      </div>
    );
  }
}

export default App;

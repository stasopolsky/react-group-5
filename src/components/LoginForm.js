import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as sessionOperations from '../redux/session/sessionOperations';

class LoginForm extends Component {
  state = { name: '', email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Label>
          Name
          <Input name="name" value={name} onChange={this.changeHandler} />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />
        </Label>

        <Button label="Log In" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);

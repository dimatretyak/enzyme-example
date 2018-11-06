import React from 'react';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <form action="/" method="POST">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <input type="submit" value="Log in" />
      </form>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Img } from '../common';
import { signin } from '../../actions/user';
import logo from '../../assets/images/logo.svg';

export class Login extends Component {
  state = {
    errors: {},
    loading: false,
    message: '',
    form: {
      email: '',
      password: ''
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState({
      message: nextProps.message,
      errors: { ...errors, ...nextProps.errors }
    });

    return nextProps.message && this.setState({ form: {} });
  };

  handleChange = (e) => {
    const form = { [e.target.name]: e.target.value };

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        ...form
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { form } = this.state;
    const { signin } = this.props;
    signin(form);
  };

  render = () => {
    const { form } = this.state;
    const { loading, errors, message, logged } = this.props;

    return (
      <section>
        {(errors && errors.message && (
          <div className="message error">{errors.message}</div>
        ))
          || (message && (
            <div className="message info">{message}</div>
          ))
          || ''}
        {logged ? (<div className="message success">Your account has been created successfully. <Link className="bold text-white" to="/">Click here</Link> to go to homepage</div>) : ''}
        <div className="row">
          <div className="container">
            <div className="s4 m4 l6">
              <div className="xl-padding move-1">
                <div className="row center-align">
                  <br />
                  <Link to="/">
                    <div className="image move-2">
                      <Img id="app-logo" src={logo} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        {/* Login box */}
        <div className="clear" />
        <div className="box white text-indigo radius-2 shadow-5">
          <div id="user-signin" className="smooth-shadow atm">
            <form onSubmit={this.handleSubmit}>
              <br />
              <h1 className="center-align">Login</h1>
              <div className="input-field">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={form.email}
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-field text-center">
                <Button type="submit" className="btn indigo linkHover text-white bold radius-6 m-text l-padding" loading={loading}>
                  Login now
                </Button>
                <span>
                  Not a member yet? <Link to="/register" className="bold">Register</Link>
                </span>
              </div>
              <br />
            </form>
          </div>
        </div>
      </section>
    );
  };
}

Login.propTypes = {
  loading: PropTypes.bool,
  signin: PropTypes.func,
  errors: PropTypes.object,
  message: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = ({ user: { signin: { loading, message, errors, logged } } }) => ({
  loading,
  message,
  errors,
  logged
});

export default connect(
  mapStateToProps,
  { signin }
)(Login);

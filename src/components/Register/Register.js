import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Button, Img } from '../common';
import { signup } from '../../actions/user';

export class Register extends Component {
  state = {
    form: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    registered: false,
    errors: {},
    loading: false,
    message: ''
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
    const { signup } = this.props;
    signup(form);
  };

  render = () => {
    const { form } = this.state;
    const { loading, errors, message, registered } = this.props;
    return (
      <section>
        {(errors && errors.message && (
          <div className="message error">{errors.message}</div>
        ))
          || (message && (
            <div className="message info">{message}</div>
          ))
          || ''}
        {registered ? (<div className="message success">Your account has been created successfully. <Link className="bold text-white" to="/login">Click here</Link> to sign in</div>) : ''}
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
        {/* Register box */}
        <div className="clear" />
        <div className="box white text-indigo radius-2 shadow-5">

          <form id="register" onSubmit={this.handleSubmit}>
            <br />
            <h1 className="center-align">Register</h1>
            <div className="clear" />
            <div className="input-field">
              <label htmlFor="firstname">
                Your first name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={form.firstname}
                onChange={this.handleChange}
                required={true}
                minLength={2}
                placeholder="first name..."
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">
                Your last name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={form.lastname}
                onChange={this.handleChange}
                required={true}
                minLength={2}
                placeholder="last name..."
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">
                Your email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={this.handleChange}
                required={true}
                minLength={4}
                placeholder="Your email"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">
                Password <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={form.password}
                onChange={this.handleChange}
                required={true}
                minLength={4}
                placeholder="type your password"
              />
            </div>
            <br />
            <div className="input-field text-center">
              <Button type="submit" className="btn indigo linkHover text-white bold radius-6 m-text l-padding" loading={loading}>
                Register now
              </Button>
              <span>
                Already have an account? <Link to="/login" className="bold">Log in</Link>
              </span>
            </div>
            <br />
          </form>
        </div>
      </section>
    );
  };
}

Register.propTypes = {
  loading: PropTypes.bool,
  signup: PropTypes.func,
  errors: PropTypes.object,
  message: PropTypes.string,
  registered: PropTypes.bool
};

const mapStateToProps = ({ user: { signup: { loading, message, errors, registered } } }) => ({
  loading,
  message,
  errors,
  registered
});

export default connect(
  mapStateToProps,
  { signup }
)(Register);

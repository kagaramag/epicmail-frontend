const checkUser = require('../../helpers/checkUser')();

module.exports = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  signup: {
    loading: false,
    registered: false,
    message: '',
    errors: {}
  },
  signin: {
    loading: false,
    logged: false,
    message: '',
    errors: {}
  }
};

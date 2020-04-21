require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DB',
  },
  production: {
    use_env_variable: 'DB',
  },
};

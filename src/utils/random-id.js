const randomString = require('randomstring');

module.exports = (prefix) => (
  (prefix ? `${prefix}_` : '')
    + randomString.generate({
      length: 12,
      // eslint-disable-next-line no-secrets/no-secrets
      charset: '23456789abcdefghijkmnpqrstuvwxyz',
    })
);

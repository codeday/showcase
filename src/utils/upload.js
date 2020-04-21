const Uploader = require('@codeday/uploader-node');
const config = require('../config');

module.exports = Uploader(config.uploader.url, config.uploader.secret);

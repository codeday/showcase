module.exports.db = process.env.DB;
module.exports.uploader = {
  url: process.env.UPLOADER_URL,
  secret: process.env.UPLOADER_SECRET || null,
};
module.exports.auth0 = {
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
};

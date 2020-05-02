module.exports.db = process.env.DB;
module.exports.uploader = {
  url: process.env.UPLOADER_URL,
  secret: process.env.UPLOADER_SECRET || null,
};
module.exports.apollo = {
  audience: process.env.APOLLO_AUDIENCE,
  issuer: process.env.APOLLO_ISSUER,
};

exports.Image = {};
exports.Image.original = ({ url }) => url;
exports.Image.crop = ({ urlResize }, { size: { width, height } }) => urlResize
  .replace('{width}', width)
  .replace('{height}', height);

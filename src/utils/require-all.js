/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { gql } = require('apollo-server');

const processors = {
  '.gql': (file) => gql(fs.readFileSync(file).toString()),
  '.js': (file) => require(file),
};

const requireAll = (dir, ignore) => fs
  .readdirSync(dir)
  .map((fileName) => {
    const file = path.join(dir, fileName);
    if (ignore && file === ignore) return [];
    if (fs.lstatSync(file).isDirectory()) return requireAll(file);

    const ext = path.extname(file);
    return [
      ext in processors
        ? processors[ext](file)
        : fs.readFileSync(file).toString(),
    ];
  })
  .reduce((a, b) => [...a, ...b], [])
  .filter((a) => a);

module.exports = (includingFile) => requireAll(path.dirname(includingFile), includingFile);

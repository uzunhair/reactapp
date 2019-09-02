const { EOL } = require('os');

module.exports = function baseContent(entity, naming) {

  const fileName = naming.stringify(entity);
  const className = fileName[0].toUpperCase() + fileName.substring(1);

  return [
    'import React, { Component } from \'react\';',
    '',
    `export default class ${className} extends Component {`,
    '',
    '  render() {',
    '',
    '    return (',
    `      <div className="${fileName}">`,
    '       ',
    '      </div>',
    '    )',
    '  }',
    '}',
].join(EOL);
};

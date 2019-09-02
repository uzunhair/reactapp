const { EOL } = require('os');

module.exports = function baseContent(entity, naming) {

  const fileName = naming.stringify(entity);
  const className = fileName[0].toUpperCase() + fileName.substring(1);

  return [
    `import ${className} from './${fileName}';`,
    '',
    `export default ${className};`
  ].join(EOL);
};
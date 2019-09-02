const { rename } = require('fs');
const create = require('bem-tools-create');
const createBemApi = require('readline-sync');

const bemFolder = 'src/component/';

// Название блока
const blockName = createBemApi.question('Enter block name ');

if (blockName) {
  // полный путь к создаваемой папке блока
  const blockPath = `${bemFolder}${blockName}`;

  console.log(`Создание блока ${blockPath}`); // eslint-disable-line no-console
  create(blockPath);
  console.log(blockPath);
  setTimeout(() => {
    rename(`${blockPath}/${blockName}.index.js`, `${blockPath}/index.js`, function(err) {
      if ( err ) console.log('ERROR: ' + err);
    });
  }, 100);

} else {
  console.log('Отмена операции: не указан блок'); // eslint-disable-line no-console
}

const path = require('lessons/path');

console.log('Склеить участки пути', path.join(__dirname, 'first', 'second', 'third'));
console.log('Получить путь до файла включительно', path.join(__filename));
console.log('Получить абсолютный путь', path.resolve('first', 'second', 'third'));
console.log('Получить абсолютный путь', path.resolve('/first', '/second', '/third'));
const fullpath = path.join(__dirname, 'first', 'second', 'third.js');
console.log('Парсинг пути', path.parse(fullpath))
console.log('разделитель в ОС', path.sep)
console.log('проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))

// ---------------------------------------------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)

console.log(url)
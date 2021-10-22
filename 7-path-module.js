const path = require('path');

console.log(path.sep);

const filepath = path.join('./content/', 'subfolder/', 'test.txt');
console.log(filepath);

const basepath = path.basename(filepath);
console.log(basepath);

// const absolute = path.resolve(__dirname, 'content/', 'subfolder/', 'tests.txt');
const absolute = path.resolve(filepath);
console.log(absolute);

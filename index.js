var x = require('./foo.js');

module.exports = function() {
  console.log('x is ' + x);
  return 42;
};

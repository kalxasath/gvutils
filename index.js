// .\gvutils\index.js

let debug = require('debug')('gvutils')

module.exports = {
  screen: {
    /**
     * sends a clear screen sequence to the tty
     * GV 11/08/2017
     */
    cls: () => {process.stdout.write('\u001Bc')}
  }
}

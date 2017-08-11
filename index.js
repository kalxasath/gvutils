// .\gvutils\index.js

let debug = require('debug')('gvutils')

module.exports = {
  screen: {
    /**
     * sends a clear screen sequence to the tty
     *
     */
    cls: () => {process.stdout.write('\u001Bc')}
  }
}

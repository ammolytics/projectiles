const assert = require('assert');


exports['test require module'] = function() {
  assert.doesNotThrow(function() {
    require('../../index.js');
  }, 'Could not require module.');
}


if (module == require.main) require('test').run(exports)

const assert = require('assert');


exports['test require module'] = function() {
  assert.doesNotThrow(function() {
    require('../../index.js');
  }, 'Could not require module.');
}

exports['test top-level structure'] = function() {
  var projectiles = require('../../index.js');

  assert(projectiles.companies !== undefined);
  assert(projectiles.projectiles !== undefined);
  assert(projectiles.barnes !== undefined);
  assert(projectiles.berger !== undefined);
  assert(projectiles.hornady !== undefined);
  assert(projectiles.lapua !== undefined);
  assert(projectiles.sierra !== undefined);
  assert(projectiles.speer !== undefined);
}

exports['test length of contents'] = function() {
  var projectiles = require('../../index.js');

  assert(projectiles.companies.length === 6);
  assert(projectiles.projectiles.length === 1032);
  assert(projectiles.barnes.length === 210);
  assert(projectiles.berger.length === 100);
  assert(projectiles.hornady.length === 301);
  assert(projectiles.lapua.length === 57);
  assert(projectiles.sierra.length === 198);
  assert(projectiles.speer.length === 166);
}


if (module == require.main) require('test').run(exports)

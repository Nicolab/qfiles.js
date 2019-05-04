/**
 * This file is part of qfiles.
 *
 * (c) Nicolas Tallefourtane <dev@nicolab.net>
 *
 * For the full copyright and license information, please view the LICENSE file
 * distributed with this source code
 * or visit https://github.com/Nicolab/qfiles.js.
 */

'use strict';

let test = require('unit.js');

function initContext() {
  test.undefined(global.objSpy);
  test.undefined(global.moduleIndex);
  test.undefined(global.module1);
  test.undefined(global.module2);
  test.undefined(global.module3);

  global.objSpy = test.spy();
  global.moduleIndex = test.spy();
  global.module1 = test.spy();
  global.module2 = test.spy();
  global.module3 = test.spy();

  test.function(moduleIndex);
}

function resetContext() {
  delete global.objSpy;
  delete global.moduleIndex;
  delete global.module1;
  delete global.module2;
  delete global.module3;

  test.undefined(global.moduleIndex);
}


describe('qfiles', function() {
  beforeEach(initContext);
  afterEach(resetContext);

  // NOTE: here requireFiles is called by requireAll (so tested)
  it('should require all files excepted index.js', function() {
    require('./fixtures/requireAll');

    test.assert(objSpy.notCalled);

    // called only above
    test.assert(moduleIndex.calledOnce);

    // called by ./fixtures/requireAll/index.js
    test.assert(module1.withArgs('module1').calledOnce);
    test.assert(module2.withArgs('module2').calledOnce);
    test.assert(module3.withArgs('module3').calledOnce);
  });

  // NOTE: here requireToObj is called by requireAll (so tested)
  it('should require all files excepted index.js and populate to an object', function() {
    require('./fixtures/requireAll-obj');

    test.assert(objSpy.calledOnce);
    test
      .object(objSpy.firstCall.args[0])
        .is({
          module1: 'module1',
          module2: 'module2',
          module3: 'module3'
        })
    ;

    // called only above
    test.assert(moduleIndex.calledOnce);

    // called by ./fixtures/requireAll-obj/index.js
    test.assert(module1.withArgs('module1').calledOnce);
    test.assert(module2.withArgs('module2').calledOnce);
    test.assert(module3.withArgs('module3').calledOnce);
  });
});


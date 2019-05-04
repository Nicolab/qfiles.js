'use strict';

let {requireAll} = require('../../../src');

moduleIndex();

let obj = {};

requireAll(__dirname, obj);

objSpy(obj);
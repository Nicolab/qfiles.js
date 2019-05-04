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

const fs = require('fs');
const path = require('path');

/**
 * Load all files and populate to `obj`.
 *
 * @param {object} obj
 * @param {array} files
 * @param {string} dirname='./'  Directory containing the files to load.
 */
function requireToObj(obj, files, dirname = './') {
  for (let i = 0, ln = files.length; i < ln; i++) {
    if (path.extname(files[i]) === '.js' && files[i] !== 'index.js') {
      let filename = path.basename(files[i], '.js');
      obj[filename] = require(path.join(dirname, filename));
    }
  }
}

/**
 * Load all files.
 *
 * @param {array} files
 * @param {string} dirname='./'  Directory containing the files to load.
 */
function requireFiles(files, dirname = './') {
  for (let i = 0, ln = files.length; i < ln; i++) {
    if (path.extname(files[i]) === '.js' && files[i] !== 'index.js') {
      require(path.join(dirname, path.basename(files[i], '.js')));
    }
  }
}

/**
 * Require all files of `dirname` in `obj`.
 *
 * @param {string} dirname   Directory containing the files to load.
 * @param {object} [obj]     Object container
 */
function requireAll(dirname, obj) {
  if (obj) {
    requireToObj(obj, fs.readdirSync(dirname), dirname);
  } else {
    requireFiles(fs.readdirSync(dirname), dirname);
  }
};

module.exports = {
  requireToObj,
  requireFiles,
  requireAll
};
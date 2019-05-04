# qfiles

Helpers for handling files with Node.js (without dependency).

## Install

```sh
npm install qfiles
```

or with _Yarn_:

```sh
yarn add qfiles
```

## Usage

> See the [source code](https://github.com/Nicolab/qfiles.js/blob/master/src/index.js) for the JS doc.

### requireAll

_some-dir/index.js_

```js
let {requireAll} = require('qfiles');

// load all files of the current directory
requireAll(__dirname);
```

You can load all modules and populate to an object:

_some-dir/index.js_

```js
let {requireAll} = require('qfiles');
let obj = {};

requireAll(__dirname, obj);

// print each modules values: {moduleName: 'exported value', foo: 'bar', ...}
console.log(obj);
```

### requireToObj

_some-dir/index.js_

```js
let {requireToObj} = require('qfiles');
let obj = {};

requireToObj(obj, fs.readdirSync(__dirname), './');

// print each modules values: {moduleName: 'exported value', foo: 'bar', ...}
console.log(obj);
```

### requireFiles

```js
let {requireFiles} = require('qfiles');

requireFiles(fs.readdirSync(__dirname), './');
```

## Unit tests

`qfiles` is unit tested with [Mocha](https://mochajs.org) and [Unit.js](https://unitjs.com).

You can `git clone` _qfiles_ project and run the tests:

```sh
yarn test
```

or

```sh
npm test
```

## LICENSE

[MIT](https://github.com/Nicolab/qfiles.js/blob/master/LICENSE) (c) 2014, Nicolas Tallefourtane.

## Author

| [![Nicolas Tallefourtane - Nicolab.net](https://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](https://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |

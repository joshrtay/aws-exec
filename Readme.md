
# aws-exec

[ ![Codeship Status for themang/profile](https://img.shields.io/codeship/b4ba85f0-2c42-0133-69fc-4a598cb5a07e/master.svg)](https://codeship.com/projects/98520) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Execute aws service specs. aws-exec allows for writing high level aws modules that are much easier to test.

## Installation

    $ npm install aws-exec

## Example

```js
exec({
  service: 'S3',
  method: 'getObject',
  params: {
    Bucket: 'test-bucket.weo.io',
    Key: 'test.json'
  }
}).then(function(data) {
  //outputs {"foo": "bar"}
  console.log(data.Body.toString())
})
```

## API

### exec(spec)

Executes a aws service `spec` and returns a promise.

### .wrap(fn)

Wraps a function with a call to exec.

### .bindAll(obj)

Wraps all methods on `obj` with calls to exec.

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

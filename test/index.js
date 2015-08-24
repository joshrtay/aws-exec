var exec = require('..')
var assert = require('assert')
var AWS = require('aws-sdk')

AWS.config.update({region: 'us-west-2'})

describe('aws exec', function () {

  it('should excute s3 get object request', function (done) {
    exec({
      service: 'S3',
      method: 'getObject',
      params: {
        Bucket: 'test-bucket.weo.io',
        Key: 'test.json'
      }
    }).then(function(data) {
      assert.deepEqual(JSON.parse(data.Body.toString()), {
        foo: 'bar'
      })
      done()
    })
  })

  it('should wrap function that returns spec', function (done) {

    function get() {
      return {
        service: 'S3',
        method: 'getObject',
        params: {
          Bucket: 'test-bucket.weo.io',
          Key: 'test.json'
        }
      }
    }

    exec.wrap(get)().then(function(data) {
      assert.deepEqual(JSON.parse(data.Body.toString()), {
        foo: 'bar'
      })
      done()
    })
  })

  it('should bind all methods on object to exec', function (done) {

    function get() {
      return {
        service: 'S3',
        method: 'getObject',
        params: {
          Bucket: 'test-bucket.weo.io',
          Key: 'test.json'
        }
      }
    }

    var lib = {
      get: get
    }

    exec.bindAll(lib)

    lib.get().then(function(data) {
      assert.deepEqual(JSON.parse(data.Body.toString()), {
        foo: 'bar'
      })
      done()
    })
  })

})

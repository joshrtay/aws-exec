/**
 * Modules
 */

var AWS = require('aws-sdk')
var Promise = require('bluebird')
var is = require('@weo-edu/is')
var slice = require('sliced')


/**
 * Vars
 */

/**
 * Expose functions
 */

module.exports = exec
exec.wrap = wrap
exec.bindAll = bindAll

/**
 * Execute an aws service method based on a spec
 *
 * @params {Object} spec
 * @return {Promise}
 *
 * Spec
 *  - service: name of aws service
 *  - method: name of aws service method
 *  - params: params for method
 */

function exec (spec) {
  var service = new (AWS[spec.service])()
  var method = spec.method
  var params = spec.params
  return Promise.promisify(service[method].bind(service))(params)
}



/**
 * Wrap `fn` that return specs with an `exec` call
 *
 * @param  {Function} fn
 * @return {Function}
 */

function wrap (method) {
  return function () {
    var args = slice(arguments)
    return exec(method.apply(null, args))
  }
}

/**
 * Bind all methods on object with an exec call.
 *
 * @param {Object} obj
 * @return {object}
 *
 */

function bindAll (obj) {
  for (var key in obj) {
    var val = obj[key]
    if (is.function(val)) {
      obj[key] = wrap(val)
    }
  }
  return obj
}

'use strict';

const Promise = require('bluebird');

module.exports.handler = function(event, context, cb) {
  console.log('hello~~~');
  
  Promise
    .delay(3000)
    .then(() => cb(null, {}))
    //.timeout(900)
    .catch(err => cb(err, err.stack));
};
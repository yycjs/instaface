var feathers = require('feathers');
var memory = require('feathers-memory');
var path = require('path');
 
feathers().use(feathers.static(path.join(__dirname, '..', 'public')))
  .listen(1337);

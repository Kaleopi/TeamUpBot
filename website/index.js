const website = require('./website.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers');
var handle = {}

module.exports = function(){
  handle["/"] = requestHandlers.start;
  handle["/start"] = requestHandlers.start;
  handle["/upload"] = requestHandlers.upload;
  website.start(router.route, handle);

}

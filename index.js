/**
 * Created with IntelliJ IDEA.
 * User: xujia01
 * Date: 12-5-31
 * Time: ÏÂÎç4:24
 * To change this template use File | Settings | File Templates.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
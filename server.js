/**
 * Created with IntelliJ IDEA.
 * User: xujia01
 * Date: 12-5-31
 * Time: обнГ4:04
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
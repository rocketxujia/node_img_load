/**
 * Created with IntelliJ IDEA.
 * User: xujia01
 * Date: 12-5-31
 * Time: обнГ4:31
 * To change this template use File | Settings | File Templates.
 */

function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
/**
 * ����node�����¼������ķ�����I/O����
 * User: xujia01
 * Date: 12-6-1
 * Time: ����10:19
 * To change this template use File | Settings | File Templates.
 */

var http = require("http");
var url = require("url");
var exec = require("child_process").exec;
var isFinding = true;
var id =null;

function onRequest(request, response) {
    console.log("ls start...");   var time=0;

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        clearInterval(id);
        //isFinding = false;
        console.log("ls end...");
        response.end();
    });

    id = setInterval(function(){
        console.log("doing other staff...");
    }, 10);

    // ���������ַ�ʽ����Ϊ��������ͬ��Ƭ��
    /*while(isFinding){
        console.log("doing other staff...");
    }*/
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");

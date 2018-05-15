var http = require("http");
var url = require("url");

// http.createServer(function (request,response) {
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("hello my father");
//     response.end();
// }).listen(8888);
// function start(route,handle) {
//     function onRequest(request, response) {
//         var postData = "";

//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for " + pathname + " received.");

//         request.setEncoding("utf8");

//         request.addListener("data",function (postDataChunk) {
//             postData += postDataChunk;
//             console.log("Received POST data chunk '" + postDataChunk + "'.");
//         })
//         request.addListener("end", function () {
//             route(handle, pathname, response, postData);
//         });

//         //route(handle,pathname);

//         // response.writeHead(200, {"Content-Type": "text/plain" });
//         // var content = route(handle, pathname);
//         // response.write(content);
//         // response.end();
//         // for (const key in response) {
            
//         //     if (object.hasOwnProperty(key)) {
//         //         const element = object[key];
//         //         console.log(element);
//         //     }els
//         // }
//         //console.log(JSON.stringify(response));
//         //route(handle, pathname, response);
//     }  
//     http.createServer(onRequest).listen(80);
//     console.log("Server has started.");
// }


function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(80);
    console.log("Server has started.");
}


exports.start=start;
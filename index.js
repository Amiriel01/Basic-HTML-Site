//the http module contains the function to create the server//
const http = require("http");
//define the host and port that the server is bound to//
const host = 'localhost';
const port = 8000;
//request listener will handle incoming http requests and return an http response. Must contain two objects, a request object and a response object.//
//This is a template//
// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("The request was successful.");
// };
// index.html page function//
const indexPage = function(request, response) {
    //status 200 responds "ok"//
    response.writeHead(200);
    response.end("The request was successful.")
};
// //about.html page function//
// const aboutPage = function(request, response) {
//     request.writeHead(200);
//     response.end("The request was successful.")
// };
// //contact.html page function//
// const contactPage = function(request, response) {
//     request.writeHead(200);
//     response.end("The request was successful.")
// };

// const errorPage = function(request, response) {
//     request.writeHead(404);
//     response.end("The request was not successful.")
// }
//create a server object bia the http module createServer() function. This server accepts http requests and passes them to on to the functions//
const server = http.createServer(indexPage);
//the server.listen() binds it to a network address and accepts three optional arguments: port, host, and a callback function that fires when the server begins to listen and will send back console logs to know it is working.//
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
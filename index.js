const http = require("http");  
const url=require("url");  
const fs = require('fs');

const server = http.createServer(function(request, response) {
    const path=url.parse(request.url).pathname;
    switch(path) {
        case '/':  
        fs.readFile(__dirname + '/index.html', function(error, data) {  
            if (error) {  
                response.writeHead(404);  
                response.write(error);  
                response.end();  
            } else {  
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                response.write(data);  
                response.end();    
            }  
        });  
         break;
            case '/about.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();   
                }  
            });
            break; 
            case '/contact.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();   
                }  
            });
            break; 
            default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});          
server.listen(8080);





// const http = require("http");
// const fs = require('fs').promises;
// const url = require('url');

// const host = 'localhost';
// const port = 8000;

// let indexFile;
// // let indexFile = "/index.html";
// let contactFile = "/contact.html";;
// let aboutFile = "/about.html";

// const requestListener = function (req, res) {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(indexFile);
//         switch (req.url) {
//                     case "/aboutFile":
//                         res.writeHead(200);
//                         res.end(fs.readFile(__dirname + aboutFile));
//                         break
//                     case "/contactFile":
//                         res.writeHead(200);
//                         res.end(fs.readFile(__dirname + contactFile));
//                         break
//                     default:
//                         res.writeHead(404);
//                         res.end("Resource not found");
//                 }
//     }

// const server = http.createServer(requestListener);
// fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//         indexFile = contents;
//         server.listen(port, host, () => {
//             console.log(`Server is running on http://${host}:${port}`);
//         });
//     })
//     .catch(err => {
//         console.error(`Could not read index.html file: ${err}`);
//         process.exit(1);
//     });

// //the http module contains the function to create the server//
// const http = require("http");
// //import the fs module that contains a readFile() function that will be used to load the html file in place.//
// const fs = require('fs').promises;
// //define the host and port that the server is bound to//
// const host = 'localhost';
// const port = 8000;
// //creat a variable of the files before the function to hold the html file's contents//
// let indexFile = "/index.html";
// let contactFile = "/contact.html";;
// let aboutFile = "/about.html";
// // let readFile = fs.readFile(__dirname + indexFile)
// // console.log(readFile)
// //request listener will handle incoming http requests and return an http response. Must contain two objects, a request object and a response object.//
// //requestListener function to link to index.html//
// //fs.readFile() method will load the file. The files argument name is __dirname + "/index.html". The special variable _dirname has the absolute path where the node.js code is being run. The /index.html is appended to the _dirname so the html file can be loaded.//
// const requestListener = function (req, res) {
//     //set content type to text/html to let the client it will return html data//
//     res.setHeader("Content-Type", "text/html");
//     //the switch statement will be sure the right path is returned on the user request//
//     // console.log(`the req.url is {req.url}`)
//     switch (indexFile) {
//         case "indexFile":
//             res.writeHead(200);
//             res.end(fs.readFile(__dirname + indexFile));
//             break
//         case "aboutFile":
//             res.writeHead(200);
//             res.end(fs.readFile(__dirname + aboutFile));
//             break
//         case "contactFile":
//             res.writeHead(200);
//             res.end(fs.readFile(__dirname + contactFile));
//             break
//         default:
//             res.writeHead(404);
//             res.end("Resource not found");

//     }
    
// }
// //write status code to indicate the request was successful//
// // res.writeHead(200);
// //send the client the html page that is loaded, with the data in the indexFile variable. Previously contents, changed when the indexFile variable was created.//
// // res.end(indexFile);

// // index.html page function that was seen on localhost:8000//
// // const indexPage = function(request, response) {
// //     //status 200 responds "ok"//
// //     response.writeHead(200);
// //     response.end("The request was successful.")
// // };
// // //about.html page function//
// // const aboutPage = function(request, response) {
// //     request.writeHead(200);
// //     response.end("The request was successful.")
// // };
// // //contact.html page function//
// // const contactPage = function(request, response) {
// //     request.writeHead(200);
// //     response.end("The request was successful.")
// // };

// // const errorPage = function(request, response) {
// //     request.writeHead(404);
// //     response.end("The request was not successful.")
// // }
// //create a server object bia the http module createServer() function. This server accepts http requests and passes them to on to the functions//
// //putting the dirname and argument here ensures that the index.html file will load before the server is run and makes sure the indexFile variable isn't an empty variable//

// const server = http.createServer(requestListener);
// // fs.readFile(__dirname + "/index.html")
// //As long as the fs.readFile() promise is successfully resolved it returns data. The then() method is uded to handle after the promise resolves successfully.//
// //the contents parameter contains the html file's data//
// // .then(contents => {
// //     indexFile = contents;
// //the server.listen() binds it to a network address and accepts three optional arguments: port, host, and a callback function that fires when the server begins to listen and will send back console logs to know it is working.//
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
//     // })
//     //if the request fails the error will catch it//
//     // .catch(err => {
//         //the console error will ensure that if the file can't be loaded it prints the error to the console.//
//         // console.err(`Could not read the index.html file: $ {err}`);
//         //the exit function will auto exit the server if an error occurs so that the problem can be addressed then the server can be restarted//
//         // process.exit(1);
//         // res.writeHead(500);
//         // res.end(err);
//     //     return;
//     // });

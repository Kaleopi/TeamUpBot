const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 10656;

function start(route, handle){

  function onRequest(req, res){
    var pathname = url.parse(req.url).pathname
    console.log('requête reçue pour le chemin '+pathname)
    route(handle, pathname, res)
  }
  http.createServer(onRequest).listen(port);
  console.log("Site en écoute sur le port : ", port)

}

exports.start = start;

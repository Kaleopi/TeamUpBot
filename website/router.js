function route(handle, pathname, response){
  console.log("Début du traitement de l'url " + pathname)
  if(typeof handle[pathname] === 'function'){
    handle[pathname](response);
  }else{
    console.log("Aucun gestionnaire associé à ", pathname)
    response.writeHead(404, {'Content-Type':'text/plain'})
    response.write("404 : Page not found")
    response.end()
  }
}

exports.route = route

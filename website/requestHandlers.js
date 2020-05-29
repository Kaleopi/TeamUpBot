const exec = require('child_process').exec

function start(res){
  console.log("Gestionnaire 'start' appelé")
  exec("dir", function(error, stdout, stderr){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write(stdout)
    res.end()
  })
}

function upload(res){
  console.log("Gestionnaire 'upload' appelé")
  res.writeHead(200, {'Content-Type':'text/plain'})
  res.write("Bonjour Upload")
  res.end()
}

exports.start = start;
exports.upload = upload;

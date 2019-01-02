//Require Express to do server things
const express = require('express');
const useragent = require('useragent');


// make server and set path
let app = express();

let path = __dirname + '/public/';

//link up public folders
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/assets'))


// use index.html as "entry"
app.get('/', function(req, res) {
  if (
    useragent.is(req.headers['user-agent']).safari ||
    useragent.is(req.headers['user-agent']).ie
  ) {
    res.sendFile(path + 'views/backup.html');
  } else {
    res.sendFile(path + 'views/index.html');
  }
});

// listen on port
app.listen(3000, function() {
  console.log('Live at Port 3000');
});

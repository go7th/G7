const express = require('express'),
  PATH = require('path'),
  bodyParser = require('body-parser'),
  config = require('config-lite')(__dirname),
  router = require('./router'),
  program = require('commander'),

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(PATH.join(__dirname, 'static')));
app.set('views', PATH.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('view cache');

program
.version("1.3.2")
.option('-c, --config <path>', 'Config file path')
.option('-p, --port <port>', 'Listening port number')
.option('-a, --address <ip>', 'Listening host name or ip')
.option('-b, --blockchain <path>', 'Blockchain db path')
.option('-x, --peers [peers...]', 'Peers list')
.option('-l, --log <level>', 'Log level')
.option('-d, --develop <develop>', 'develop path')
.parse(process.argv);
// console.log(program.port);



router(app);
const port = program.port || config.port;
app.listen(port, function(err) {
  if (err) throw err;
  console.log('Service starts at port %s', port);
});

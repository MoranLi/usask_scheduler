var app = express();
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function(){
  console.log("scheduling server start");
});
var express =  require("express");
var appName = require(__dirname + '/package.json').name;
var appVersion = require(__dirname + '/package.json').version;

var app = express();

// Gets the git hash
function getHash(){
    require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
        return stdout;
    });
}

// Gets the name of the application
function getName(){
    return appName;
}

// Gets the version number of the application
function getVersion(){
    return appVersion;
}


app.get('/health', function(req,res){
    var out = {};
    out["name"] = getName();
    out["version"] = getVersion();
    out["hash"] = getHash();
    console.log(out);
    data = JSON.stringify(out);
    res.end(data);
})

var server = app.listen(process.env.PORT || 8086, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("API listening at http://%s:%s", host, port)
})






/**
 *  Basic server API with endpoint
 */

var express =  require("express");
var appName = require(__dirname + '/package.json').name;
var appVersion = require(__dirname + '/package.json').version;

var app = express();

// FAILS IN DOCKER 
// function getHash(){
//     require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
//         return stdout;
//     });
// }


/**
 * Gets and returns the hash of the last git commit 
 * @returns {string} hash of git commit
 */
function getHash(){
    revision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();
    return revision;
}

/**
 * Gets and returns the name of the appication
 * @returns {string} name of application
 */
function getName(){
    return appName;
}

/**
 * Gets and returns the version of the application
 * @returns {string} version of application
 */
function getVersion(){
    return appVersion;
}

/**
 * The application endpoint
 */
app.get('/health', function(req,res){
    var out = {};
    out["name"] = getName();
    out["version"] = getVersion();
    out["hash"] = getHash();
    // out["test"] = test();
    console.log(out);
    data = JSON.stringify(out);
    res.end(data);
})

/**
 * The server object
 */
var server = app.listen(process.env.PORT || 8086, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("API listening at http://%s:%s", host, port)
})






process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV: 'test';
console.log(`ENV : ${process.env.NODE_ENV}`);
var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

    
// Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = 'test'

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function (file) {
    // Only keep the .js files
    return file.substr(-8) === '.test.js';

}).forEach(function (file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});
// Run the tests.
mocha
    .timeout(99999)
    .run(function (failures) {
        process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
    });
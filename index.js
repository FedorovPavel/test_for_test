process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV: 'test';
console.log(`ENV : ${process.env.NODE_ENV}`);
const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => {
    throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    require(model);
});
    
// Instantiate a Mocha instance.
const mocha = new Mocha();
const testDir = 'test'

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
        // db.close();
    });
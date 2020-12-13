const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const config = require('./../config/config');
const serverAddress = config.serverAddress;
chai.use(chaiHttp);

const expect = chai.expect;

describe("Test", function () {
    it("True is True", function (done) {
        chai.request(serverAddress)
            .get('/')
            .then(function (response) {
                expect(response).has.status(200);
                done();
            })
            .catch(function (err) {
                done(err);
            })
    });
});
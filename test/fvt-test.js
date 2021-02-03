const expect  = require('chai').expect;
const request = require('request');
const chai = require('chai');
chai.use(require('chai-dom'));

it('Check page title', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).contains("<h1>Guestbook - v1</h1>");
        done();
    });
});

it('Check for form', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).contains('<form id="guestbook-form">');
        done();
    });
});

it('Check for submit button', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).contains('<a href="#" id="guestbook-submit">Submit</a>');
        done();
    });
});

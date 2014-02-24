var Palindrome = require("../palindrome");
var should = require("should");

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

describe('Palindromes from 1 to 10,000', function(done) {
    it('str should requal reverse of str', function(done) {
        var palindromes = Palindrome();
        palindromes.forEach(function(palindrome) {
            palindrome = palindrome.toString();
            palindrome.should.equal(palindrome.reverse());
        });

        done();
    })
});
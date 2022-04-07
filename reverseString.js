function reversestring(string) {
 var rev_string = "";
 for (let char of string) {
  rev_string = char + rev_string;
 }
 return rev_string;
}
module.exports = { reversestring };

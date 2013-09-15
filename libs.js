
// at = the degrees we're currently at (0-359)
// want = the degrees we want to be at (0-359)
// returns which direction to go
function whichway (at, want) {
  if (want > at) {
    if (want - at <= 180) {
      return 1;
    } 
    if (at + 360 - want <= 180) {
      return -1;
    }
  }
  if (at > want) {
    if (at - want <= 180) {
      return -1;
    }
    if (want + 360 - at <= 180) {
      return 1;
    }
  }
  return 0;
}


// nodeunit libs.js
exports.testSomething = function(test){
  test.equal(whichway(  1,  2),  1, 'close clockwise');
  test.equal(whichway(  2,  1), -1, 'close counter-clockwise');
  test.equal(whichway(359,  0),  1, 'close across 0 clockwise');
  test.equal(whichway(  0,359), -1, 'close across 0 counter-clockwise');
  test.equal(whichway( 90,260),  1, 'far clockwise');
  test.equal(whichway( 90,280), -1, 'far counter-clockwise');
  test.equal(whichway(  7,  7),  0, 'if equal then 0');
  test.done();
};


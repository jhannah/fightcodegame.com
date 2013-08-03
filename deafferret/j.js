
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
    // robot.log(ev.robot.position.x);
};

var jstate = {};
jstate.nextRotateCannon = 10;

Robot.prototype.onIdle = function(ev) {
  //console.log("JAY0 " + jstate.nextRotateCannon);
  console.log("JAY0 " + ev.nextRotateCannon);
  ev.robot.clone(); 
  ev.robot.ahead(20);
  ev.robot.turn(10);
  ev.robot.rotateCannon(jstate.nextRotateCannon);
//    robot.back(100);
//   robot.rotateCannon(360);
};

// this method gets called whenever we hit another robot...
Robot.prototype.onRobotCollision = function(ev) {
  ev.robot.back(10);
    ev.robot.turn(10);
  //ev.robot.stop(onRobotCollision);
};

// this method gets called whenever we hit a wall...
Robot.prototype.onWallCollision = function(ev) {
  ev.robot.back(10);
  ev.robot.turn(10);
  //ev.robot.stop(onWallCollision);
};

Robot.prototype.onScannedRobot = function(ev) {
  if (
    ev.robot.parentId == ev.scannedRobot.id ||  // don't shoot parent
    ev.robot.id == ev.scannedRobot.parentId     // don't shoot child
  ) { return } 
  ev.robot.fire();
  if (jstate.nextRotateCannon > 0) { 
    jstate.nextRotateCannon = -20;
  } else {
    jstate.nextRotateCannon = 20;
  }
  
    //ev.robot.log(ev.robot.position.x);
};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
    //robot.turn(90 - ev.bulletBearing);
};


//   http://fightcodegame.com/robots/update/20973/

//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
    // robot.log(ev.robot.position.x);
};

var jstate = {};
jstate.nextRotateCannon = 1;
jstate.moveOrNot = 1;

Robot.prototype.onIdle = function(ev) {
  ev.robot.clone(); 
  if (jstate.nextRotateCannon > 60 || jstate.nextRotateCannon < 60) {
     // jstate.nextRotateCannon *= 6;    
  } else {  
     jstate.nextRotateCannon *= -2; 
  }
  console.log("JAY0 " + jstate.nextRotateCannon);
  if (jstate.moveOrNot++ % 7) {
     ev.robot.ahead(10);
  }
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
  jstate.nextRotateCannon = -10;  
    //ev.robot.log(ev.robot.position.x);
};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
  ev.robot.disappear();
  ev.robot.turn(90);
  ev.robot.ahead(100);
    //robot.turn(90 - ev.bulletBearing);
};


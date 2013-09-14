// http://fightcodegame.com/robots/update/22116/

var Robot = function(robot) {
};

var jstate = {};
jstate.tick = 0;
jstate.lastEnemySeenAbsoluteAngle = 0;
jstate.nextcannonAbsoluteAngle = 0;
jstate.sweepWidth = 1;
jstate.moveOrNot = 1;

Robot.prototype.onIdle = function(ev) {
  // ev.robot.clone();
  jstate.tick = jstate.tick + 1;
  ev.robot.rotateCannon(jstate.sweepWidth);
  if (jstate.lastEnemySeenAbsoluteAngle) { 
    var offby = ev.robot.cannonAbsoluteAngle - jstate.lastEnemySeenAbsoluteAngle; 
    if (jstate.tick < 50) {
      console.log("JAY0 [" + offby + "|" + JSON.stringify(jstate) + "]");
    }
    if(offby > jstate.sweepWidth) {
      jstate.sweepWidth *= -2;
    }
  } else {
    ev.robot.rotateCannon(1); 
  }
//  if (jstate.moveOrNot++ % 7) {
//     ev.robot.ahead(10);
//  }
//  ev.robot.turn(10);

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
  jstate.lastEnemySeenAbsoluteAngle = ev.robot.cannonAbsoluteAngle;
  jstate.nextcannonAbsoluteAngle =    ev.robot.cannonAbsoluteAngle;
  jstate.sweepWidth = 1;
  // console.log("JAY0 " + jstate.nextcannonAbsoluteAngle);
    //ev.robot.log(ev.robot.position.x);
};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
  ev.robot.disappear();
  //ev.robot.turn(90);
  //ev.robot.ahead(100);
  //ev.robot.RotateCannon = -90;

  //robot.turn(90 - ev.bulletBearing);
};




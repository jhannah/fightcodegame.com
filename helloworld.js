function Robot(robot) {}

// well, we need to do something...
// whenever our robot is idle, this method gets called.
Robot.prototype.onIdle = function(ev) {
    var robot;
    robot = ev.robot;
    robot.ahead(150);
    robot.rotateCannon(360);
    robot.back(100);
    robot.rotateCannon(360);
    robot.turn(20);
};

// this method gets called whenever we hit another robot...
Robot.prototype.onRobotCollision = function(ev) {};

// this method gets called whenever we hit a wall...
Robot.prototype.onWallCollision = function(ev) {};

// yay we see another robot! time to wreak some havoc...
Robot.prototype.onScannedRobot = function(ev) {
    var robot;
    robot = ev.robot;
    robot.fire(1);
};

// ohhh... we were hit by another robot...
Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    robot.turn(90 - ev.bulletBearing);
};
        


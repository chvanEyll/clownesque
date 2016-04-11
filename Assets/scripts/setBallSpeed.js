#pragma strict

static var setBallSpeed = 7;
static var clownJustHitBall1;
static var clownJustHitBall2;
static var clownJustHitBall3;

function Start () {
	
	if (startMenu.gameStarted) {
	
		var ball = GameObject.Find("Ball").GetComponent.<Rigidbody2D>();
		ball.velocity = Vector3(0,setBallSpeed * -1,0); //Initial ball speed and direction

	}
		
}

function maintainBallSpeed () {
	
	var ball = GameObject.Find("Ball").GetComponent.<Rigidbody2D>();
	
	//Avoid horizontal loop by setting minimum Y speed
	if ((ball.velocity.y < 2) && (ball.velocity.y > 0)) {
		
		ball.velocity.y = 2;
		
	} else if ((ball.velocity.y > -2) && (ball.velocity.y < 2)) {
		
		ball.velocity.y = -2;
		
	} else {
		
		//Always keep the ball at the same speed
		ball.velocity = setBallSpeed * (ball.velocity.normalized); 
		
	}
	
}

// we use timers to ensure the ball has time to decelerate even if the clown hits it again
function hitTimer1() {

	clownJustHitBall1 = true;
	yield WaitForSeconds(1);
	clownJustHitBall1 = false;
}

function hitTimer2() {

	clownJustHitBall2 = true;
	yield WaitForSeconds(1);
	clownJustHitBall2 = false;
}

function hitTimer3() {

	clownJustHitBall3 = true;
	yield WaitForSeconds(1);
	clownJustHitBall3 = false;
}

function checkClownHitsBall () {

	var ball = GameObject.Find("Ball").GetComponent.<Rigidbody2D>();
	

	if ((clownJustHitBall1) || (clownJustHitBall2) || (clownJustHitBall3)) {
		
		ball.velocity = setBallSpeed * (ball.velocity.normalized) * 3; //Ball goes fast for 0.5 seconds
		
	
	} else {
		
		maintainBallSpeed();
	
	}
	
	
}

function OnTriggerEnter2D (col: Collider2D) { //if ball collides with clown
	
	if(col.gameObject.name=="Ball") { 
		
		if (!clownJustHitBall1) {
		
			hitTimer1();
			
		} else if (!clownJustHitBall2) {
		
			hitTimer2();
			
		} else if (!clownJustHitBall3) {
		
			hitTimer3();
			
		} 
			
	}	
		
}

function Update () {

	if (startMenu.gameStarted) {
		
		checkClownHitsBall();

	}
		
}
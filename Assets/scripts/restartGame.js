#pragma strict

var ball: Rigidbody2D;
var initialBallPosition;

function Start () {

	ball = GameObject.Find("Ball").GetComponent.<Rigidbody2D>();
	initialBallPosition = ball.transform.position;
	
}

function OnTriggerEnter2D (col: Collider2D) { //check if ball falls out of range
	
	if(col.gameObject.name=="Ball") { 
			
		displayScore.currentScore = 0;
		ball.transform.position = initialBallPosition;
		ball.velocity = Vector3(0,setBallSpeed.setBallSpeed * -1,0); //Initial ball speed and direction
		setBallSpeed.clownJustHitBall1 = setBallSpeed.clownJustHitBall2 = setBallSpeed.clownJustHitBall3 = false;
		
	}	
		
}
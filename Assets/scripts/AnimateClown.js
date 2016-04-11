#pragma strict

var clownJustHitBall;
var hasPlayed: boolean;

function setClownPose () {

	var ballPos = GameObject.Find("Ball").transform.position;

	if (clownJustHitBall) {

			//hit animation for 0.2 secs
			GetComponent(SpriteRenderer).sprite = Resources.Load("clown.hits", typeof(Sprite));
			yield WaitForSeconds(0.2);
			clownJustHitBall = false;
			
	}

	else if (ballPos.x > -1 && ballPos.y > 8) { //if ball is approaching clown

			GetComponent(SpriteRenderer).sprite = Resources.Load("clown.ready", typeof(Sprite));
			
	} 
	
	else {

			GetComponent(SpriteRenderer).sprite = Resources.Load("clown.idle", typeof(Sprite));
			
	}

}

function clownHummingSound () {
	
	var ballPos = GameObject.Find("Ball").transform.position;
	
	var hummingSource = GameObject.Find('Knob').GetComponent.<AudioSource>();
	
	if (ballPos.x > -1 && ballPos.y > 8 && !hummingSource.isPlaying) {
		
		hummingSource.Play();
		
	} 
	
}

function OnTriggerEnter2D (col: Collider2D) { //check if ball collides with clown
	
	if(col.gameObject.name=="Ball") { 
		
		GetComponent.<AudioSource>().Play();
		clownJustHitBall = true;	
		
	}	
		
}

function Update () {
	
	setClownPose();
	clownHummingSound();
	
}


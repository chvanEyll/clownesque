#pragma strict



function OnCollisionEnter2D (collision: Collision2D) { //check if ball collides with balloon
	
	if (collision.gameObject.name=="Ball") { 
	
		var ball = GameObject.Find("Ball");
		var audio = ball.GetComponent.<AudioSource>();
		
		if (!audio.isPlaying) {
		
				audio.Play();
			
		}
	}	
		
}
#pragma strict

var maximumSize = 0.16;
var normalBalloonSize = 0.07;
var deflatingCompletely: boolean;
var sound = '';

function Start () {



}

function Update () { 

	inflationSound();
	inflationAnimation(); 

}

function inflationSound() {

	var audio = GetComponent.<AudioSource>();

	if (sound == 'inflate') {
		
		audio.pitch = 0.3;
	
		if (!audio.isPlaying) {
	
			audio.Play();
	
		}
	
	}
	
	else if ((sound == 'deflate') && (audio.isPlaying)) {
	
		audio.pitch = -0.5;
	
		if (!audio.isPlaying) {
	
			audio.Play();
	
		}
	} 
	
	else if ((sound == 'silent') && (audio.isPlaying)) {
	
		audio.Stop();
	
	}

}

function inflationAnimation () {

	var pressureMeter = GameObject.Find("Pressure meter");
	var needle = GameObject.Find("Needle");
	
	if	(!(deflatingCompletely) && ( Input.GetMouseButton(0) ) && ( startMenu.gameStarted )) {

		if (transform.localScale.x < maximumSize) { //until max size is reached

			//keep inflating
			sound = 'inflate';
			transform.localScale += new Vector3(0.05 * Time.deltaTime, 0.05 * Time.deltaTime, 0);
			
		}
		
		else { //if max size is reached
		
			deflatingCompletely = true;
			yield WaitForSeconds(5);
			deflatingCompletely = false;
		
		}
	
	} else if (deflatingCompletely) {

		if (transform.localScale.x > normalBalloonSize) { //until min size is reached

			//deflate slowly and completely
			sound = 'deflate';
			transform.localScale -= new Vector3(0.025 * Time.deltaTime, 0.025 * Time.deltaTime, 0);
		
			}
			
		pressureMeter.GetComponent.<Renderer>().material.color.a = 0.5;
		needle.GetComponent.<Renderer>().material.color.a = 0.5;
		
		}
	
	else {

		if (transform.localScale.x > normalBalloonSize) { 

			//deflate at regular speed
			sound = 'deflate';
			transform.localScale -= new Vector3(0.05 * Time.deltaTime, 0.05 * Time.deltaTime, 0);
		
		} else { sound = 'silent'; }
		
		pressureMeter.GetComponent.<Renderer>().material.color.a = 1;
		needle.GetComponent.<Renderer>().material.color.a = 1;
			
	}
	
}
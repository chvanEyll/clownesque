#pragma strict

function Update () {
	
	if 	( Input.GetMouseButton(0) && startMenu.gameStarted) {

		var mouseX = Input.mousePosition.x;
		var mouseY = Input.mousePosition.y;
		var mousePos = Camera.main.ScreenToWorldPoint(new Vector3(mouseX,mouseY,0.5));
		mousePos = mousePos * 0.5; // center the balloon
		
		//displacement
		var balloon = GetComponent.<Rigidbody2D>();
		var direction = mousePos - transform.position;
		balloon.velocity = direction.normalized * 30;
	
		//rotation
		var balloonRotation = Vector3.Lerp(transform.rotation.eulerAngles, mousePos, Time.deltaTime);
		var balloonRotationZ = Mathf.Atan2(balloonRotation.y, balloonRotation.x) * Mathf.Rad2Deg;
	
		transform.eulerAngles.z = balloonRotationZ - 90;
	
	} else {

		//float back up
		if (transform.position.y < 1) {
			
			GetComponent.<Rigidbody2D>().velocity.y = 0.5;
			
		}
	
		//rotate back up
		if (transform.rotation.z > 0) {
			
				transform.Rotate(Vector3.forward * Time.deltaTime * -50);
			
			} else if (transform.rotation.z < 0) {
			
				transform.Rotate(Vector3.forward * Time.deltaTime * 50);
			
			}
	
	}
	
}


#pragma strict

static var gameStarted: boolean = false;
var customGuiStyle: GUIStyle;
var instructionsText = "Try to hit that clown \n in the face with the ball. \n\n Touching the screen will blow up \n and move the balloon around. \n Don't blow too hard! \n\n The game restarts automatically \n to avoid any unncessary raging.";		

customGuiStyle.alignment = TextAnchor.UpperCenter;
customGuiStyle.fontStyle = FontStyle.Bold;
customGuiStyle.fontSize = Screen.height / 30;
customGuiStyle.normal.textColor = Color.black; //former color: 0.545

function OnGUI() { 
	
	if (!gameStarted) {
		
		GUI.Label (Rect (Screen.width/2, Screen.height/2.7, 1, 1), instructionsText, customGuiStyle);
		
		if (Input.GetMouseButton(0)) {
		
			gameStarted = true;
			
		}
		
	}
	
}
#pragma strict

var customGuiStyle : GUIStyle;
static var currentScore: int = 0;
var highScore: int;

function Start () {
	
	customGuiStyle.fontStyle = FontStyle.Bold;
	customGuiStyle.fontSize = Screen.height / 30;
	customGuiStyle.normal.textColor = Color(0, 0, 0.545);

}

function Update () {

	if (currentScore > highScore) {

		PlayerPrefs.SetInt("High Score", currentScore);

		}
		
	highScore = PlayerPrefs.GetInt("High Score");

}

function OnTriggerEnter2D (col: Collider2D) { //check if ball collides with clown
	
	if (col.gameObject.name=="Ball") { 
		
		currentScore = currentScore + 1;
		
	}	
		
}

function OnGUI() 
{ 
	
	var RectPosition: Vector3 = Camera.main.WorldToScreenPoint(Vector3(-3.5, 0.5, 0));
	
	var RectWidth = 1;
	var RectHeight = 1;
	var rect = Rect(RectPosition.x, RectPosition.y, RectWidth, RectHeight);
	var text = currentScore.ToString() + " (Best: " + highScore.ToString() + ")";
	
	GUI.Label(rect, text, customGuiStyle);

	}
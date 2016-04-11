#pragma strict

var balloonSize: float;
var airLevelToDegrees: int;
var needle: GameObject;

function Start () {
	
}

function Update () {

	needle = GameObject.Find("Needle");
	balloonSize = transform.localScale.x;
	
	airLevelToDegrees = -2418.18 * balloonSize + 169.27; // so that smallest size is 0 degrees, biggest size is -266 degrees
	
	var point = new Vector3(-1.629, 6.814, 9);
	needle.transform.localEulerAngles = new Vector3(0,0,airLevelToDegrees);

}
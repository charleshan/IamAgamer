#pragma strict

function Start () {

}

function Update () {
	
}

function OnGUI () {
        GUI.Label (Rect (10, 10, 100, 20), "Score: " + Player.distanceTraveled);
    }
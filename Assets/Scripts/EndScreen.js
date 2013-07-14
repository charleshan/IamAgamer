#pragma strict

var isScore = false;

function Start () {
	if (isScore)
		GetComponent(TextMesh).text = "Score: " + Mathf.Floor(Player.distanceTraveled);
}

function Update () {

}

function OnMouseEnter () {
	renderer.material.color = Color.red;
}

function OnMouseExit () {
	renderer.material.color = Color.white;
}

function OnMouseDown () {
	if(!isScore)
		Application.LoadLevel(1);
		
}
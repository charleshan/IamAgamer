#pragma strict


function Start () {

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
	Application.LoadLevel(1);
		
}
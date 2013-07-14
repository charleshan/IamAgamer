#pragma strict

public var isQuit = false;

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
	if (isQuit)
		Application.Quit();
	else
		Application.LoadLevel(1);
		
}
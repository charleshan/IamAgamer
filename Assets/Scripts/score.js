#pragma strict

var textureToDisplay : Texture2D;

function Start () {

}

function Update () {
	
}

function OnGUI () {
        GUI.Label (Rect (10, 40, textureToDisplay.width, textureToDisplay.height),
            textureToDisplay);
    }
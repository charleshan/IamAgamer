#pragma strict

var textureToDisplay : Texture2D;

function Start () {

}

function Update () {
	
}

function OnGUI () {
    GUI.Label (Rect (10, 10, textureToDisplay.width/3, textureToDisplay.height/3),
        textureToDisplay);
        
    GUI.Label (Rect (textureToDisplay.width/3 + 30, 40, 100, 20), "Nova's Quest");
}

#pragma strict

function Start () {

}

function Update () {
	
}

function OnGUI () {
<<<<<<< HEAD
        GUI.Label (Rect (10, 10, 100, 20), "Score: " + Player.distanceTraveled);
    }
=======
    GUI.Label (Rect (10, 10, textureToDisplay.width/3, textureToDisplay.height/3),
        textureToDisplay);
        
    GUI.Label (Rect (textureToDisplay.width/3 + 30, 40, 100, 20), "Nova's Quest");
}
>>>>>>> d8f0d05582e5f450579be3679707d9713d0dd456

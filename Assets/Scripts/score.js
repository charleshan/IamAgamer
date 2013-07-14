#pragma strict

var textureToDisplay : Texture2D;

function Start () {

}

function Update () {
	
}

function OnGUI () {
	var player:GameObject;
	player = GameObject.Find("Player");
	var hp = player.GetComponent(Player).playerHealth;

    GUI.Label (Rect (700, 10, 100, 20), "Score: " + Mathf.Floor(Player.distanceTraveled));
    GUI.Label (Rect (700, 30, 100, 20), "Health: ");
    
    for(var i = 0; i < hp; i++) {
    	GUI.Label (Rect (750 + i*5, 30, 100, 20), "|");
    }
    
    
    
    GUI.Label (Rect (10, 10, textureToDisplay.width/3, textureToDisplay.height/3),
        textureToDisplay);
    
}

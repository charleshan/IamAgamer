#pragma strict


var prefab: Transform;
var pos: Vector3;
var savedPos: float;
var first: Transform;
var second: Transform;
	 
	 function Start () 
	 {
		 savedPos = Player.distanceTraveled;
		 first = Instantiate(prefab, Vector3(0, 0, 0), transform.rotation);
		 first.name = "Platform";
		 second = Instantiate(prefab, Vector3(0, 0, 100), transform.rotation);
		 second.name = "Platform";
	 }

	 function Update () 
	 {
	     if (Player.distanceTraveled >= savedPos + 100)
	     {
	        savedPos += 100;
	       	//Instantiate(prefab, Vector3(0, 0, savedPos + 100), transform.rotation);
			first.position.z = second.position.z + 100;
			var temp = first;
	    	first = second;
	    	second = temp;
	    }
 }

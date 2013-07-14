#pragma strict


var prefab: Transform;
var pos: Vector3;
var savedPos: float;
var first: Transform;
var second: Transform;
var third: Transform;
var fourth: Transform;
var fifth: Transform;
	 
	 function Start () 
	 {
		 savedPos = Player.distanceTraveled;
		 first = Instantiate(prefab, Vector3(0, 0, 0), transform.rotation);
		 first.name = "Platform";
		 second = Instantiate(prefab, Vector3(0, 0, 100), transform.rotation);
		 second.name = "Platform";
         third = Instantiate(prefab, Vector3(0, 0, 200), transform.rotation);
		 third.name = "Platform";
         fourth = Instantiate(prefab, Vector3(0, 0, 300), transform.rotation);
		 fourth.name = "Platform";
         fifth = Instantiate(prefab, Vector3(0, 0, 400), transform.rotation);
		 fifth.name = "Platform";
	 }

	 function Update () 
	 {
	     if (Player.distanceTraveled >= savedPos + 100)
	     {
	        savedPos += 100;
	       	//Instantiate(prefab, Vector3(0, 0, savedPos + 100), transform.rotation);
			first.position.z = second.position.z + 400;
			var temp = first;
	    	first = second;
	    	second = third;
            third = fourth;
            fourth = fifth; 
            fifth = temp;
	    }
 }

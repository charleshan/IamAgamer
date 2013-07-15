#pragma strict


var prefab: Transform;
var pos: Vector3;
var savedPos: int;
var first: Transform;
var second: Transform;
var third: Transform;
var fourth: Transform;
var fifth: Transform;
var ran: boolean = false;
	 

function Start () 
{
	
}

function Update () 
{
    if (ran == false)
    {
        savedPos = 0;
        once();
        ran = true;
     }
	if (Player.distanceTraveled >= (savedPos + 100))
	{
        print("NOOOOOOOOOOOOOOOO");
	    //Instantiate(prefab, Vector3(0, 0, savedPos + 100), transform.rotation);
	    first.position.z = second.position.z + 400;
	    var temp = first;
	    first = second;
	    second = third;
        third = fourth;
        fourth = fifth; 
        fifth = temp;
        savedPos += 100;
    }
}

function once()
{
    //savedPos = Player.distanceTraveled;
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



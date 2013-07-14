#pragma strict

var velocity: float = 5;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
var distanceLast: float = 0;
static var distanceTraveled: float;
var playerHealth:int = 10;

var timer:float = 0.5;
var previousDistance:float = 0;

function Start () {
    
}

function Update () {
    transform.Translate(Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed, 0, 0);
    if (Input.GetButtonDown("Jump") && transform.position.y < 1.1)
    {
        rigidbody.AddForce(jumpVelocity, ForceMode.VelocityChange);

        isGrounded = false;
    }
    distanceTraveled = transform.localPosition.z;
    
    timer -= Time.deltaTime;
    if(timer < 0)
    {
    	if((transform.position.z - previousDistance) < 1 || transform.position.y < -5)
	    {
	    	playerHealth--;
	    }
	    timer = 0.5;
	    previousDistance = transform.position.z;
    }
    
    if(playerHealth < 0)
    {
    	Destroy(gameObject);
	    Application.LoadLevel(2);
    }
}

function FixedUpdate()
{
    rigidbody.AddForce(0, 0, velocity);
}

function OnCollisionEnter(otherObject: Collision)
{
    isGrounded = true;
    
    var contact : String = otherObject.transform.name;
    
    if (contact == "Platform" || contact == "Wall") 
	{            
		//print (contact);
	}
	else
	{
		print(otherObject.relativeVelocity.magnitude);
	}
	
}

function OnCollisionExit(otherObject: Collision)
{
    isGrounded = false;
}

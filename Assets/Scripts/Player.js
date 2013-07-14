#pragma strict

var velocity: float = 5;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
var distanceLast: float = 0;
static var distanceTraveled: float;
var playerHealth:int = 3;

var timer:float = 0.5;
var previousDistance:float = 0;

var radius = 0.5;
var power = 10.0;
var explosion: Transform;

var time:float = 1;
var needstoQuit:boolean = false;

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
    
    if(playerHealth <= 0 || -15 >= transform.position.x || 15 <= transform.position.x)
    {
    	//Destroy(gameObject);
        var exp = Instantiate(explosion, gameObject.rigidbody.position, Quaternion.identity);
        needstoQuit = true;
        
    }

    

    if(needstoQuit)
    {
        timer -= Time.deltaTime;
        
        if(timer < 0)
        {
            //platform_manager.platform_inint();

            var platform:GameObject;
	platform = GameObject.Find("Plat");
	platform.GetComponent(platform_manager).Start();

            Application.LoadLevel(2);
        }    
    }
}

function FixedUpdate()
{
    rigidbody.AddForce(0, 0, velocity);
}

function OnTriggerEnter(otherObject: Collider)
{
	var contact : String = otherObject.transform.name;
    
    if(contact == "PowerUp")
	{
		rigidbody.AddRelativeForce(Vector3.left*250);
		print("Worked");
	}
}

function OnCollisionEnter(otherObject: Collision)
{
    isGrounded = true;
    
    var contact : String = otherObject.transform.name;
    
    if (contact == "Platform" || contact == "Wall") 
	{            
		//print (contact);
	}
	else if(contact == "PowerUp")
	{
		//rigidbody.AddForce(0, 0, -400);
		//print("Worked");
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

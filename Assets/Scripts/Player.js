#pragma strict

var velocity: float = 5;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
var distanceLast: float = 0;
static var distanceTraveled: float;

var timer:float = 0.5;
var previousDistance:float = 0;

function Start () {
    
}

function Update () {
    transform.Translate(Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed, 0, 0);
    /*
    var amtToMove = velocity * Time.deltaTime;
    transform.Translate(-Vector3.forward * amtToMove);
    */
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
	    	Destroy(gameObject);
	    	Application.LoadLevel(2);
	    }
	    timer = 2;
	    previousDistance = transform.position.z;
    }
    /*
    if (distanceTraveled > distanceLast + 100) {
    	velocity += 5;
    	distanceLast = distanceTraveled;       
    }*/
    
}

function FixedUpdate()
{
    rigidbody.AddForce(0, 0, velocity);
}

function OnCollisionEnter(otherObject: Collision)
{
    isGrounded = true;

}

function OnCollisionExit(otherObject: Collision)
{
    isGrounded = false;
}

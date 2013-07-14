#pragma strict

var velocity: float;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
static var distanceTraveled: float;

var timer:float = 2;
var previousDistance:float = 0;

function Start () {
    
}

function Update () {
    transform.Translate(Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed, 0, 0);

    var amtToMove = velocity * Time.deltaTime;
    transform.Translate(-Vector3.forward * amtToMove);

    if (Input.GetButtonDown("Jump") && transform.position.y < 1.1)
    {
        rigidbody.AddForce(jumpVelocity, ForceMode.VelocityChange);

        isGrounded = false;
    }
    distanceTraveled = transform.localPosition.z;
    
    if(timer < 0)
    {
    	if((transform.position.x - previousDistance) < 1 || transform.position.y <= 0)
	    {
	    	Destroy(gameObject);
	    }
	    timer = 2;
    }       
}

function FixedUpdate()
{
    //rigidbody.AddForce(0, 0, velocity);
}

function OnCollisionEnter(otherObject: Collision)
{
    isGrounded = true;

}

function OnCollisionExit(otherObject: Collision)
{
    isGrounded = false;
}

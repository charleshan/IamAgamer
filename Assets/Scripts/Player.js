#pragma strict

var velocity: float;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
static var distanceTraveled: float;

function Start () {
    
}

function Update () {
    transform.Translate(Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed, 0, 0);

    if (Input.GetButtonDown("Jump"))
    {
        rigidbody.AddForce(jumpVelocity, ForceMode.VelocityChange);
        isGrounded = false;
    }
    distanceTraveled = transform.localPosition.z;
}

function FixedUpdate()
{
    rigidbody.AddForce(0, 0, velocity);
}

function OnCollisionEnter()
{
    isGrounded = true;
}

function OnCollisionExit()
{
    isGrounded = false;
}
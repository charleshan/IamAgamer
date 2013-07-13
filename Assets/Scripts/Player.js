#pragma strict

var velocity: float;
var movementSpeed: float = 5;
var isGrounded: boolean = false;
var jumpVelocity: Vector3;
var gravity: float;
Physics.gravity = Vector3(0, -gravity, 0);

function Start () {
    
}

function Update () {
    transform.Translate(Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed, 0, 0);

    if (Input.GetButtonDown("Jump"))
    {
        rigidbody.AddForce(jumpVelocity, ForceMode.VelocityChange);
        isGrounded = false;
    }
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
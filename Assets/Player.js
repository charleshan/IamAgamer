#pragma strict

function Start () {

}

function Update () {
    if(Input.GetButtonDown("Vertical"))
        print("");
}

function FixedUpdate()
{
    rigidbody.AddForce(0, 0, 10);
}
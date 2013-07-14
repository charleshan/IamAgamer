#pragma strict

var prefab: Transform;
var pos: Vector3;
var savedPos: float;

function Start () {
    savedPos = Player.distanceTraveled;
    Instantiate(prefab, Vector3(0, 0, 0), transform.rotation);
    Instantiate(prefab, Vector3(0, 0, 100), transform.rotation);
}

function Update () {
    if (Player.distanceTraveled >= savedPos + 100)
    {
        savedPos += 100;
        Instantiate(prefab, Vector3(0, 0, savedPos + 100), transform.rotation);
    }
}
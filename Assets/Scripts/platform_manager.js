#pragma strict

var prefab: Transform;
var pos: Vector3;
var savedPos: float;
var first: Transform;
var second: Transform;

function Start () {
    savedPos = Player.distanceTraveled;
    first = Instantiate(prefab, Vector3(0, 0, 0), transform.rotation);
    second = Instantiate(prefab, Vector3(0, 0, 100), transform.rotation);
}

function Update () {
    if (Player.distanceTraveled >= savedPos + 100)
    {
        savedPos += 100;
        //Instantiate(prefab, Vector3(0, 0, savedPos + 100), transform.rotation);
        first.position = Vector3(0, 0, savedPos + 100);
        var temp = first;
        first = second;
        second = temp;
    }
}
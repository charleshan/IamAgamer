#pragma strict

public var obstacle:Transform;

var usedObjectQueue = new Queue();
var newObjectQueue = new Queue();
var recycleOffset = 80;
var stopGeneration:boolean = false;

function Start () {
	
}

function Update () 
{
	var player:GameObject;
	player = GameObject.Find("Player");
	var travelled = player.GetComponent(Player).distanceTraveled;
	
	if(Mathf.Floor(travelled%20) == 0 && !stopGeneration)
	{
		CreateScenario(1,travelled+30);
		
		stopGeneration = true;
	}
	else if(stopGeneration && Mathf.Floor(travelled%20) != 0)
	{
		stopGeneration = false;
	}
	
	if(usedObjectQueue.Count > 0)
	{
		var firstObs:Transform = usedObjectQueue.Peek();
	
		if(firstObs.position.z + recycleOffset < travelled)
		{
			usedObjectQueue.Dequeue();
			newObjectQueue.Enqueue(firstObs);
		}
	}
}

function CreateScenario (obstacleType : int, distanceToPlace : int)
{
	print("Yay");
	var obstacle:Transform;
	obstacle = GenerateObstacle();
	switch(obstacleType)
	{
		case 0:
			//repurpose obstacle to jumpable block (assume 1b1b1)
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 5;
			obstacle.transform.position.z = distanceToPlace+30;
			
			obstacle.transform.localScale.x = 2;
			obstacle.transform.localScale.y = 4;
			obstacle.transform.localScale.z = 2;
			break;
		case 1:
			//repurpose obstacle to unpassable obstacle
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 3;
			obstacle.transform.position.z = distanceToPlace+30;
			
			obstacle.transform.localScale.x = 2;
			obstacle.transform.localScale.y = 6;
			obstacle.transform.localScale.z = 2;
			break;
		default:
			print("something broke");
			break;
	}
}

function GenerateObstacle ()
{
	var player:GameObject;
	player = GameObject.Find("Player");
	var travelled = player.GetComponent(Player).distanceTraveled;

	var newObs:Transform;
	if(newObjectQueue.Count == 0)
	{
		newObs = Instantiate (obstacle, Vector3(Random.Range(-9,9), 1, travelled+60), Quaternion.identity);
	}
	else
	{
		newObs = newObjectQueue.Dequeue();
	}
	usedObjectQueue.Enqueue(newObs);
	return newObs;
}

/*using UnityEngine;
using System.Collections.Generic;

public class SkylineManager : MonoBehaviour {

	public Transform prefab;
	public int numberOfObjects;
	public float recycleOffset;

	private Vector3 nextPosition;
	private Queue<Transform> objectQueue;

	void Start () {
		objectQueue = new Queue<Transform>(numberOfObjects);
		nextPosition = transform.localPosition;
		for(int i = 0; i < numberOfObjects; i++){
			Transform o = (Transform)Instantiate(prefab);
			o.localPosition = nextPosition;
			nextPosition.x += o.localScale.x;
			objectQueue.Enqueue(o);
		}
	}

	void Update () {
		if(objectQueue.Peek().localPosition.x + recycleOffset < Player.distanceTraveled){
			Transform o = objectQueue.Dequeue();
			o.localPosition = nextPosition;
			nextPosition.x += o.localScale.x;
			objectQueue.Enqueue(o);
		}
	}
}*/
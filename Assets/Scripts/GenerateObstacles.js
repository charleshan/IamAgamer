#pragma strict

public var trashcanObstacle:Transform;
public var boxObstacle:Transform;
public var pipeObstacle:Transform;
public var rampObstacle:Transform;
public var sawObstacle:Transform;

var usedObjectQueue = new Queue();
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
		var type = Random.Range(1,6);
		type = Mathf.Floor(type);
		CreateScenario(type,travelled+30);
		
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
			Destroy(firstObs.gameObject);
		}
	}
}

function CreateScenario (obstacleType : int, distanceToPlace : int)
{
	var obstacle:Transform;
	switch(obstacleType)
	{
		case 1:
			//repurpose obstacle to trashcan
			obstacle = GenerateObstacle(trashcanObstacle);
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 2;
			obstacle.transform.position.z = distanceToPlace+30;
			break;
		case 2:
			//repurpose obstacle to box obstacle
			obstacle = GenerateObstacle(boxObstacle);
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 2;
			obstacle.transform.position.z = distanceToPlace+30;
			break;
		case 3:
			//repurpose obstacle to pipe obstacle
			obstacle = GenerateObstacle(pipeObstacle);
			obstacle.transform.position.x = -9;
			obstacle.transform.position.y = 5;
			obstacle.transform.position.z = distanceToPlace+30;
			break;
		case 4:
			//repurpose obstacle to ramp obstacle
			obstacle = GenerateObstacle(rampObstacle);
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 2;
			obstacle.transform.position.z = distanceToPlace+30;
			
			obstacle.transform.rotation.y = 30;
			break;
		case 5:
			//repurpose obstacle to saw obstacle
			obstacle = GenerateObstacle(sawObstacle);
			obstacle.transform.position.x = Random.Range(-9,9);
			obstacle.transform.position.y = 2;
			obstacle.transform.position.z = distanceToPlace+30;
			break;
			
		default:
			print("something broke");
			break;
	}
}

function GenerateObstacle (obstacle : Transform)
{

	var newObs:Transform;
	newObs = Instantiate (obstacle, Vector3(0, 0, 0), Quaternion.identity);
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
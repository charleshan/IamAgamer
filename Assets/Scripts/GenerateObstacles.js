#pragma strict

public var obstacle:Transform;
var timer:float = 1;

var usedObjectQueue = new Queue();
var newObjectQueue = new Queue();
var recycleOffset = 30;

function Start () {
	
}

function Update () 
{

	var player:GameObject;
	player = GameObject.Find("Player");
	var travelled = player.GetComponent(Player).distanceTraveled;
	
	timer -= Time.deltaTime;
	if(timer <= 0)
	{
		var newObs:Transform;
		if(newObjectQueue.Count == 0)
		{
			newObs = Instantiate (obstacle, Vector3(Random.Range(-9,9), 1, travelled+30), Quaternion.identity);
		}
		else
		{
			newObs = newObjectQueue.Dequeue();
			newObs.transform.position.x = Random.Range(-9,9);
			newObs.transform.position.z = travelled+30;
		}
		timer = 1;
		usedObjectQueue.Enqueue(newObs);
	}
	
	if(usedObjectQueue.Count > 0)
	{
		var firstObs:Transform = usedObjectQueue.Peek();
	
		if(firstObs.position.x + recycleOffset < travelled)
		{
			usedObjectQueue.Dequeue();
			newObjectQueue.Enqueue(firstObs);
		}
	}
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
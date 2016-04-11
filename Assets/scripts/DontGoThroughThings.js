﻿#pragma strict 
 
 
var layerMask : LayerMask; //make sure we aren't in this layer 
var skinWidth : float = 0.1; //probably doesn't need to be changed 
private var minimumExtent : float; 
private var partialExtent : float; 
private var sqrMinimumExtent : float; 
private var previousPosition : Vector3; 
private var myRigidbody : Rigidbody2D; 
//initialize values 
function Awake() { 
   myRigidbody = GetComponent.<Rigidbody2D>(); 
   previousPosition = myRigidbody.position; 
   minimumExtent = Mathf.Min(Mathf.Min(GetComponent.<Collider2D>().bounds.extents.x, GetComponent.<Collider2D>().bounds.extents.y), GetComponent.<Collider2D>().bounds.extents.z); 
   partialExtent = minimumExtent*(1.0 - skinWidth); 
   sqrMinimumExtent = minimumExtent*minimumExtent; 
} 
 
function FixedUpdate() { 
   //have we moved more than our minimum extent? 
   var movementThisStep : Vector3 = myRigidbody.position - previousPosition; 
   var movementSqrMagnitude : float = movementThisStep.sqrMagnitude;
   if (movementSqrMagnitude > sqrMinimumExtent) { 
      var movementMagnitude : float = Mathf.Sqrt(movementSqrMagnitude);
      var hitInfo : RaycastHit; 
      //check for obstructions we might have missed 
      if (Physics.Raycast(previousPosition, movementThisStep, hitInfo, movementMagnitude, layerMask.value)) 
         myRigidbody.position = hitInfo.point - (movementThisStep*movementMagnitude)*partialExtent; 
    
   } 
   previousPosition = myRigidbody.position; 
}
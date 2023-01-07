import './style.css'

import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import "@babylonjs/gui";
import { createPointerLock } from "./pointerlock.js"



import "@babylonjs/loaders/glTF";
import "@babylonjs/core/Animations/animatable";
import 'babylonjs-procedural-textures';
import 'babylonjs-post-process';

var createScene2 = function (engine) {
    const  scene2 = new BABYLON.Scene(engine);
    scene2.clearColor = BABYLON.Color3.Black();
    scene2.clearCachedVertexData();


  
    engine.enableOfflineSupport = false;
        
    engine.setHardwareScalingLevel(0.5);
  
  
    
    
  
  
    BABYLON.Animation.AllowMatricesInterpolation = true;
  
  
  
  
    var options = new BABYLON.SceneOptimizerOptions(70, 500);
    options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));
  
    options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1.5));
  
  
  
  
  
  
    let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 2, -24), scene2);
    camera.attachControl(canvas, true);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.lowerRadiusLimit = 30;
    camera.upperRadiusLimit = 150;
    camera.angularSensibilityX = 10980000;
      camera.angularSensibilityY = 10980000;
      camera.inertia = 0;
      
    
    // 87 corresponds to 'w'
    // 83 corresponds to 's'
    // 65 corresponds to 'a'
    // 68 corresponds to 'd'
    // See more JavaScript KeyCodes here: https://keycode.info/
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);
  
    camera.speed = 2;
    camera.fov = 0.9;
    camera.inertia = 0;
    camera.maxZ = 100000
//Hero

 

  // pointer
  var pointer = BABYLON.Mesh.CreateSphere("Sphere", 16.0, 0.01, scene2, false, BABYLON.Mesh.DOUBLESIDE);
  // move the sphere upward 1/2 of its height

  pointer.isPickable = false;

  
  
  
  

  // //
  
  var isLocked = false;

  scene2.onPointerDown = function (evt) {
		
    //true/false check if we're locked, faster than checking pointerlock on each single click.
    if (!isLocked) {
        canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
        if (canvas.requestPointerLock) {
            canvas.requestPointerLock();
        }
    }
    
    //continue with shooting requests or whatever :P
    //evt === 1 (mouse wheel click (not scrolling))
    //evt === 2 (right mouse click)
};

var pointerlockchange = function () {
    var controlEnabled = document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || document.pointerLockElement || null;
    
    // If the user is already locked
    if (!controlEnabled) {
        //camera.detachControl(canvas);
        isLocked = false;
    } else {
        //camera.attachControl(canvas);
        isLocked = true;
    }
};

// Attach events to the document
document.addEventListener("pointerlockchange", pointerlockchange, false);
document.addEventListener("mspointerlockchange", pointerlockchange, false);
document.addEventListener("mozpointerlockchange", pointerlockchange, false);
document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
  
  
var gizmoManager = new BABYLON.GizmoManager(scene2);
gizmoManager.positionGizmoEnabled = true;
gizmoManager.rotationGizmoEnabled = true;
gizmoManager.scaleGizmoEnabled = true; 


var gizmoManager = new BABYLON.GizmoManager(scene2);
gizmoManager.positionGizmoEnabled = true;
gizmoManager.rotationGizmoEnabled = true;
gizmoManager.scaleGizmoEnabled = true; 



  
  
  


  
   
  var light5 = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene2);
  light5.diffuse = new BABYLON.Color3(1, 1, 1);
  // light.specular = new BABYLON.Color3(1, 1, 1);
  light5.intensity = 1 
  const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene2);
    light.position = new BABYLON.Vector3(0, 15, -30);
    light.intensity = 8.85 
   // postP





 //Creation of a repeated textured material
 var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene2);
 materialPlane.diffuseTexture = new BABYLON.Texture("./scenes/t1.jpg", scene2);
 materialPlane.specularColor = new BABYLON.Color3(0, 0, 0);
 materialPlane.emissiveColor = new BABYLON.Color3.White();
 materialPlane.emissiveIntensity = 0.01;
 materialPlane.backFaceCulling = false;//Allways show the front and the back of an element

 //Creation of a plane
 const plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:5, width: 13});
 plane.position.set(-16, 0, 0);
 plane.rotation.y = Math.PI/-4;

 plane.material = materialPlane;


 ////////////////////////////////////////
/*
 var materialPlane2 = new BABYLON.StandardMaterial("texturePlane", scene2);
 materialPlane2.diffuseTexture = new BABYLON.Texture("./scenes/t3.jpg", scene2);
 materialPlane2.specularColor = new BABYLON.Color3(0, 0, 0);
 materialPlane2.emissiveColor = new BABYLON.Color3.White();
 materialPlane2.emissiveIntensity = 0.01;
 materialPlane2.backFaceCulling = false;//Allways show the front and the back of an element

 //Creation of a plane
 const plane2 = BABYLON.MeshBuilder.CreatePlane("plane2", {height:5, width: 13});
 plane2.position.set(14, 8, 2);
 plane2.rotation.y = Math.PI/4;

 plane2.material = materialPlane2;

 //////////////////////////////////////

 var materialPlane3 = new BABYLON.StandardMaterial("texturePlane", scene2);
 materialPlane3.diffuseTexture = new BABYLON.Texture("./scenes/t4.jpg", scene2);
 materialPlane3.specularColor = new BABYLON.Color3(0, 0, 0);
 materialPlane3.emissiveColor = new BABYLON.Color3.White();
 materialPlane3.emissiveIntensity = 0.01;
 materialPlane3.backFaceCulling = false;//Allways show the front and the back of an element

 //Creation of a plane
 const plane3 = BABYLON.MeshBuilder.CreatePlane("plane3", {height:8, width: 15});
 plane3.position.set(22, -7, -1);
 plane3.rotation.y = Math.PI/4;

 plane3.material = materialPlane3;



*/





  



   BABYLON.SceneLoader.ImportMesh(null, './scenes/karaleva/', 'kara.glb', scene2, (meshes) => {
    const rootMesh = meshes[0].getChildMeshes()[0];
    meshes[0].position.set(2, -3, -9);
    meshes[0].scaling = new BABYLON.Vector3(2, 2, 2);
    meshes[0].rotationQuaternion = null;
    meshes[0].rotation.y = 64.3;
  
 
  
  }); 













  
  
  // assetsManager.load();
    return scene2;
  };
  
  const canvas = document.getElementById('app1');
  const engine = new BABYLON.Engine(canvas);
  const scene2 = createScene2(engine);
  
  
  
  
  
  window.addEventListener("resize", function () {
    engine.resize();
  });
  
  
  engine.runRenderLoop(() => {
    scene2.render();
    
   //scene2.debugLayer.show();
  
   
  });
  
import './style.css'

import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import "@babylonjs/gui";
import { createPointerLock } from "./pointerlock.js"



import "@babylonjs/loaders/glTF";
import "@babylonjs/core/Animations/animatable";
import 'babylonjs-procedural-textures';
import 'babylonjs-post-process';






let videodome
let videodome1
let videodome2

let dome
let sky




var createScene = function (engine) {
  const  scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color3.Black();
  scene.clearCachedVertexData();
  

  engine.enableOfflineSupport = false;
      
  engine.setHardwareScalingLevel(0.5);


  
  


  BABYLON.Animation.AllowMatricesInterpolation = true;




  var options = new BABYLON.SceneOptimizerOptions(70, 500);
  options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));

  options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1.5));






  let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(594, 368, -2444), scene);
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

  camera.speed = 525;
  camera.fov = 0.9;
  camera.inertia = 0;
  camera.maxZ = 100000









  var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
  }
  
  var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
  }
  
  var speed = 45;
  var frameCount = 200;
  
  
  

  var setCamDefault = function() {
    animateCameraTargetToPosition(camera, speed, frameCount, new BABYLON.Vector3(0, 0, 0));
    animateCameraToPosition(camera, speed, frameCount, new BABYLON.Vector3(594, 368, -2444));
  };

  var setCamLateralLeft = function() {
    animateCameraTargetToPosition(camera, speed, frameCount, new BABYLON.Vector3(0, 15, 0));
    animateCameraToPosition(camera, speed, frameCount, new BABYLON.Vector3(-3715,-23,962));
  };
  
  var light55 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 10), scene);
  light55.diffuse = new BABYLON.Color3(1, 1, 1);
  // light.specular = new BABYLON.Color3(1, 1, 1);
  light55.intensity = 1.15 
  light55.position =1633, -415, 1682;


// props
var light5 = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene);
light5.diffuse = new BABYLON.Color3(1, 1, 1);
// light.specular = new BABYLON.Color3(1, 1, 1);
light5.intensity = 1.15 
const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
  light.position = new BABYLON.Vector3(0, 15, -30);
  light5.intensity = 0.85 
 // postP

/*
 var light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 10), scene);





 var godrays2 = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, camera, null, 10, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
 godrays2.mesh.position = new BABYLON.Vector3(2550, 250, 6950);
godrays2.mesh.scaling = new BABYLON.Vector3(5750, 5750, 5750);
godrays2.mesh.rotation.y = 26;
 light2.position = godrays2.mesh.position;

*/

// A S S E T S



// video domes
dome = new BABYLON.PhotoDome(
  "testdome",
  "scenes/vid/mt.png",
  {
      resolution: 32,
      size: 14000
  },
  scene
); 

dome.position.set(-11500,1050,-35600);   
dome.rotation.y = -70;
dome.scaling.set = (110,6,10);


var pick_m = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

pick_m.position.set(-11500,1050,-35600);
pick_m.scaling = new BABYLON.Vector3(779,779,779);

var pick_mmat = new BABYLON.StandardMaterial("myMaterial", scene);
pick_mmat.alpha = 0;

pick_m.material = pick_mmat;

pick_m.actionManager = new BABYLON.ActionManager(scene);
pick_m.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
  pick_m.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
pick_m.actionManager.registerAction(
new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
function(event){
  var pickedMesh3 = event.meshUnderPointer; 

  window.open("mashtrash.html");
})
);


videodome = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/o.mp4",
  {
      resolution: 10,
      size: 10150,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome.position.set(31500.000,17800.000,29500);


    
/* videodome = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/o.mp4",
  {
      resolution: 10,
      size: 150,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome.position.set(-900,800,400);

videodome1 = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/bilovremya.mp4",
  {
      resolution: 10,
      size: 100,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome1.position.set(-640,600,20); */

/*	    

videodome1 = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/bilovremya.mp4",
  {
      resolution: 10,
      size: 850,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome1.position.set(-2900,900,1400); 








var pick_b = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_b.position.set(-2900,900,1400);
pick_b.scaling = new BABYLON.Vector3(44,44,44);

var pick_bmat = new BABYLON.StandardMaterial("myMaterial", scene);
pick_bmat.alpha = 0;

pick_b.material = pick_bmat;

pick_b.actionManager = new BABYLON.ActionManager(scene);
pick_b.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
    pick_b.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
pick_b.actionManager.registerAction(
new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
function(event){
    var pickedMesh2 = event.meshUnderPointer; 

    window.open("b.html");
})
);

sky = new BABYLON.PhotoDome(
  "testdome",
  "scenes/skybox.png",
  {
      resolution: 8,
      size: 99500
  },
  scene
); 

sky.position.set(0,0,0);   
*/

/*
dome = new BABYLON.PhotoDome(
  "testdome",
  "scenes/vid/mt.png",
  {
      resolution: 32,
      size: 1500
  },
  scene
); 

dome.position.set(-1500,1650,1600);   
dome.rotation.y = 26;



var pick_m = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

        
pick_m.position.set(-1500,1650,1600);
pick_m.scaling = new BABYLON.Vector3(79,79,79);

var pick_mmat = new BABYLON.StandardMaterial("myMaterial", scene);
pick_mmat.alpha = 0.5;

pick_m.material = pick_bmat;

pick_m.actionManager = new BABYLON.ActionManager(scene);
pick_m.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
  pick_b.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
pick_m.actionManager.registerAction(
new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
function(event){
  var pickedMesh3 = event.meshUnderPointer; 

  window.open("mashtrash.html");
})
);



/*
videodome = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/o.mp4",
  {
      resolution: 10,
      size: 550,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome.position.set(-1600,450,1400);


var pick_o = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_o.position.set(-1600,450,1400);
pick_o.scaling = new BABYLON.Vector3(29,29,29);

var pick_omat = new BABYLON.StandardMaterial("myMaterial", scene);
pick_omat.alpha = 0;

pick_o.material = pick_omat;

pick_o.actionManager = new BABYLON.ActionManager(scene);
pick_o.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
    pick_o.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
pick_o.actionManager.registerAction(
new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
function(event){
    var pickedMesh2 = event.meshUnderPointer; 

    window.open("ona.html");
})
);


*/

var pick_o = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_o.position.set(31500.000,17800.000,29500);
pick_o.scaling = new BABYLON.Vector3(609,609,609);

var pick_omat = new BABYLON.StandardMaterial("myMaterial", scene);
pick_omat.alpha = 0;

pick_o.material = pick_omat;

pick_o.actionManager = new BABYLON.ActionManager(scene);
pick_o.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
    pick_o.actionManager.registerAction(
new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
pick_o.actionManager.registerAction(
new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
function(event){
    var pickedMesh2 = event.meshUnderPointer; 

    window.open("ona.html");
})
);


var gl6 = new BABYLON.GlowLayer("glow6", scene, { 
  mainTextureFixedSize: 128,
  blurKernelSize: 64
});
 gl6.intensity = 2.7;


 var selectedMesh = null;
 var highlighter = new BABYLON.HighlightLayer("hl", scene);
 highlighter.blurHorizontalSize = 16;
 highlighter.blurVeryicalSize = 16;

var selectedMesh = null;
var highlighter = new BABYLON.HighlightLayer("hl", scene);
highlighter.blurHorizontalSize = 16;
highlighter.blurVeryicalSize = 16;




var box = BABYLON.MeshBuilder.CreateBox("box", {size: 50}, scene);
            box.position.x = -2153.035;
            box.position.y = -215.600;
            box.position.z = 2494.970;


            box.scaling.x = 22;
            box.scaling.y = 20;

            
            box.rotation.y = 70.181;

box.metadata = {
  link:'xxx.html'
}





var pickmemat78 = new BABYLON.StandardMaterial("myMaterial", scene);
pickmemat78.alpha = 0;

box.material = pickmemat78;





var box1 = BABYLON.MeshBuilder.CreateBox("box1", {size: 205}, scene);
            box1.position.x = 929;
            box1.position.y = -90;
            box1.position.z = -1425;


          
            
            box1.rotation.y = 0;

box1.metadata = {
  link:'web.html'
}





var pickmemat718 = new BABYLON.StandardMaterial("myMaterial", scene);
pickmemat718.alpha = 0;

box1.material = pickmemat718;



// Move the sphere upward 1/2 its height


scene.onPointerObservable.add((pointerInfo)=>{
  if(pointerInfo.type == BABYLON.PointerEventTypes.POINTERPICK){
      if(pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh?.metadata?.link){
          const options = "location=yes,height=570,width=520,scrollbars=yes,status=yes"
          const url = pointerInfo.pickInfo.pickedMesh?.metadata?.link
          const win = window.open(url, "_blank", options)
      }
  }
})


var gizmoManager = new BABYLON.GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true; 


var gizmoManager = new BABYLON.GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true; 





/*
var gizmoManager = new BABYLON.GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true; 


var gizmoManager = new BABYLON.GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true; 


 */

//var assetsManager = new BABYLON.AssetsManager(scene);

//MODELS
/*
var meshTask = assetsManager.addMeshTask("drawsel", "", "./scenes/", "karta2.glb");

          meshTask.onSuccess = function (task) {
             task.loadedMeshes[0].position.set(100, 1300, 870);
             task.loadedMeshes[0].scaling = new BABYLON.Vector3(140, 140, 140);
            
             task.loadedMeshes[0].rotationQuaternion = null;
             task.loadedMeshes[0].rotation.y = 190;
             task.loadedMeshes[0].isPickable = false;
             task.loadedMeshes[0].doNotSyncBoundingInfo = true;
             
          }	

  // MODELS


  */

  var earth = BABYLON.MeshBuilder.CreateSphere("okk", {diameter: 35}, scene);
  earth.position.set(7,-4,33);
  earth.rotation.y = 80;
  earth.scaling = new BABYLON.Vector3(14,19,14);
  earth.actionManager = new BABYLON.ActionManager(scene);
  earth.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
  ).then(
    earth.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
  )
  );
  earth.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
  function(event){
      var pickedMesh29 = event.meshUnderPointer; 
  
      window.open("flesh.html");
  })
  );

var pickmemat = new BABYLON.StandardMaterial("myMaterial", scene);
pickmemat.alpha = 0;

earth.material = pickmemat;




  BABYLON.SceneLoader.ImportMesh(
    
    "Armature",
    "./scenes/",
    "qw.glb",
      
    
    scene,
    function (meshes) {

        meshes[0].scaling.scaleInPlace(900.1)
        var planeOpts = {
            height: 1,
            width: 1,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE
        };
      
        var ANote0Video = BABYLON.MeshBuilder.CreatePlane("plane11", planeOpts, scene);
        var vidPos = (new BABYLON.Vector3(0, 0.01, 0))
        ANote0Video.position = vidPos;
        var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
        var ANote0VideoVidTex = new BABYLON.VideoTexture("", "https://shcandalous.s3.eu-west-2.amazonaws.com/hihoehi.mp4", scene);
        ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
        ANote0VideoMat.roughness = 1;
        ANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
        ANote0VideoMat.emissiveIntensity = 0.01;
        ANote0VideoMat.emissive = 0.1;
        ANote0Video.material = ANote0VideoMat;


   
        

        const meshToChange = scene.getMeshByName('xxx')
        console.log(meshToChange)
        console.log(meshToChange.material)

        meshToChange.material = ANote0VideoMat
     

    });


    var planeOpts1 = {
			height: 188, 
			width: 188, 
			sideOrientation: BABYLON.Mesh.DOUBLESIDE
	};
  var ANote0Video1 = BABYLON.MeshBuilder.CreatePlane("plane22", planeOpts1, scene);
  var vidPos1 = (new BABYLON.Vector3(-250, -130, -1600))
  ANote0Video1.position = vidPos1;
  var ANote0VideoMat1 = new BABYLON.StandardMaterial("m", scene);
  var ANote0VideoVidTex1 = new BABYLON.VideoTexture("", "https://shcandalous.s3.eu-west-2.amazonaws.com/r0001-1882.mp4", scene);
  ANote0VideoMat1.diffuseTexture = ANote0VideoVidTex1;
  ANote0VideoMat1.roughness = 1;
  ANote0VideoMat1.emissiveColor = new BABYLON.Color3.White();
  ANote0VideoMat1.emissiveIntensity = 0.01;
  ANote0Video1.material = ANote0VideoMat1;
	


  var planeOpts12 = {
    height: 1920, 
    width: 1080, 
    sideOrientation: BABYLON.Mesh.DOUBLESIDE
};
var ANote0Video12 = BABYLON.MeshBuilder.CreatePlane("plane222", planeOpts12, scene);
var vidPos12 = (new BABYLON.Vector3(-2153.035, -215.600, 2494.970))
ANote0Video12.position = vidPos12;
ANote0Video12.scaling = new BABYLON.Vector3(1, 0.53, 1);

ANote0Video12.rotation.y = 70.181;
var ANote0VideoMat12 = new BABYLON.StandardMaterial("m", scene);
var ANote0VideoVidTex1 = new BABYLON.VideoTexture("", "https://shcandalous.s3.eu-west-2.amazonaws.com/xxxporn0001-0280.mp4", scene);
ANote0VideoMat12.diffuseTexture = ANote0VideoVidTex1;
ANote0VideoMat12.roughness = 1;
ANote0VideoMat12.emissiveColor = new BABYLON.Color3.White();
ANote0VideoMat12.emissiveIntensity = 0.01;
ANote0Video12.material = ANote0VideoMat12;

    //console.log(ANote0Video);




 





/*

    BABYLON.SceneLoader.ImportMesh(
    
      "Armature",
      "./scenes/",
      "qw.glb",
        
      
      scene,
      function (meshes2) {
  
          meshes2[0].scaling.scaleInPlace(900.1)
          var planeOpts = {
              height: 5.4762,
              width: 7.3967,
              sideOrientation: BABYLON.Mesh.DOUBLESIDE
          };
          var ANote0Video1 = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
          var vidPos = (new BABYLON.Vector3(0, 0, 0.1))
          ANote0Video1.position = vidPos;
          var ANote0VideoMat1 = new BABYLON.StandardMaterial("m", scene);
          var ANote0VideoVidTex = new BABYLON.VideoTexture("", "https://shcandalous.s3.eu-west-2.amazonaws.com/hihoehi.mp4", scene);
          ANote0VideoMat1.diffuseTexture = ANote0VideoVidTex;
          ANote0VideoMat1.roughness = 1;
          ANote0VideoMat1.emissiveColor = new BABYLON.Color3.White();
          ANote0Video1.material = ANote0VideoMat1;
  
  
  
          scene.onPointerObservable.add(function (evt) {
              if (evt.pickInfo.pickedMesh === ANote0Video) {
                  //console.log("picked");
                  if (ANote0VideoVidTex.video.paused)
                      ANote0VideoVidTex.video.play();
                  else
                      ANote0VideoVidTex.video.pause();
                  console.log(ANote0VideoVidTex.video.paused ? "paused" : "playing");
              }
          }, BABYLON.PointerEventTypes.POINTERPICK);
          //console.log(ANote0Video);
  
          const meshToChange = scene.getMeshByName('xxx')
          console.log(meshToChange)
          console.log(meshToChange.material)
  
          meshToChange.material = ANote0VideoMat
  
      });
  


*/




BABYLON.SceneLoader.ImportMesh(null, './scenes/', 'particle.glb', scene, (meshes) => {
  const rootMesh = meshes[0].getChildMeshes()[0];
  meshes[0].position.set(716, -1842.816, 313);
  meshes[0].scaling = new BABYLON.Vector3(158, 158, 158);



}); 


    




    BABYLON.SceneLoader.ImportMesh(null, './scenes/', 'xxx.gltf', scene, (meshes) => {
      const rootMesh = meshes[0].getChildMeshes()[0];
      meshes[0].position.set(716, -1842.816, 313);
      meshes[0].scaling = new BABYLON.Vector3(908, 908, 908);
   
  
  
  }); 



  BABYLON.SceneLoader.ImportMesh(null, './scenes/', 'fly1.glb', scene, (meshes) => {
    const rootMesh = meshes[0].getChildMeshes()[0];
    meshes[0].position.set(5219.674, 2453.377, -17584.166);
    meshes[0].scaling = new BABYLON.Vector3(72, 72, 72);
    meshes[0].rotationQuaternion = null;
    meshes[0].rotation.y = 30;

    rootMesh.actionManager = new BABYLON.ActionManager(scene);
    rootMesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
  ).then(
    rootMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
  );
  rootMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
    function(event){
        var pickedMesh651 = event.meshUnderPointer; 

        window.open("https://shkashish.itch.io/prizv");
    })
);

}); 



















  BABYLON.SceneLoader.ImportMesh(null, './scenes/', 'onapizda.glb', scene, (meshes) => {
    const rootMesh = meshes[0].getChildMeshes()[0];
    meshes[0].position.set(1100.976, 637, -225);
    meshes[0].scaling = new BABYLON.Vector3(400, 400, 400);
    meshes[0].rotationQuaternion = null;
    meshes[0].rotation.y = 0;

    rootMesh.actionManager = new BABYLON.ActionManager(scene);
    rootMesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
  ).then(
    rootMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
  );
  rootMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
    function(event){
        var pickedMesh1 = event.meshUnderPointer; 

        window.open("https://shkashish.itch.io/prizv");
    })
);

}); 



BABYLON.SceneLoader.ImportMesh(null, './scenes/', 'pixyha2.glb', scene, (meshes) => {
  const rootMesh = meshes[0].getChildMeshes()[0];
  meshes[0].position.set(929, -120, -1425);
  meshes[0].scaling = new BABYLON.Vector3(35, 35, 35);
  meshes[0].rotationQuaternion = null;
  meshes[0].rotation.y = 0;

  rootMesh.actionManager = new BABYLON.ActionManager(scene);
  rootMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
  rootMesh.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
rootMesh.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
  function(event){
      var pickedMesh1 = event.meshUnderPointer; 

      window.open("web.html");
  })
);

}); 










var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene);
materialPlane.specularColor = new BABYLON.Color3(0, 0, 0);
materialPlane.backFaceCulling = false;//Allways show the front and the back of an element

const boxDiffuseTexture = new BABYLON.Texture("./scenes/home.png", scene);
boxDiffuseTexture.hasAlpha = true;

materialPlane.diffuseTexture = boxDiffuseTexture;

//Creation of a plane
var plane = BABYLON.Mesh.CreatePlane("plane", 10, scene);
plane.scaling = new BABYLON.Vector3(45,21,21);

plane.position.x = 8.822;
plane.position.y -= -310.35;
plane.position.z += 1000;

plane.actionManager = new BABYLON.ActionManager(scene);
plane.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
      function (event) {
          var pickedMesh3 = event.meshUnderPointer;
          setCamDefault();
      }
  )
) 

plane.parent = camera

plane.material = materialPlane;





var materialPlane1 = new BABYLON.StandardMaterial("texturePlane1", scene);
materialPlane1.specularColor = new BABYLON.Color3(0, 0, 0);
materialPlane1.backFaceCulling = false;//Allways show the front and the back of an element

const boxDiffuseTexture1 = new BABYLON.Texture("./scenes/xxxx.png", scene);
boxDiffuseTexture1.hasAlpha = true;

materialPlane1.diffuseTexture = boxDiffuseTexture1;

//Creation of a plane
var plane1 = BABYLON.Mesh.CreatePlane("plane111", 10, scene);
plane1.scaling = new BABYLON.Vector3(31,31,31);

plane1.position.x = -608.822;
plane1.position.y -= -310.35;
plane1.position.z += 900;

plane1.actionManager = new BABYLON.ActionManager(scene);
plane1.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
      function (event) {
          var pickedMesh3 = event.meshUnderPointer;
          setCamLateralLeft();
      }
  )
) 

plane1.parent = camera

plane1.material = materialPlane1;








/*

  



BABYLON.SceneLoader.ImportMesh(null, './scenes/gurl1', '.glb', scene, (meshes) => {
  const rootMesh2 = meshes[0].getChildMeshes()[0];
  meshes[0].position.set(-6020, 426, -765);
  meshes[0].scaling = new BABYLON.Vector3(204, 204, 204);
  meshes[0].rotationQuaternion = null;
  meshes[0].rotation.y = 0;

  rootMesh2.actionManager = new BABYLON.ActionManager(scene);
  rootMesh2.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOverTrigger }, (e) => { select(e.source); })
).then(
  rootMesh2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnPointerOutTrigger }, (e) => { select(e.source); })
)
);
rootMesh2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
  function(event){
      var pickedMesh2 = event.meshUnderPointer; 

      window.open("vogue.ru");
  })
);

}); 


*/








/*
function select(mesh) {
  highlighter.removeAllMeshes();
  if (selectedMesh === mesh) {
      selectedMesh = null;
  } else {
      highlighter.addMesh(mesh, BABYLON.Color3.Red());
      selectedMesh = mesh;
  }
}
*/


function select(mesh) {
  highlighter.removeAllMeshes();
  if (selectedMesh === mesh) {
      selectedMesh = null;
  } else {
      highlighter.addMesh(mesh, BABYLON.Color3.Red());
      selectedMesh = mesh;
  }
}




// assetsManager.load();
  return scene;
};

const canvas = document.getElementById('app');
const engine = new BABYLON.Engine(canvas);
const scene = createScene(engine);





window.addEventListener("resize", function () {
  engine.resize();
});


engine.runRenderLoop(() => {
  scene.render();
  
// scene.debugLayer.show();

 
});


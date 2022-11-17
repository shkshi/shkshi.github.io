import './style.css'

import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import "@babylonjs/gui";




import "@babylonjs/loaders/glTF";
import "@babylonjs/core/Animations/animatable";
import 'babylonjs-procedural-textures';
import 'babylonjs-post-process';




let videodome
let videodome1
let videodome2

let dome





var createScene = function (engine) {
  const  scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color3.White();
  scene.clearCachedVertexData();
  

  engine.enableOfflineSupport = false;
      
  engine.setHardwareScalingLevel(0.5);

        
  
  


  BABYLON.Animation.AllowMatricesInterpolation = true;




  var options = new BABYLON.SceneOptimizerOptions(70, 500);
  options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));

  options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1.5));






  var camera = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(152, 25, -1138), scene);
  camera.angularSensibilityX = 2000;
  camera.angularSensibilityY = 2000;
  camera.speed  = 27.5;
  camera.maxZ = 15000;
 
  camera.keysUp.push(87); // "w"
  camera.keysDown.push(83); // "s"
  camera.keysRight.push(68); //S  
  camera.keysLeft.push(65); 
  // Airplane like rotation, with faster roll correction and banked-turns.
  // Default is 100. A higher number means slower correction.
  camera.rollCorrect = 10;
  // Default is false.
  camera.bankedTurn = true;
  // Defaults to 90° in radians in how far banking will roll the camera.
  camera.bankedTurnLimit = Math.PI / 2;
  // How much of the Yawing (turning) will affect the Rolling (banked-turn.)
  // Less than 1 will reduce the Rolling, and more than 1 will increase it.
  camera.bankedTurnMultiplier = 1;
  
  // This attaches the camera to the canvas
  camera.attachControl(canvas, false);
  camera.fov, 6;

  


  // logic

  scene.onPointerDown = function () {

    engine.isPointerLock = !engine.isPointerLock;

//true/false check if we're locked, faster than checking pointerlock on each single click.

};


// Event listener when the pointerlock is updated (or removed by pressing ESC for example).

var pointerlockchange = function () {
var controlEnabled = document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || document.pointerLockElement || null;

// If the user is already locked
if (!controlEnabled) {
  //camera.detachControl(canvas);
  isLocked = true;
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



// props
var light5 = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene);
light5.diffuse = new BABYLON.Color3(1, 1, 1);
// light.specular = new BABYLON.Color3(1, 1, 1);
light5.intensity = 1.15 
  const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
  light.position = new BABYLON.Vector3(0, 15, -30);

 // postP





// A S S E T S



// video domes

    
 videodome = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/o.mp4",
  {
      resolution: 10,
      size: 350,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome.position.set(850,-200,300);



var pick_o = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_o.position.set(850,-200,300);
pick_o.scaling = new BABYLON.Vector3(19,19,19);

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






videodome1 = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/bilovremya.mp4",
  {
      resolution: 10,
      size: 350,
      
      clickToPlay: true,
    autoPlay: true
  },
  scene
);
videodome1.position.set(-320,-200,0); 


var pick_b = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_b.position.set(-320,-200,0);
pick_b.scaling = new BABYLON.Vector3(19,19,19);

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










videodome2 = new BABYLON.VideoDome(
  "videoDome",
  "scenes/vid/df.mp4",
  {
      resolution: 10,
      size: 6090,
      clickToPlay: true,
      autoPlay: true
      
      
  },
  scene
);
videodome2.position.set(1,1,1);






dome = new BABYLON.PhotoDome(
    "testdome",
    "scenes/vid/mt.png",
    {
        resolution: 32,
        size: 400
    },
    scene
); 

dome.position.set(150,150,1);   
dome.rotation.y = 27;


var pick_m = BABYLON.MeshBuilder.CreateSphere("hershoe", {diameter: 19}, scene);

          
pick_m.position.set(150,150,1);
pick_m.scaling = new BABYLON.Vector3(23,23,23);

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






var gl6 = new BABYLON.GlowLayer("glow6", scene, { 
  mainTextureFixedSize: 128,
  blurKernelSize: 64
});
 gl6.intensity = 3.5;


 var selectedMesh = null;
 var highlighter = new BABYLON.HighlightLayer("hl", scene);
 highlighter.blurHorizontalSize = 16;
 highlighter.blurVeryicalSize = 16;









function select(mesh) {
  highlighter.removeAllMeshes();
  if (selectedMesh === mesh) {
      selectedMesh = null;
  } else {
      highlighter.addMesh(mesh, BABYLON.Color3.Red());
      selectedMesh = mesh;
  }
}







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

 
})



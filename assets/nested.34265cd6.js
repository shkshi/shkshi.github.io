import{E as v,S as E,C as l,A as z,a as b,H as g,U as P,V as r,k as f,o as L,b as S,D as C,d as y,T as M,M as q,j as D}from"./babylonjs.postProcess.min.5d775203.js";var G=function(c){const n=new E(c);n.clearColor=l.Black(),n.clearCachedVertexData(),c.enableOfflineSupport=!1,c.setHardwareScalingLevel(.5),z.AllowMatricesInterpolation=!0;var p=new b(70,500);p.addOptimization(new g(0,1)),p.addOptimization(new g(0,1.5));let e=new P("UniversalCamera",new r(0,2,-24),n);e.attachControl(t,!0),e.setTarget(r.Zero()),e.lowerRadiusLimit=30,e.upperRadiusLimit=150,e.angularSensibilityX=1098e4,e.angularSensibilityY=1098e4,e.inertia=0,e.keysUp.push(87),e.keysDown.push(83),e.keysLeft.push(65),e.keysRight.push(68),e.speed=2,e.fov=.9,e.inertia=0,e.maxZ=1e5;var h=f.CreateSphere("Sphere",16,.01,n,!1,f.DOUBLESIDE);h.isPickable=!1;var u=!1;n.onPointerDown=function(a){u||(t.requestPointerLock=t.requestPointerLock||t.msRequestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock,t.requestPointerLock&&t.requestPointerLock())};var s=function(){var a=document.mozPointerLockElement||document.webkitPointerLockElement||document.msPointerLockElement||document.pointerLockElement||null;a?u=!0:u=!1};document.addEventListener("pointerlockchange",s,!1),document.addEventListener("mspointerlockchange",s,!1),document.addEventListener("mozpointerlockchange",s,!1),document.addEventListener("webkitpointerlockchange",s,!1);var i=new L(n);i.positionGizmoEnabled=!0,i.rotationGizmoEnabled=!0,i.scaleGizmoEnabled=!0;var i=new L(n);i.positionGizmoEnabled=!0,i.rotationGizmoEnabled=!0,i.scaleGizmoEnabled=!0;var w=new S("Hemi",new r(0,1,0),n);w.diffuse=new l(1,1,1),w.intensity=1;const k=new C("dir01",new r(0,-1,1),n);k.position=new r(0,15,-30),k.intensity=8.85;var o=new y("texturePlane",n);o.diffuseTexture=new M("./scenes/t1.jpg",n),o.specularColor=new l(0,0,0),o.emissiveColor=new l.White,o.emissiveIntensity=.01,o.backFaceCulling=!1;const d=q.CreatePlane("plane",{height:5,width:13});return d.position.set(-16,0,0),d.rotation.y=Math.PI/-4,d.material=o,D.ImportMesh(null,"./scenes/karaleva/","kara.glb",n,a=>{a[0].getChildMeshes()[0],a[0].position.set(2,-3,-9),a[0].scaling=new r(2,2,2),a[0].rotationQuaternion=null,a[0].rotation.y=64.3}),n};const t=document.getElementById("app1"),m=new v(t),O=G(m);window.addEventListener("resize",function(){m.resize()});m.runRenderLoop(()=>{O.render()});

import{E as me,S as ve,C as w,A as H,a as Me,H as ee,U as Oe,V as a,P as fe,b as Pe,D as xe,c as ye,M as v,d as g,e as i,f as s,g as Ae,G as Te,h as ne,i as Ce,j as ie,k as y,l as k,m as _,T as te,n as ae,o as re}from"./babylonjs.postProcess.min.e5cf58d8.js";let oe,D;var ke=function(L){const n=new ve(L);n.clearColor=w.Black(),n.clearCachedVertexData(),L.enableOfflineSupport=!1,L.setHardwareScalingLevel(.5),H.AllowMatricesInterpolation=!0;var F=new Me(70,500);F.addOptimization(new ee(0,1)),F.addOptimization(new ee(0,1.5));let o=new Oe("UniversalCamera",new a(594,368,-2444),n);o.attachControl(se,!0),o.setTarget(a.Zero()),o.lowerRadiusLimit=30,o.upperRadiusLimit=150,o.angularSensibilityX=1098e4,o.angularSensibilityY=1098e4,o.inertia=0,o.keysUp.push(87),o.keysDown.push(83),o.keysLeft.push(65),o.keysRight.push(68),o.speed=525,o.fov=.9,o.inertia=0,o.maxZ=1e5;var Q=function(e,r,t,m){var l=new ae;l.setEasingMode(re.EASINGMODE_EASEINOUT),H.CreateAndStartAnimation("at5",e,"target",r,t,e.target,m,0,l)},W=function(e,r,t,m){var l=new ae;l.setEasingMode(re.EASINGMODE_EASEINOUT),H.CreateAndStartAnimation("at4",e,"position",r,t,e.position,m,0,l)},z=45,b=200,le=function(){Q(o,z,b,new a(0,0,0)),W(o,z,b,new a(594,368,-2444))},ce=function(){Q(o,z,b,new a(0,15,0)),W(o,z,b,new a(-3715,-23,962))},U=new fe("Omni",new a(20,20,10),n);U.diffuse=new w(1,1,1),U.intensity=1.15,U.position=1633;var N=new Pe("Hemi",new a(0,1,0),n);N.diffuse=new w(1,1,1),N.intensity=1.15;const ge=new xe("dir01",new a(0,-1,1),n);ge.position=new a(0,15,-30),N.intensity=.85,D=new ye("testdome","scenes/vid/mt.png",{resolution:32,size:14e3},n),D.position.set(-11500,1050,-35600),D.rotation.y=-70,D.scaling.set=10;var M=v.CreateSphere("hershoe",{diameter:19},n);M.position.set(-11500,1050,-35600),M.scaling=new a(779,779,779);var K=new g("myMaterial",n);K.alpha=0,M.material=K,M.actionManager=new i(n),M.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},e=>{c(e.source)})).then(M.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},e=>{c(e.source)}))),M.actionManager.registerAction(new s(i.OnPickTrigger,function(e){e.meshUnderPointer,window.open("mashtrash.html")})),oe=new Ae("videoDome","scenes/vid/o.mp4",{resolution:10,size:10150,clickToPlay:!0,autoPlay:!0},n),oe.position.set(31500,17800,29500);var O=v.CreateSphere("hershoe",{diameter:19},n);O.position.set(31500,17800,29500),O.scaling=new a(609,609,609);var Z=new g("myMaterial",n);Z.alpha=0,O.material=Z,O.actionManager=new i(n),O.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},e=>{c(e.source)})).then(O.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},e=>{c(e.source)}))),O.actionManager.registerAction(new s(i.OnPickTrigger,function(e){e.meshUnderPointer,window.open("ona.html")}));var we=new Te("glow6",n,{mainTextureFixedSize:128,blurKernelSize:64});we.intensity=2.7;var E=null,f=new ne("hl",n);f.blurHorizontalSize=16,f.blurVeryicalSize=16;var E=null,f=new ne("hl",n);f.blurHorizontalSize=16,f.blurVeryicalSize=16;var p=v.CreateBox("box",{size:50},n);p.position.x=-2153.035,p.position.y=-215.6,p.position.z=2494.97,p.scaling.x=22,p.scaling.y=20,p.rotation.y=70.181,p.metadata={link:"xxx.html"};var j=new g("myMaterial",n);j.alpha=0,p.material=j;var x=v.CreateBox("box1",{size:205},n);x.position.x=929,x.position.y=-90,x.position.z=-1425,x.rotation.y=0,x.metadata={link:"web.html"};var q=new g("myMaterial",n);q.alpha=0,x.material=q,n.onPointerObservable.add(e=>{var r,t,m,l;if(e.type==Ce.POINTERPICK&&e.pickInfo.hit&&((t=(r=e.pickInfo.pickedMesh)==null?void 0:r.metadata)==null?void 0:t.link)){const B="location=yes,height=570,width=520,scrollbars=yes,status=yes",C=(l=(m=e.pickInfo.pickedMesh)==null?void 0:m.metadata)==null?void 0:l.link;window.open(C,"_blank",B)}});var P=new ie(n);P.positionGizmoEnabled=!0,P.rotationGizmoEnabled=!0,P.scaleGizmoEnabled=!0;var P=new ie(n);P.positionGizmoEnabled=!0,P.rotationGizmoEnabled=!0,P.scaleGizmoEnabled=!0;var u=v.CreateSphere("okk",{diameter:35},n);u.position.set(7,-4,33),u.rotation.y=80,u.scaling=new a(14,19,14),u.actionManager=new i(n),u.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},e=>{c(e.source)})).then(u.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},e=>{c(e.source)}))),u.actionManager.registerAction(new s(i.OnPickTrigger,function(e){e.meshUnderPointer,window.open("flesh.html")}));var X=new g("myMaterial",n);X.alpha=0,u.material=X,y.ImportMesh("Armature","./scenes/","qw.glb",n,function(e){e[0].scaling.scaleInPlace(900.1);var r={height:1,width:1,sideOrientation:k.DOUBLESIDE},t=v.CreatePlane("plane11",r,n),m=new a(0,.01,0);t.position=m;var l=new g("m",n),B=new _("","https://shcandalous.s3.eu-west-2.amazonaws.com/hihoehi.mp4",n);l.diffuseTexture=B,l.roughness=1,l.emissiveColor=new w.White,l.emissiveIntensity=.01,l.emissive=.1,t.material=l;const C=n.getMeshByName("xxx");console.log(C),console.log(C.material),C.material=l});var pe={height:188,width:188,sideOrientation:k.DOUBLESIDE},Y=v.CreatePlane("plane22",pe,n),ue=new a(-250,-130,-1600);Y.position=ue;var A=new g("m",n),G=new _("","https://shcandalous.s3.eu-west-2.amazonaws.com/r0001-1882.mp4",n);A.diffuseTexture=G,A.roughness=1,A.emissiveColor=new w.White,A.emissiveIntensity=.01,Y.material=A;var he={height:1920,width:1080,sideOrientation:k.DOUBLESIDE},S=v.CreatePlane("plane222",he,n),de=new a(-2153.035,-215.6,2494.97);S.position=de,S.scaling=new a(1,.53,1),S.rotation.y=70.181;var T=new g("m",n),G=new _("","https://shcandalous.s3.eu-west-2.amazonaws.com/xxxporn0001-0280.mp4",n);T.diffuseTexture=G,T.roughness=1,T.emissiveColor=new w.White,T.emissiveIntensity=.01,S.material=T,y.ImportMesh(null,"./scenes/","particle.glb",n,e=>{e[0].getChildMeshes()[0],e[0].position.set(716,-1842.816,313),e[0].scaling=new a(158,158,158)}),y.ImportMesh(null,"./scenes/","xxx.gltf",n,e=>{e[0].getChildMeshes()[0],e[0].position.set(716,-1842.816,313),e[0].scaling=new a(908,908,908)}),y.ImportMesh(null,"./scenes/","fly1.glb",n,e=>{const r=e[0].getChildMeshes()[0];e[0].position.set(5219.674,2453.377,-17584.166),e[0].scaling=new a(72,72,72),e[0].rotationQuaternion=null,e[0].rotation.y=30,r.actionManager=new i(n),r.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},t=>{c(t.source)})).then(r.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},t=>{c(t.source)}))),r.actionManager.registerAction(new s(i.OnPickTrigger,function(t){t.meshUnderPointer,window.open("https://shkashish.itch.io/prizv")}))}),y.ImportMesh(null,"./scenes/","onapizda.glb",n,e=>{const r=e[0].getChildMeshes()[0];e[0].position.set(1100.976,637,-225),e[0].scaling=new a(400,400,400),e[0].rotationQuaternion=null,e[0].rotation.y=0,r.actionManager=new i(n),r.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},t=>{c(t.source)})).then(r.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},t=>{c(t.source)}))),r.actionManager.registerAction(new s(i.OnPickTrigger,function(t){t.meshUnderPointer,window.open("https://shkashish.itch.io/prizv")}))}),y.ImportMesh(null,"./scenes/","pixyha2.glb",n,e=>{const r=e[0].getChildMeshes()[0];e[0].position.set(929,-120,-1425),e[0].scaling=new a(35,35,35),e[0].rotationQuaternion=null,e[0].rotation.y=0,r.actionManager=new i(n),r.actionManager.registerAction(new s({trigger:i.OnPointerOverTrigger},t=>{c(t.source)})).then(r.actionManager.registerAction(new s({trigger:i.OnPointerOutTrigger},t=>{c(t.source)}))),r.actionManager.registerAction(new s(i.OnPickTrigger,function(t){t.meshUnderPointer,window.open("web.html")}))});var I=new g("texturePlane",n);I.specularColor=new w(0,0,0),I.backFaceCulling=!1;const J=new te("./scenes/home.png",n);J.hasAlpha=!0,I.diffuseTexture=J;var h=k.CreatePlane("plane",10,n);h.scaling=new a(45,21,21),h.position.x=8.822,h.position.y-=-310.35,h.position.z+=1e3,h.actionManager=new i(n),h.actionManager.registerAction(new s(i.OnPickTrigger,function(e){e.meshUnderPointer,le()})),h.parent=o,h.material=I;var V=new g("texturePlane1",n);V.specularColor=new w(0,0,0),V.backFaceCulling=!1;const $=new te("./scenes/xxxx.png",n);$.hasAlpha=!0,V.diffuseTexture=$;var d=k.CreatePlane("plane111",10,n);d.scaling=new a(31,31,31),d.position.x=-608.822,d.position.y-=-310.35,d.position.z+=900,d.actionManager=new i(n),d.actionManager.registerAction(new s(i.OnPickTrigger,function(e){e.meshUnderPointer,ce()})),d.parent=o,d.material=V;function c(e){f.removeAllMeshes(),E===e?E=null:(f.addMesh(e,w.Red()),E=e)}return n};const se=document.getElementById("app"),R=new me(se),ze=ke(R);window.addEventListener("resize",function(){R.resize()});R.runRenderLoop(()=>{ze.render()});
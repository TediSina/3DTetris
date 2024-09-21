import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { Vector3 } from "@babylonjs/core";
import { createBoundaryMesh } from "./createBoundaryMesh";
import * as Tetracubes from "./createTetracubes";


const canvas = (document.getElementById("renderCanvas") as unknown) as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(-1.5, 9.5, 4.5), scene);
camera.setPosition(new Vector3(-1.5, 9.5, 35));
camera.attachControl(canvas, true);
const light = new BABYLON.HemisphericLight("light1", new Vector3(0, 1, 0), scene);
light.intensity = 0.7;


const boundary = createBoundaryMesh(scene, 10, 20, 10, [0, 4, 2]);
boundary.position.x = -1.5;
boundary.position.y = 9.5;
boundary.position.z = 4.5;

const I_tetracube = Tetracubes.createI_Tetracube(scene);
I_tetracube.position.x = 0;
I_tetracube.position.y = 0;
I_tetracube.position.z = 9;
console.log(I_tetracube.getAbsolutePosition());
console.log((I_tetracube.getChildren()[0] as BABYLON.Mesh).getAbsolutePosition());
console.log((I_tetracube.getChildren()[3] as BABYLON.Mesh).getAbsolutePosition());

const LJ_tetracube = Tetracubes.createLJ_Tetracube(scene);
LJ_tetracube.position.x = 0;
LJ_tetracube.position.y = 0;
LJ_tetracube.position.z = 0;
console.log(LJ_tetracube.getAbsolutePosition());
console.log((LJ_tetracube.getChildren()[0] as BABYLON.Mesh).getAbsolutePosition());
console.log((LJ_tetracube.getChildren()[3] as BABYLON.Mesh).getAbsolutePosition());

const SZ_tetracube = Tetracubes.createSZ_Tetracube(scene);
SZ_tetracube.position.x = 5;
SZ_tetracube.position.y = 0;
SZ_tetracube.position.z = 0;

const O_tetracube = Tetracubes.createO_Tetracube(scene);
O_tetracube.position.x = 10;
O_tetracube.position.y = 0;
O_tetracube.position.z = 0;

const T_tetracube = Tetracubes.createT_Tetracube(scene);
T_tetracube.position.x = 15;
T_tetracube.position.y = 0;
T_tetracube.position.z = 0;

const Tower1_Tetracube = Tetracubes.createTower1_Tetracube(scene);
Tower1_Tetracube.position.x = 20;
Tower1_Tetracube.position.y = 0;
Tower1_Tetracube.position.z = 0;

const Tower2_Tetracube = Tetracubes.createTower2_Tetracube(scene);
Tower2_Tetracube.position.x = 25;
Tower2_Tetracube.position.y = 0;
Tower2_Tetracube.position.z = 0;

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

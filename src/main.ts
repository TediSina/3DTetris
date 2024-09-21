import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { Vector3 } from "@babylonjs/core";
import { createBoundaryMesh } from "./createBoundaryMesh";
import * as Tetracubes from "./createTetracubes";
import { positionTetracube } from "./generateTetracube";


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
positionTetracube(I_tetracube, -5, 0, 0);

const LJ_tetracube = Tetracubes.createLJ_Tetracube(scene);
positionTetracube(LJ_tetracube, 0, 0, 0);

const SZ_tetracube = Tetracubes.createSZ_Tetracube(scene);
positionTetracube(SZ_tetracube, 5, 0, 0);

const O_tetracube = Tetracubes.createO_Tetracube(scene);
positionTetracube(O_tetracube, 10, 0, 0);

const T_tetracube = Tetracubes.createT_Tetracube(scene);
positionTetracube(T_tetracube, 15, 0, 0);

const Tower1_Tetracube = Tetracubes.createTower1_Tetracube(scene);
positionTetracube(Tower1_Tetracube, 20, 0, 0);

const Tower2_Tetracube = Tetracubes.createTower2_Tetracube(scene);
positionTetracube(Tower2_Tetracube, 25, 0, 0);

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

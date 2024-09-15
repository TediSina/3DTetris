import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { Vector3 } from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

var scene = new BABYLON.Scene(engine);

const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

camera.setPosition(new Vector3(0, 0, 20));

camera.attachControl(canvas, true);

var light = new BABYLON.HemisphericLight("light1", new Vector3(0, 1, 0), scene);

light.intensity = 0.7;

var gridMaterial = new GridMaterial("groundMaterial", scene);
gridMaterial.majorUnitFrequency = 5;
gridMaterial.minorUnitVisibility = 0.45;
gridMaterial.gridRatio = 1;
gridMaterial.backFaceCulling = false;
gridMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
gridMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
gridMaterial.opacity = 0.98;

var sphere = BABYLON.CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);

sphere.position.y = 2;

sphere.material = gridMaterial;

var ground = BABYLON.CreateBox("box1", { size: 10, width: 7, height: 7 }, scene);
ground.rotate(new Vector3(1, 0, 0), Math.PI / 2);

ground.material = gridMaterial;

engine.runRenderLoop(() => {
    scene.render();
});

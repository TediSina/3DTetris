import * as BABYLON from "@babylonjs/core/Legacy/legacy";


export function createCubeMaterial(scene: BABYLON.Scene, color: BABYLON.Color3) {
    const cubeMaterial = new BABYLON.StandardMaterial("cubeMaterial", scene);
    cubeMaterial.diffuseColor = color;
    cubeMaterial.emissiveColor = color;
    return cubeMaterial;
}


export function createCube(scene: BABYLON.Scene, parent: BABYLON.TransformNode, x: number, y: number, z: number, color: BABYLON.Color3) {
    const cube = BABYLON.MeshBuilder.CreateBox("cube", {size: 1}, scene);
    cube.position = new BABYLON.Vector3(x, y, z);
    cube.parent = parent;
    cube.material = createCubeMaterial(scene, color);
    cube.enableEdgesRendering();
    cube.edgesWidth = 5.0;
    cube.edgesColor = new BABYLON.Color4(0, 0, 0, 1); //black edges
    return cube;
}


export function createI_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("I_Tetracube", scene);
    const color = new BABYLON.Color3(0, 0, 0.5);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 2, 0, 0, color);
    createCube(scene, parent, 3, 0, 0, color);
    return parent;
}


export function createLJ_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("LJ_Tetracube", scene);
    const color = new BABYLON.Color3(0.5, 0, 0);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 2, 0, 0, color);
    createCube(scene, parent, 2, 1, 0, color);
    return parent;
}


export function createT_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("T_Tetracube", scene);
    const color = new BABYLON.Color3(0.7, 0.5, 0.5);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 2, 0, 0, color);
    createCube(scene, parent, 1, 1, 0, color);
    return parent;
}


export function createSZ_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("SZ_Tetracube", scene);
    const color = new BABYLON.Color3(0, 0.5, 0);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 2, 0, 0, color);
    createCube(scene, parent, 0, 1, 0, color);
    createCube(scene, parent, 1, 1, 0, color);
    return parent;
}


export function createO_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("O_Tetracube", scene);
    const color = new BABYLON.Color3(0.6, 0.6, 0);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 0, 1, 0, color);
    createCube(scene, parent, 1, 1, 0, color);
    return parent;
}


export function createTower1_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("Tower_Tetracube2", scene);
    const color = new BABYLON.Color3(0.6, 0.3, 0.0);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 1, 0, 1, color);
    createCube(scene, parent, 1, 1, 0, color);
    return parent;
}


export function createTower2_Tetracube(scene: BABYLON.Scene) {
    const parent = new BABYLON.TransformNode("Tower_Tetracube1", scene);
    const color = new BABYLON.Color3(0.5, 0.5, 0.5);
    createCube(scene, parent, 0, 0, 0, color);
    createCube(scene, parent, 1, 0, 0, color);
    createCube(scene, parent, 0, 0, 1, color);
    createCube(scene, parent, 1, 1, 0, color);  // Tower at the start
    return parent;
}

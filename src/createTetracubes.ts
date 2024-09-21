import * as BABYLON from "@babylonjs/core/Legacy/legacy";


/**
 * Creates a cube with the given position and color.
 * @param scene - The scene to create the cube in.
 * @param x - The x-coordinate of the cube's position.
 * @param y - The y-coordinate of the cube's position.
 * @param z - The z-coordinate of the cube's position.
 * @param color - The color of the cube.
 * @returns The created cube.
 */
export function createCube(scene: BABYLON.Scene, x: number, y: number, z: number, color: BABYLON.Color3) {
    const cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 1 }, scene);
    
    // Set the cube's material
    const cubeMaterial = new BABYLON.StandardMaterial("cubeMaterial", scene);
    cubeMaterial.diffuseColor = color;
    cubeMaterial.emissiveColor = color;
    cube.material = cubeMaterial;
    
    cube.enableEdgesRendering();
    cube.edgesWidth = 5.0;
    cube.edgesColor = new BABYLON.Color4(0, 0, 0, 1); // black edges

    // Apply transformation matrix for position
    const translationMatrix = BABYLON.Matrix.Translation(x, y, z);
    cube.position = BABYLON.Vector3.TransformCoordinates(BABYLON.Vector3.Zero(), translationMatrix);

    return cube;
}


/**
 * Creates an I-shaped Tetracube using matrices
 * @param scene - The scene to create the I-shaped Tetracube in.
 * @returns The created I-shaped Tetracube cubes.
 */
export function createI_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0, 0, 0.5);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 2, 0, 0, color),
        createCube(scene, 3, 0, 0, color),
    ];
    return cubes;
}


/**
 * Creates an L/J-shaped Tetracube using matrices
 * @param scene - The scene to create the L/J-shaped Tetracube in.
 * @returns The created L/J-shaped Tetracube cubes.
 */
export function createLJ_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0.5, 0, 0);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 2, 0, 0, color),
        createCube(scene, 2, 1, 0, color),
    ];
    return cubes;
}


/**
 * Creates a T-shaped Tetracube using matrices
 * @param scene - The scene to create the T-shaped Tetracube in.
 * @returns The created T-shaped Tetracube cubes.
 */
export function createT_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0.7, 0.5, 0.5);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 2, 0, 0, color),
        createCube(scene, 1, 1, 0, color),
    ];
    return cubes;
}


/**
 * Creates an S/Z-shaped Tetracube using matrices
 * @param scene - The scene to create the S/Z-shaped Tetracube in.
 * @returns The created S/Z-shaped Tetracube cubes.
 */
export function createSZ_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0, 0.5, 0);
    const cubes = [
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 2, 0, 0, color),
        createCube(scene, 0, 1, 0, color),
        createCube(scene, 1, 1, 0, color),
    ];
    return cubes;
}


/**
 * Creates an O-shaped Tetracube using matrices
 * @param scene - The scene to create the O-shaped Tetracube in.
 * @returns The created O-shaped Tetracube cubes.
 */
export function createO_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0.6, 0.6, 0);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 0, 1, 0, color),
        createCube(scene, 1, 1, 0, color),
    ];
    return cubes;
}


/**
 * Creates a Tower1-shaped Tetracube using matrices
 * @param scene - The scene to create the Tower1-shaped Tetracube in.
 * @returns The created Tower1-shaped Tetracube cubes.
 */
export function createTower1_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0.6, 0.3, 0.0);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 1, 0, 1, color),
        createCube(scene, 1, 1, 0, color),
    ];
    return cubes;
}


/**
 * Creates a Tower2-shaped Tetracube using matrices
 * @param scene - The scene to create the Tower2-shaped Tetracube in.
 * @returns The created Tower2-shaped Tetracube cubes.
 */
export function createTower2_Tetracube(scene: BABYLON.Scene) {
    const color = new BABYLON.Color3(0.5, 0.5, 0.5);
    const cubes = [
        createCube(scene, 0, 0, 0, color),
        createCube(scene, 1, 0, 0, color),
        createCube(scene, 0, 0, 1, color),
        createCube(scene, 1, 1, 0, color),  // Tower at the start
    ];
    return cubes;
}

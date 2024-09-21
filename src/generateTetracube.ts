import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import * as Tetracubes from "./createTetracubes";


/**
 * Positions a given array of cubes in 3D space by adding the given x, y, and z coordinates to each cube's position.
 * @param cubes - The array of cubes to position.
 * @param x - The x-coordinate to add to the position of each cube.
 * @param y - The y-coordinate to add to the position of each cube.
 * @param z - The z-coordinate to add to the position of each cube.
 */
export function positionTetracube(cubes: BABYLON.Mesh[], x: number, y: number, z: number) {
    cubes.forEach(cube => {
        cube.position.x += x;
        cube.position.y += y;
        cube.position.z += z;
    });
}


export function generateTetracube(scene: BABYLON.Scene) {
    let tetracube: BABYLON.Mesh[];

    const random = Math.floor(Math.random() * 7);
    switch (random) {
        case 0:
            tetracube = Tetracubes.createI_Tetracube(scene);
        case 1:
            tetracube = Tetracubes.createLJ_Tetracube(scene);
        case 2:
            tetracube = Tetracubes.createT_Tetracube(scene);
        case 3:
            tetracube = Tetracubes.createSZ_Tetracube(scene);
        case 4:
            tetracube = Tetracubes.createO_Tetracube(scene);
        case 5:
            tetracube = Tetracubes.createTower1_Tetracube(scene);
        case 6:
            tetracube = Tetracubes.createTower2_Tetracube(scene);
    };
}

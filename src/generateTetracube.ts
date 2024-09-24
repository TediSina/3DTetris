import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import * as Tetracubes from "./createTetracubes";
import { checkTetracubePosition } from "./checkTetracubePosition";
import { Vector3 } from "@babylonjs/core";


/**
 * Sets the position of all the cubes in the given array to the given position.
 * This function changes the position of the cubes in-place.
 * @param cubes - The array of cubes to be positioned.
 * @param position - The position to set the cubes at.
 */
export function positionTetracube(cubes: BABYLON.Mesh[], position: Vector3): void {
    const translationMatrix = BABYLON.Matrix.Translation(position.x, position.y, position.z);
    cubes.forEach(cube => {
        cube.position = BABYLON.Vector3.TransformCoordinates(cube.position, translationMatrix);
    });
}


/**
 * Picks a random tetracube type and creates the corresponding tetracube.
 * @param scene - The scene to create the tetracube in.
 * @returns The created tetracube.
 */
export function pickRandomTetracube(scene: BABYLON.Scene): BABYLON.Mesh[] {
    let tetracube: BABYLON.Mesh[];

    const random = Math.floor(Math.random() * 8);
    switch (random) {
        case 0:
            tetracube = Tetracubes.createI_Tetracube(scene);
            return tetracube;
        case 1:
            tetracube = Tetracubes.createLJ_Tetracube(scene);
            return tetracube;
        case 2:
            tetracube = Tetracubes.createT_Tetracube(scene);
            return tetracube;
        case 3:
            tetracube = Tetracubes.createSZ_Tetracube(scene);
            return tetracube;
        case 4:
            tetracube = Tetracubes.createO_Tetracube(scene);
            return tetracube;
        case 5:
            tetracube = Tetracubes.createTower1_Tetracube(scene);
            return tetracube;
        case 6:
            tetracube = Tetracubes.createTower2_Tetracube(scene);
            return tetracube;
        case 7:
            tetracube = Tetracubes.createTower3_Tetracube(scene);
            return tetracube;
        default:
            tetracube = Tetracubes.createI_Tetracube(scene);
            return tetracube;
    };
}


export function generateTetracubePosition(tetracube: BABYLON.Mesh[]): Vector3 {
    let positionX = Math.floor(Math.random() * (3 - (-6) + 1)) + (-6);
    const positionY = 19;
    let positionZ = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    while (!checkTetracubePosition(tetracube, new Vector3(positionX, positionY, positionZ))) {
        positionX = Math.floor(Math.random() * (3 - (-6) + 1)) + (-6);
        positionZ = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    }

    return new Vector3(positionX, positionY, positionZ);
}


export function generateTetracubeRotation(tetracube: BABYLON.Mesh[]) {
    // TODO
}


export function generateTetracube(scene: BABYLON.Scene): BABYLON.Mesh[] {
    const tetracube: BABYLON.Mesh[] = pickRandomTetracube(scene);

    const position: Vector3 = generateTetracubePosition(tetracube);

    positionTetracube(tetracube, position);
    return tetracube;
}

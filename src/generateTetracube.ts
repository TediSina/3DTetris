import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import * as Tetracubes from "./createTetracubes";
import { checkTetracubePosition } from "./checkTetracubePosition";


/**
 * Sets the position of a tetracube in the scene.
 * @param tetracube - The tetracube to position.
 * @param x - The x-coordinate of the tetracube's new position.
 * @param y - The y-coordinate of the tetracube's new position.
 * @param z - The z-coordinate of the tetracube's new position.
 */
export function positionTetracube(cubes: BABYLON.Mesh[], x: number, y: number, z: number) {
    const translationMatrix = BABYLON.Matrix.Translation(x, y, z);
    cubes.forEach(cube => {
        cube.position = BABYLON.Vector3.TransformCoordinates(cube.position, translationMatrix);
    });
}


/**
 * Picks a random tetracube type and creates the corresponding tetracube.
 * @param scene - The scene to create the tetracube in.
 * @returns The created tetracube.
 */
export function pickRandomTetracube(scene: BABYLON.Scene) {
    let tetracube: BABYLON.Mesh[];

    const random = Math.floor(Math.random() * 7);
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
        default:
            tetracube = Tetracubes.createI_Tetracube(scene);
            return tetracube;
    };
}


export function generateTetracube(scene: BABYLON.Scene) {
    const tetracube: BABYLON.Mesh[] = pickRandomTetracube(scene);

    let positionX = Math.floor(Math.random() * (3 - (-6) + 1)) + (-6);
    const positionY = 19;
    let positionZ = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    while (!checkTetracubePosition(tetracube, positionX, positionY, positionZ)) {
        positionX = Math.floor(Math.random() * (3 - (-6) + 1)) + (-6);
        positionZ = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    }

    positionTetracube(tetracube, positionX, positionY, positionZ);
    return tetracube;
}

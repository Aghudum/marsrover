import {Coordinate} from "./coordinate";

export interface Direction {
    right: () => Direction;
    left: () => Direction;
    move: (coordinate: Coordinate) => Coordinate;
}
import {Direction} from "./direction";
import {South} from "./south";
import {North} from "./north";
import {Coordinate} from "./coordinate";

export class West implements Direction {
    left(): Direction {
        return new South();
    }

    right(): Direction {
        return new North();
    }

    move(coordinate: Coordinate): Coordinate {
        return {
            x: coordinate.x - 1,
            y: coordinate.y
        }
    }

    toString(){
        return "W";
    }
}
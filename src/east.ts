import {Direction} from "./direction";
import {North} from "./north";
import {South} from "./south";
import {Coordinate} from "./coordinate";

export class East implements Direction {
    left(): Direction {
        return new North();
    }

    right(): Direction {
        return new South();
    }

    move(coordinate: Coordinate): Coordinate {
        return {
            x: coordinate.x + 1,
            y: coordinate.y
        }
    }

    toString(){
        return "E";
    }
}
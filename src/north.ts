import {Direction} from "./direction";
import {Coordinate} from "./coordinate";
import {West} from "./west";
import {East} from "./east";

export class North implements Direction {
    left(): Direction {
        return new West();
    }

    right(): Direction {
        return new East();
    }

    move(coordinate: Coordinate): Coordinate {
        return {
            x: coordinate.x,
            y: coordinate.y + 1
        }
    }

    toString(){
        return "N";
    }
}
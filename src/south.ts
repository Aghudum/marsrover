import {Direction} from "./direction";
import {Coordinate} from "./coordinate";
import {West} from "./west";
import {East} from "./east";

export class South implements Direction {
    left(): Direction {
        return new East();
    }

    right(): Direction {
        return new West();
    }

    move(coordinate: Coordinate): Coordinate {
        return {
            x: coordinate.x,
            y: coordinate.y - 1
        }
    }

    toString(){
        return "S";
    }
}
import {Direction} from "./direction";
import {Coordinate} from "./coordinate";

export class Rover {
    private direction: Direction;
    private coordinate: Coordinate;
    private readonly commandMap: Record<string, () => void> = {
        "R": () => this.turnRight(),
        "L": () => this.turnLeft(),
        "M": () => this.move()
    };

    constructor(direction: Direction, coordinate: Coordinate = { x: 0, y: 0}) {
        this.direction = direction;
        this.coordinate = coordinate;
    }

    private turnLeft() {
        this.direction = this.direction.left();
    }

    private turnRight() {
        this.direction = this.direction.right();
    }

    private move() {
        this.coordinate = this.direction.move(this.coordinate);
    }

    execute(commands: string): string {
        commands.split("").forEach(command => {
            this.commandMap[command]();
        });

        return `${this.coordinate.x} ${this.coordinate.y} ${this.direction.toString()}`
    }
}
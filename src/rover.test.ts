import {North} from "./north";
import {East} from "./east";
import {Rover} from "./rover";
import {South} from "./south";
import {West} from "./west";

describe('Rover tests', () => {
    const directionMap = {
        ["N"]: new North(),
        ["S"]: new South(),
        ["W"]: new West(),
        ["E"]: new East()
    };

    describe('when turning right', () => {
        it.each`
            initialDirection | finalDirection
            ${"N"} |${"E"}
            ${"S"} |${"W"}
            ${"E"} |${"S"}
            ${"W"} |${"N"}
        `
        (`should face $finalDirection from $initialDirection`, ({ initialDirection, finalDirection }) => {
            let rover = new Rover(directionMap[initialDirection]);
            expect(rover.execute("R")).toEqual(`0 0 ${finalDirection}`);
        })
    });

    describe('when turning left', () => {
        it.each`
            initialDirection | finalDirection
            ${"N"} |${"W"}
            ${"S"} |${"E"}
            ${"E"} |${"N"}
            ${"W"} |${"S"}
        `
        (`should face $finalDirection from $initialDirection`, ({ initialDirection, finalDirection }) => {
            const rover = new Rover(directionMap[initialDirection]);
            expect(rover.execute("L")).toEqual(`0 0 ${finalDirection}`);
        })
    });

    describe('when moving', () => {
        it.each`
            direction | startCoordinate | endCoordinate
            ${"N"} | ${{ x: 0, y: 0}} | ${{ x: 0, y: 1}}
            ${"S"} | ${{ x: 0, y: 2}} | ${{ x: 0, y: 1}}
            ${"E"} | ${{ x: 0, y: 0}} | ${{ x: 1, y: 0}}
            ${"W"} | ${{ x: 2, y: 0}} | ${{ x: 1, y: 0}}
        `
        (`while facing $direction should move from $startCoordinate to $endCoordinate`, ({ direction, startCoordinate, endCoordinate }) => {
            const rover = new Rover(directionMap[direction], startCoordinate);
            expect(rover.execute("M")).toEqual(`${endCoordinate.x} ${endCoordinate.y} ${direction}`);
        })
    });

    it('position should change from `1 2 N` to `1 3 N` after executing commands LMLMLMLMM', () => {
        const rover = new Rover(new North(), { x: 1, y: 2});
        expect(rover.execute("LMLMLMLMM")).toEqual("1 3 N");
    });

    it('position should change from `3 3 E` to `5 1 E` after executing commands MMRMMRMRRM', () => {
        const rover = new Rover(new East(), { x: 3, y: 3});
        expect(rover.execute("MMRMMRMRRM")).toEqual("5 1 E");
    });
});
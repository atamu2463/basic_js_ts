import { demoApp } from './demo.mjs';

//
describe("demoApp", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(demoApp(1, 2)).toBe(3);
        }
    )
})
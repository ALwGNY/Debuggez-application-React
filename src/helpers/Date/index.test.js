import { getMonth } from './index.js';

describe("Date helper", () => {
        it("should return 'janvier' for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01")
            const result = getMonth(date)
            expect(result).toBe("janvier")
        });

        it("should return 'juillet' for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08")
            const result = getMonth(date)
            expect(result).toBe("juillet")
        });
    });


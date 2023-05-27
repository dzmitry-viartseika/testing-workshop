import {renderHook} from "@testing-library/react";
import {useConverter} from "./useConverter";

const COURSE = 42;
const TEST_RUB_AMOUNT = 100;
const CALCULATED_USD_AMOUNT = 2.38;

describe('when rendered', () => {
    it('RUB input should have a value equal to initial', () => {
        const {result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        expect(result.current.rubValue).toEqual(TEST_RUB_AMOUNT);
    })
    it('USD value should equal to calculated USD amount', () => {
        const {result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        expect(result.current.usdValue).toEqual(CALCULATED_USD_AMOUNT);
    })
});

describe('when called an `setRubValue` method', () => {
    it.todo('should update the RUB value')
    it.todo('should recalculate the USD value')
});

describe('when called an `setUsd Value` method', () => {
    it.todo('should update the USD value')
    it.todo('should recalculate the RUB value')
})

describe('when re-rendered', () => {
    it.todo('should update its value')
})
import {act, renderHook} from "@testing-library/react";
import {useConverter} from "./useConverter";

const COURSE = 42;
const TEST_RUB_AMOUNT = 100;
const CALCULATED_USD_AMOUNT = 2.38;

describe('when rendered', () => {
    it('RUB input should have a value equal to initial', () => {
        const {result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        expect(result.current.rub).toEqual(TEST_RUB_AMOUNT);
    })
    it('USD value should equal to calculated USD amount', () => {
        const {result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        expect(result.current.usd).toEqual(CALCULATED_USD_AMOUNT);
    })
});

describe('when called an `setRubValue` method', () => {
    it('should update the RUB value', () => {
        const {result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        act(() => {
            result.current.updateRub(10);
        })
        expect(result.current.rub).toEqual(10);
    })
    it('should recalculate the USD value', () => {
        const { result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        act(() => {
            result.current.updateRub(10);
        })
        expect(result.current.usd).toEqual(0.24);
    })
});

describe('when called an `setUsd Value` method', () => {
    it('should update the USD value', () => {
        const { result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        act(() => {
            result.current.updateUsd(10);
        })
        expect(result.current.usd).toEqual(10);
    })
    it('should recalculate the RUB value', () => {
        const { result } = renderHook(() => useConverter(TEST_RUB_AMOUNT, COURSE));
        act(() => {
            result.current.updateUsd(10);
        })

        expect(result.current.rub).toEqual(420);
    })
})

describe('when re-rendered', () => {
    it.todo('should update its value')
})
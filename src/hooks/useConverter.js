import { useState, useEffect } from "react";
import { rubToUsd, usdToRub } from "../helpers/converter";

const RUB_USD = 'rub-usd';
const USD_RUB = 'usd-rub';

export function useConverter(initialRubValue, course) {
    const calculatedUsdAmount = rubToUsd(initialRubValue, course);
    const [rub, setRub] = useState(initialRubValue);
    const [usd, setUsd] = useState(calculatedUsdAmount);

    useEffect(() => {
        setRub(initialRubValue);
        setUsd(rubToUsd(initialRubValue, course));
    }, [initialRubValue, course]);

    function createUpdater(direction) {
        const isFromRub = direction === RUB_USD;
        const convert = isFromRub ? rubToUsd : usdToRub;
        const setOriginal = isFromRub ? setRub : setUsd;
        const setTarget = isFromRub ? setUsd : setRub;

        return function update(value) {
            const original = Number(value);
            const target = convert(original, course);

            setOriginal(original);
            setTarget(target);
        };
    }

    const updateRub = createUpdater(RUB_USD);
    const updateUsd = createUpdater(USD_RUB);

    return {
        rub,
        usd,
        updateRub,
        updateUsd,
    };
}
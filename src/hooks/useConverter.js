import { useState } from "react";
import {rubToUsd, usdToRub} from "../helpers/converter";

export function useConverter(initialRubValue, course) {
    const calculatedUsdAmount = rubToUsd(initialRubValue, course);
    const [rubValue, setRubValue] = useState(initialRubValue);
    const [usdValue, setUsdValue] = useState(calculatedUsdAmount);

    const updateRub = (value) => {
        const rub = +(value);
        const usd = rubToUsd(rub, course);

        setRubValue(rub);
        setUsdValue(usd);
    }

    const updateUsd = (value) => {
        const usd = +(value);
        const rub = usdToRub(usd, course);

        setRubValue(rub);
        setUsdValue(usd);
    }

    return { rubValue, setRubValue, usdValue, setUsdValue, updateRub, updateUsd }
}
import { useState } from "react";
import {rubToUsd} from "../helpers/converter";

export function useConverter(initialRubValue, course) {
    const calculatedUsdAmount = rubToUsd(initialRubValue, course);
    const [rubValue, setRubValue] = useState(initialRubValue);
    const [usdValue, setUsdValue] = useState(calculatedUsdAmount);

    return { rubValue, setRubValue, usdValue, setUsdValue }
}
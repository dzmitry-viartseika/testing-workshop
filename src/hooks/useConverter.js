import { useState } from "react";

export function useConverter() {
    const [rubValue, setRubValue] = useState(100);
    const [usdValue, setUsdValue] = useState(1);

    return { rubValue, setRubValue, usdValue, setUsdValue }
}
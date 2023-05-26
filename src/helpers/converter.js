const ROUNDING = 2;
export function rubToUsd(value, course) {
    return +(value / course).toFixed(ROUNDING);
}

export function usdToRub(value, course) {
    return +(value * course).toFixed(ROUNDING)
}
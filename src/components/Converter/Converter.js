import styles from './Converter.module.css'
import { useConverter } from './useConverter';
import { useSelector } from 'react-redux';
import {selectCourse} from "../../store/features/course/slice";

export function Converter() {
    const initialCourse = useSelector(selectCourse);
    const {rub, updateUsd, usd, updateRub} = useConverter(100, initialCourse);
    return (
        <form className={styles.converter}>
            <label>
                <p>Сумма в рублях</p>
                <input
                    type="number"
                    name="rub"
                    min="0"
                    step="1"
                    data-testid="converter__input--rub"
                    value={rub}
                    onChange={(e) => updateRub(e.target.value)}
                />
            </label>

            <label>
                <p>Сумма в долларах</p>
                <input
                    type="number"
                    name="usd"
                    min="0"
                    step="1"
                    value={usd}
                    data-testid="converter__input--usd"
                    onChange={(e) => updateUsd(e.target.value)}
                />
            </label>
        </form>
    );
}
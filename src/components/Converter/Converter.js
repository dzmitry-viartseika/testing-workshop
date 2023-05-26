import styles from './Converter.module.css'
import { useConverter } from '../../hooks/useConverter';

export function Converter() {
    const {rubValue, setUsdValue, usdValue, setRubValue} = useConverter();
    return (
        <form className={styles.converter}>
            <label>
                <p>Сумма в рублях</p>
                <input
                    value={rubValue}
                    onChange={(event) => setRubValue(event.target.value)}
                    type="number"
                    name="rub"
                    min="0"
                    step="1"
                    data-testid="converter__input--rubs"
                />
            </label>

            <label>
                <p>Сумма в долларах</p>
                <input
                    value={usdValue}
                    onChange={(event) => setUsdValue(event.target.value)}
                    type="number"
                    name="usd"
                    min="0"
                    step="1"
                    data-testid="converter__input--usd"
                />
            </label>
        </form>
    )
}
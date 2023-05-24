import { quotes } from '../../constants/quotes';
import styles from './Quote.module.css'
import { selectRandomQuote } from '../../helpers/selectRandomQuote';

const DEFAULT_QUOTE = selectRandomQuote(quotes);

export function Quote({ quote = DEFAULT_QUOTE }) {
    const { text, author } = quote;
    return (
        <footer className={styles.quote}>
            <blockquote data-testid="blockquote">{ text }</blockquote>
            <cite data-testid="cite" className={styles.author}>- { author }</cite>
        </footer>
    )
}
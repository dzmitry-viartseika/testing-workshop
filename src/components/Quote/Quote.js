import { quotes } from '../../constants/quotes';
export function Quote() {
    const {text, author} = quotes[0];
    return <>
        <blockquote>{ text }</blockquote>
        <cite>- { author }</cite>
    </>
}
import { render, screen } from '@testing-library/react';
import { Quote } from './Quote';
import { quotes } from "../../constants/quotes";

const QUOTE_STUB = quotes[1];

describe("when rendered", () => {

    const { text, author } = QUOTE_STUB;

    it("should contain an expected text", () => {
        render(<Quote quote={QUOTE_STUB} />);
        const result = screen.getByText(new RegExp(text));
        expect(result).toBeInTheDocument();
    });

    it("should contain an expected author", () => {
        render(<Quote quote={QUOTE_STUB} />);
        const result = screen.getByText(new RegExp(author));
        expect(result).toBeInTheDocument();
    });
});
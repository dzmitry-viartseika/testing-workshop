import { render, screen } from '@testing-library/react';
import { Converter } from './Converter';
import userEvent from "@testing-library/user-event";

describe('when rendered', () => {
    it('rub input should have a value with a rub amount', () => {
        render(<Converter />);
        expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
    })

    it('rub input should have a value with a usd amount', () => {
        render(<Converter />);
        expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(1);
    })
})

describe('when typed in a Rub input', () => {
    it('should update its value', () => {
        render(<Converter />);
        const inputElement = screen.getByTestId('converter__input--rubs');
        userEvent.clear(inputElement);
        userEvent.type(inputElement, '42');
        expect(inputElement).toHaveValue(42);
    })
})

describe('when typed in a Usd input', () => {
    it('should update its value', () => {
        render(<Converter />);
        const inputElement = screen.getByTestId('converter__input--usd');
        userEvent.clear(inputElement);
        userEvent.type(inputElement, '2');
        expect(inputElement).toHaveValue(2);
    })
})
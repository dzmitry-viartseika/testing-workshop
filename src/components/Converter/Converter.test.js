import { render, screen } from '@testing-library/react';
import { Converter } from './Converter';
import userEvent from "@testing-library/user-event";

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();
jest.mock('./useConverter', () => ({
    useConverter() {
        return {
            rub: 100,
            usd: 2.38,
            updateRub: mockUpdateRub,
            updateUsd: mockUpdateUsd,
        }
    }
}))

describe('when rendered', () => {
    it('rub input should have a value with a rub amount', () => {
        render(<Converter />);
        expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
    })

    it('rub input should have a value with a usd amount', () => {
        render(<Converter />);
        expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
    })
})

describe('when typed in a Rub input', () => {
    it('should update its value', () => {
        render(<Converter />);
        const inputElement = screen.getByTestId('converter__input--rub');
        userEvent.clear(inputElement);
        userEvent.type(inputElement, '42');
        expect(mockUpdateRub).toHaveBeenCalledWith('42');
    })
})

describe('when typed in a Usd input', () => {
    it('should update its value', () => {
        render(<Converter />);
        const inputElement = screen.getByTestId('converter__input--usd');
        userEvent.clear(inputElement);
        userEvent.type(inputElement, '2');
        expect(mockUpdateUsd).toHaveBeenCalledWith('2');
    })
})
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing <AddCategory />', () => {

    test('should change input value', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'NBA' } });
        expect(input.value).toBe('NBA');

        // screen.debug();
    })

    test('should call onNewCategory if input has value', () => {
        const inputValue = 'Denver Nuggets';

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        // screen.debug();
    })

})
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing <AddCategory />', () => {

    test('should change input value', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'NBA' } });
        expect(input.value).toBe('NBA');

        screen.debug();
    })

})
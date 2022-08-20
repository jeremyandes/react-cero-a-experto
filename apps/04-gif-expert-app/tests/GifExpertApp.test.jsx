import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testing <GifExpertApp />', () => {

    test('should match snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    test('should render correctly', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp'));
    })

    test('should add category', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: 'NBA' } });
        fireEvent.submit(form);

        expect(screen.getAllByText('Cargando...').length).toBe(2);

        screen.debug();
    })

})
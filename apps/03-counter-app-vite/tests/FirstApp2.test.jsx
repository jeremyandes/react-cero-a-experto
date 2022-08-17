import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Jeremy';
    const subtitle = 2525;

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el mensaje "Jeremy"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('Debe mostrar el título en un H1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('Debe mostrar el subtítulo enviado por props', () => {
        render(<FirstApp
            title={title}
            subtitle={subtitle} />
        );
        expect(screen.getAllByText(subtitle).length).toBe(3);
    })

})
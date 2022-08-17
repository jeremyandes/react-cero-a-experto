import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Jeremy';
    //     const { container } = render(<FirstApp title={title} />);
    //     expect(container).toMatchSnapshot();

    // })

    test('Debe mostrar el título en un H1', () => {

        const title = 'Jeremy';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('Debe mostrar el titulo enviado por props', () => {

        const title = 'Jeremy';
        const subtitle = 2525;
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(getAllByText(subtitle).length).toBe(3);
    })

})
import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en el componente <CounterApp />', () => {

    const value = 100;

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value} />)
        expect(screen.getByText(value)).toBeTruthy();
    })

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        expect(screen.getByText(value + 1)).toBeTruthy();
    })

    test('Debe decrementar con el botón -1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText(value - 1)).toBeTruthy();
    })

    test('Debe funcionar el botón de reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        screen.debug();

        expect(screen.getByText(value)).toBeTruthy();
    })

})
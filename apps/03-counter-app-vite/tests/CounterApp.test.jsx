import { CounterApp } from '../src/CounterApp';
import { render, screen } from '@testing-library/react';

describe('Pruebas en el componente <CounterApp />', () => {

    const value = 100;

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value} />)
        expect(screen.getByText(value)).toBeTruthy();
    })

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot();
    })

})
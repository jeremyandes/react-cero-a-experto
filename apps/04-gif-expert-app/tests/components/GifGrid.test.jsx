import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Testing <GifGrid />', () => {
    const category = 'NBA';

    test('should show loading first', () => {

        render(<GifGrid category={category} />);
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));

    })

})

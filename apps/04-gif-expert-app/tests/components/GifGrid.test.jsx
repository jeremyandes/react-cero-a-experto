import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Creando un mock con el path de useFetchGifs
jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {
    const category = 'NBA';

    test('should show loading first', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
    })

    test('should show items when images are loaded by useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'NBA',
                url: 'https://localhost/nba',
            },
            {
                id: 'BCD',
                title: 'Denver Nuggets',
                url: 'https://localhost/denver-nuggets',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })

})

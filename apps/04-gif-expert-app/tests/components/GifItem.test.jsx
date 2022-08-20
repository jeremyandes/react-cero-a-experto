import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Testing <GifItem />', () => {

    const title = 'Michael Jordan';
    const url = 'https://media0.giphy.com/media/l3q2JCu9lep6dAmyY/giphy.gif?cid=4f32db46skaam7bco6t1ev32fy7dvl6l2227o7vualbk7pik&rid=giphy.gif&ct=g'

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('should show image with URL and ALT attribute', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show title in component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })


})
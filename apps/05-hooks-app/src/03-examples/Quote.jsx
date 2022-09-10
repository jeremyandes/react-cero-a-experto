import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
    const pRef = useRef();
    const [boxSixe, setBoxSixe] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSixe({ width, height });

    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-end" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
            }}>
                <p ref={pRef} className="mb-2">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSixe)}</code>
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}
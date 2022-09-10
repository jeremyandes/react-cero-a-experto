import { memo } from 'react';
import PropTypes from 'prop-types';

export const Small = memo(({ value }) => {

    console.log('Me volví a dibujar :D');

    return (
        <small>{value}</small>
    )
});

Small.propTypes = {
    value: PropTypes.number.isRequired,
}
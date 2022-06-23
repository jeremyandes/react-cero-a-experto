import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h4>{subtitle}</h4>
        </>
    );

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 123,
}
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    const clickEvent = (event) => console.log(event);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button onClick={clickEvent}>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
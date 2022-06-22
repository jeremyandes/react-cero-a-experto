const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = () => {
    return (
        <>
            <h1>{getResult(1, 2)}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h4>Soy un subtítulo</h4>
        </>
    )
}
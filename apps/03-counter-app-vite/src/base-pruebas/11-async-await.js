export const getImagen = async () => {

    try {
        const apiKey = 'h0lXkO2rN89vY3PLpQp23Se8J0su2WsP';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen';
    }
}
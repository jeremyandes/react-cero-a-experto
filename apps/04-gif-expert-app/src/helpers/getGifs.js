const baseUrl = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async (category) => {
    const url = `${baseUrl}?api_key=h0lXkO2rN89vY3PLpQp23Se8J0su2WsP&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    return data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))
}
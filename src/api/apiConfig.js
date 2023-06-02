const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'dde3a77ef5f933261b91378350334c0f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
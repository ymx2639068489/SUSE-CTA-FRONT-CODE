const getAssetsFile = (url) => {
    return new URL(`../assets/image/${url}`, import.meta.url).href
}




export default {
    getAssetsFile,
}
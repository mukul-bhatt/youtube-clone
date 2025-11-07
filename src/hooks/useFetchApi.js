const useFetchApi = async (API) => {
    const data = await fetch(API);
    const json = await data.text();
    return json;
}

export default useFetchApi;
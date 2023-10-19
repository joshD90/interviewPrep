export const fetchData = async (urls: string[]): Promise<string[]> => {

    const fetchPromises = await Promise.all(urls.map((url) => fetch(url)));
    const resultsPromises = await Promise.all(
      fetchPromises.map((result) => {
        if (!result.ok) throw Error(result.statusText);
        return result.text();
      })
    );
    return resultsPromises;

};

export const fetchData = async (urls: string[]): Promise<string[]> => {
  try {
    const fetchPromises = await Promise.all(urls.map((url) => fetch(url)));
    const resultsPromises = await Promise.all(
      fetchPromises.map((result) => {
        if (!result.ok) throw Error(result.statusText);
        return result.text();
      })
    );
    return resultsPromises;
  } catch (error) {
    throw error as Error;
  }
};

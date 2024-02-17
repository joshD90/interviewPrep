type AggBook = { id: number; title: string; authorId: number };
type AggAuthor = { id: number; name: string };
type Agged = { id: number; title: string; authorName: string };

const myFetch = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  return data;
};

const aggregateBooksAndAuthor = (
  authors: AggAuthor[],
  books: AggBook[]
): Agged[] => {
  const aggedCollection: Agged[] = books.map((book) => {
    const authorName = authors.find(
      (author) => author.id === book.authorId
    )?.name;
    if (!authorName) return null;
    return { id: book.id, title: book.title, authorName };
  });

  return aggedCollection;
};

const fetchAndAggregate = async (
  bookUrl: string,
  authorUrl: string
): Promise<Agged[]> => {
  try {
    const twoResponses = await Promise.all([
      myFetch<AggBook[]>(bookUrl),
      myFetch<AggAuthor[]>(authorUrl),
    ]);

    const aggregatedResult = aggregateBooksAndAuthor(
      twoResponses[1],
      twoResponses[0]
    );
    return aggregatedResult;
  } catch (error) {
    console.error(error);
  }
};

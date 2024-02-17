import { FC, useCallback, useEffect, useState } from "react";
import { ScrollItem } from "./ScrollItem";
type Props = { url: string };
export type ScrollContent = { postName: string; postContent: string };
export const InfiniteScroller: FC<Props> = ({ url }) => {
  //load initial
  //set a trigger at bottom of content that when loaded will trigger another call (perhaps third from last to give us some time)
  const [offset, setOffset] = useState(0);
  const [scrollContent, setScrollContent] = useState<ScrollContent[]>([]);

  useEffect(() => {
    const abortContoller = new AbortController();

    (async () => {
      try {
        const response = await fetch(`${url}?offset=${offset}`, {
          signal: abortContoller.signal,
        });
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setScrollContent((prev) => [...prev, ...data]);
      } catch (error) {
        console.error(error);
      }
    })();

    return () => abortContoller.abort();
  }, [url, offset]);

  const handleTrigger = useCallback(
    () => setOffset((prev) => prev + 10),
    [setOffset]
  );

  return (
    <div>
      {scrollContent.map((scrollItem, index) => {
        const gapPosOrNeg = index - offset;
        if (gapPosOrNeg > 20 || gapPosOrNeg < -20) return null;

        return (
          <ScrollItem
            item={scrollItem}
            lastTrigger={offset - 3 === index}
            doTrigger={handleTrigger}
          />
        );
      })}
    </div>
  );
};

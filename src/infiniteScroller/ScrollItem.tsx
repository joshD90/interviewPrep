import { FC, useEffect, useRef } from "react";
import { ScrollContent } from "./InfiniteScrollerContainer";

type Props = {
  item: ScrollContent;
  lastTrigger: boolean;
  doTrigger: () => void;
};
export const ScrollItem: FC<Props> = ({ item, lastTrigger, doTrigger }) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef?.current) return;
    const checkIfInView = () => {
      if (!triggerRef.current) return;
      const boundingRect = triggerRef.current.getBoundingClientRect();

      if (boundingRect.bottom <= window.innerHeight && boundingRect.top >= 0) {
        doTrigger();
        //remove so we dont infinitely recall doTrigger
        triggerRef.current.removeEventListener("scroll", checkIfInView);
      }
    };

    triggerRef.current.addEventListener("scroll", checkIfInView);
  }, []);

  return (
    <div>
      <p>{item.postName}</p>
      <p>{item.postContent}</p>
      {lastTrigger && <div ref={triggerRef}></div>}
    </div>
  );
};

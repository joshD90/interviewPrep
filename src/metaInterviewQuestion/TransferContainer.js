import { useState } from "react";

import List from "./List";
import Actions from "./Actions";

import { items } from "./data";

import "./styles.css";

const TransferContainer = () => {
  const [leftItems, setLeftItems] = useState(
    items.map((item) => ({ itemValue: item, readyToTransfer: false }))
  );
  const [rightItems, setRightItems] = useState([]);

  const handleClickAction = (clickDirection) => {
    const startState = clickDirection === "right" ? leftItems : rightItems;
    const startSetState =
      clickDirection === "right" ? setLeftItems : setRightItems;
    const endSetState =
      clickDirection === "right" ? setRightItems : setLeftItems;

    const itemsToMove = startState.filter((items) => items.readyToTransfer);

    startSetState((prev) =>
      prev
        .filter((item) => !item.readyToTransfer)
        .map((item) => ({ ...item, readyToTransfer: false }))
    );
    endSetState((prev) => {
      const updatedState = [...prev, ...itemsToMove];
      console.log(updatedState, "updatedState");
      return updatedState
        .sort((a, b) => a.itemValue - b.itemValue)
        .map((item) => ({ ...item, readyToTransfer: false }));
    });
  };

  return (
    <div className="container">
      <List side="left" state={leftItems} setState={setLeftItems} />
      <Actions clickAction={handleClickAction} />
      <List side="right" state={rightItems} setState={setRightItems} />
    </div>
  );
};

export default TransferContainer;

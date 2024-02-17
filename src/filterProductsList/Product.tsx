import { FC } from "react";
import { TProductMapped } from "./products";

type Props = { item: TProductMapped; nameFilter: string };

export const Product: FC<Props> = ({ item, nameFilter }) => {
  if (
    nameFilter !== "" &&
    !item.name.toLowerCase().includes(nameFilter.toLowerCase())
  )
    return null;
  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <p>{item.price}</p>
        <p>{item.name}</p>
      </div>
      <p>{item.stocked}</p>
    </div>
  );
};

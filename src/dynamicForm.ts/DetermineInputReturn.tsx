export const DetermineInputReturn = (obj: unknown) => {
  if (!obj || typeof obj !== "object") return null;
  if (!("name" in obj) || !("label" in obj) || !("type" in obj)) return null;
  if (obj.type === "select") return <p>Select</p>;
  if (obj.type === "text") return <p>text</p>;
  if (obj.type === "number") return <p>number</p>;

  return null;
};

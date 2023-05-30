import { FC, useState } from "react";

const array: string[] = ["one", "two", "three", "four"];

export const DeleteList: FC = () => {
  const [stringArray, setStringArray] = useState(array);

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    //create a value to this within this stack frame as we lose reference to the event due to asyncronousness
    const id = event.currentTarget.id;
    setStringArray(() => {
      const filteredArray = stringArray.filter((el) => el !== id);
      console.log(event.currentTarget);
      return filteredArray;
    });
  };

  return (
    <div>
      {stringArray.map((currentString) => (
        <div key={currentString}>
          <p>{currentString}</p>
          <button onClick={handleDelete} id={currentString}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

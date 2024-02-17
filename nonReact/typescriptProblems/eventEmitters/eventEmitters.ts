import EventEmitter from "events";
import { readFile } from "fs/promises";

const myEmitter = new EventEmitter();

myEmitter.on("finish-file-read", (fileText: string) =>
  console.log("Finished Reading File " + fileText)
);

const readFileAndNotify = async () => {
  try {
    const fileText = await readFile("./randomText.txt", "utf-8");
    myEmitter.emit("finish-file-read", fileText);
  } catch (error) {
    myEmitter.emit("file-read-error");
  }
};

readFileAndNotify();

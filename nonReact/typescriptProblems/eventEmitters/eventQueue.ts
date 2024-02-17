import EventEmitter from "events";

export class AsyncTaskQueue extends EventEmitter {
  private concurrency: number;
  private running: number;
  private queue: (() => Promise<unknown>)[];

  constructor(concurrency: number) {
    super();
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  public addTask(task: () => Promise<unknown>) {
    this.queue.push(task);
    this.run();
  }

  public run() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      this.running = this.running++;

      task()
        .then((result) => {
          this.emit("taskCompleted", result);
        })
        .catch((err) => {
          console.log("CAUGHT IN THE CATCH");
          this.emit("error", err);
        })
        .finally(() => {
          this.running--;
          if (this.queue.length > 0) {
            this.run();
          } else if (this.running === 0) {
            this.emit("queueEmpty");
          }
        });
    }
  }
}

const asyncTask1 = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Result of async task 1"), 1000)
  );
};

const asyncTask2 = async () => {
  return new Promise((_resolve, reject) =>
    setTimeout(() => reject(new Error("Failed to execute")), 1000)
  );
};

const queue = new AsyncTaskQueue(2);

queue.on("taskCompleted", (result) => console.log("Task completed: " + result));
queue.on("error", (err) => console.log("Task failed with an err" + err));
queue.on("queueEmpty", () => console.log("All tasks completed"));

queue.addTask(asyncTask1);
queue.addTask(asyncTask2);

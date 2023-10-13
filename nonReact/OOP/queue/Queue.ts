class Queue<T> {
  private myQueue: T[] = [];

  public enqueue(item: T): void {
    this.myQueue.push(item);
  }
  public dequeue(): T | undefined {
    const topOfQueue = this.myQueue[0];
    this.myQueue = this.myQueue.filter((value, index) => index !== 0);
    return topOfQueue;
  }
}

const shoppingQueue = new Queue();

shoppingQueue.enqueue(1);
shoppingQueue.enqueue(2);
shoppingQueue.enqueue(3);

console.log(shoppingQueue.dequeue());
console.log(shoppingQueue.dequeue());
console.log(shoppingQueue.dequeue());

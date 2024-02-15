// Imagine you are tasked with implementing a simple caching mechanism for a web application to reduce the number of API calls for frequently requested data. This cache should temporarily store data retrieved from API calls, identify when to fetch fresh data versus when to serve cached data, and manage the expiration of cached items.

export class Cache<T> {
  private store: Map<string, { item: T; createdAt: number }>;
  private cacheLengthSeconds: number;

  public constructor(ttl?: number) {
    this.store = new Map();
    this.cacheLengthSeconds = (ttl ?? 60) * 1000;
  }

  public setItem(key: string, valueToSet: T) {
    this.store.set(key, { item: valueToSet, createdAt: Date.now() });
  }

  public getItem(key: string): T | undefined {
    const itemToRetrieve = this.store.get(key);
    if (!itemToRetrieve) return undefined;
    if (Date.now() - itemToRetrieve.createdAt > this.cacheLengthSeconds) {
      this.store.delete(key);
      return undefined;
    }

    return itemToRetrieve.item;
  }

  public cleanUpOutOfDate(): void {
    this.store.forEach((storeItem, key) => {
      if (Date.now() - storeItem.createdAt > this.cacheLengthSeconds)
        this.store.delete(key);
    });
  }
}

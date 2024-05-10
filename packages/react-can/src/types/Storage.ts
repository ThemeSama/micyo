export interface UseStorage {
  /** Add new storage item */
  setItem(key: string, item: any): void;
  /** Get storage item */
  getItem(key: string): string | null | undefined;
  /** Remove storage item */
  removeItem(key: string): void;
}

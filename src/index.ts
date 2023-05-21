import { createIsomorphicDestructurable } from "create-isomorphic-destructurable";

export function crpr<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: any) => void;
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return createIsomorphicDestructurable(
    {
      promise,
      resolve,
      reject,
    },
    [promise, resolve, reject],
  );
}

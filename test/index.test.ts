import { describe, expect, it } from "vitest";

import { crpr } from "../src";

describe("should", () => {
  it("resolve", async () => {
    function makeSuccess() {
      const [promise, resolve] = crpr<number>();
      resolve(114_514);

      return promise;
    }
    await expect(makeSuccess()).resolves.toBe(114_514);
  });
  it("reject", async () => {
    function makeError() {
      const [promise, , reject] = crpr<number>();
      reject(new Error("114514"));

      return promise;
    }
    await expect(() => makeError()).rejects.toThrow("114514");
  });
  it("should support both object and array destructuring", async () => {
    function makeSuccess() {
      const [promise, resolve] = crpr<number>();
      resolve(114_514);

      return promise;
    }
    function makeSuccess2() {
      const { promise, resolve } = crpr<number>();
      resolve(114_514);

      return promise;
    }
    await expect(makeSuccess()).resolves.toBe(114_514);
    await expect(makeSuccess2()).resolves.toBe(114_514);
  });
});

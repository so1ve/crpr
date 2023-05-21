# crpr

[![NPM version](https://img.shields.io/npm/v/crpr?color=a1b858&label=)](https://www.npmjs.com/package/crpr)

Create a promise, but avoid using constructors.

## 📦 Installation

```bash
$ npm install crpr
$ yarn add crpr
$ pnpm add crpr
```

## 🚀 Usage

```ts
import { crpr } from "crpr";

const { promise, resolve, reject } = crpr<string>();
// or const [promise, resolve, reject] = crpr<string>();

resolve("114514");

promise.then(console.log); // 114514
```

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [Ray](https://github.com/so1ve)

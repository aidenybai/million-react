> ⚠️ _This is a very early stage demonstration of React 18 support._ ⚠️

# ⚛️ [Million](https://github.com/aidenybai/million) + React

### Write the same modern React with a faster Virtual DOM

Million makes creating user interfaces as easy as [React](https://reactjs.org), but with faster performance and smaller bundle size for the end user. By computing the user interface beforehand with a compiler, Million reduces the overhead of traditional Virtual DOM.

> Okay cool... but why should I use Million if I can just use [Preact](https://preactjs.com/) if I need something a bit more lightweight?

While alternative libraries like [Preact](https://preactjs.com/) reduce bundle sizes by efficient code design, Million takes it a step further by **leveraging compilation** to make a quantum leap in improving bundle size **and** render speed.

Think of it as if [React](https://preactjs.com/)'s API and [Svelte](https://svelte.dev/)'s compiler had a baby. [A baby with _**super speed! 👶**_](https://millionjs.org/benchmarks)

> Refer to the [Million docs](https://millionjs.org) for Virtual DOM and the [React docs](https://beta.reactjs.org/apis) for the API

## Quick Start

The easiest way to use Million is to open it in StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/aidenybai/million-react)

If you want to use it locally, you can either fork the project, or clone it directly.

```
git clone https://github.com/aidenybai/million-react.git
cd million-react
npm install
```

Once you've done that, open `src/App.jsx` and start tinkering!

## Usage

This is a Vite project. There are two ways to run it:

- `npm run dev`: runs the project in development mode.
- `npm run build`: bundles the project for production.

## Limitations

While the majority of commonly used React API features are supported, such as state, components, fragments, etc., there are more advanced features that may not be supported.

For instance, while class components are supported, some lifecycle methods are not or act as passthroughs.

Additionally, because [React Fiber](https://www.velotio.com/engineering-blog/react-fiber-algorithm) is not supported by default, some features, particularly Suspense, are implemented only as passthrough components.

Some libraries in the React ecosystem may not work out of the box with Million.

_TL;DR: The best way to see if something is supported is to import and try it._

## License

Million is [MIT-licensed](https://github.com/aidenybai/million/blob/main/LICENSE) open-source software and [research project](https://arxiv.org/abs/2202.08409) by [Aiden Bai](https://aidenybai.com).

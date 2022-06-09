> **⚠️ Please note this is a very early stage demonstration of compatibility with the React 18. ⚠️**
>
> [Limitations exist](#limitations), please proceed with caution. Not everything will work out of the box, as this project is just a proof of concept. Don't use this in production, **you have been warned!**

# [Million](https://github.com/aidenybai/million)/React compatibility starter

This project allows you leverage Million's Virtual DOM while writing React code. Get faster rendering (a compiler optimizes virtual DOM beforehand) while ensuring the same developer experience React provides.

Refer to the [Million documentation](https://millionjs.org) to understand the internals and the [React beta documentation](https://beta.reactjs.org/apis) to reference the API

## Quick Start

The easiest way to use Million is it open it in StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/aidenybai/million-react-compat)

If you want to use it locally, you can either fork the project, or clone it directly.

```
git clone https://github.com/aidenybai/million-react-compat
cd million-react-compat
npm install
npm run dev
```

Once you've done that, open `src/App.jsx` and start tinkering!

## Usage

This is a Vite project. There are two ways to run it:

- `npm dev`: runs the project in development mode.
- `npm build`: bundles the project for production.

## Limitations

View the commented out exports in:

- [`react`](https://github.com/aidenybai/million/blob/main/src/react/react.ts)
- [`react-dom`](https://github.com/aidenybai/million/blob/main/src/react/react-dom.ts)

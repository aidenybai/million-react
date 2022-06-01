> **⚠️ Please note this is a very early stage demonstration of compatibility with the React 18. ⚠️**
>
> [Limitations exist](#limitations), please proceed with caution. Not everything will work out of the box, as this project is just a proof of concept.

# [Million](https://github.com/aidenybai/million)/React compatibility demo

The purpose of this project is to utilize Million's Virtual DOM and allow users to spin up a project that allows them to write basic React code and see it rendered.

Refer to the [Million documentation](https://millionjs.org) to understand the internals and the [React beta documentation](https://beta.reactjs.org/apis) to reference the API

## Setup

You can either fork the project, or clone it directly.

Here is how you clone it directly:

```
git clone https://github.com/aidenybai/million-react-compat
cd million-react-compat
npm install
npm run dev
```

## Usage

This is a Vite project. There are two ways to run it:

- `npm dev`: runs the project in development mode.
- `npm build`: bundles the project for production.

## Available Hooks

- `useState`
- `useEffect`
- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useRef`
- `useLayoutEffect`

## Limitations

This list is nonexhaustive.

- Fragments
- Class components
- Portals
- Suspense
- SSR
- `forwardRef`
- `memo`
- Children API
- _and more..._
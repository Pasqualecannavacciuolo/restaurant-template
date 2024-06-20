### <img width="36" height="36" src="https://img.icons8.com/color/48/react-native.png" alt="react"/> <img width="36" height="36" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> <img width="36" height="36" src="https://img.icons8.com/color/48/vite.png" alt="vite"/> <img width="36" height="36" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css"/> <img width="48" height="36" src="https://reactrouter.com/_brand/react-router-mark-color.png" alt="react_router"/>

# React + TypeScript + Vite + TailwindCSS + React Router

## ❗Non devi fare altro che copiare questa cartella e iniziare a lavorare i passaggi qui sotto inseriti servono solo come promemoria di quello fatto

Questo template serve per velocizzare il processo di creazione di applicativi con il seguente stack tecnologico

## Tech Stack

Dillinger uses a number of open source projects to work properly:

- Vite
- React
- Typescript
- TailwindCSS
- React Router

## Installation

Ovviamente avrtai bisogno di [Node.js](https://nodejs.org/) v20+ come minimo, nello specifico v22.0

React+Typescript

```sh
# Creare progetto React + Typescript
npm create vite@latest <nome-progetto> -- --template react-ts
cd <nome_progetto>
npm i
```

TailwindCSS

```sh
# Installare TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

All'interno del file tailwind.config.js

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

All'interno del file index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

React Router

```sh
npm install react-router-dom
```

Trovi la configurazione per react router nel file main.ts

## License

MIT

**Free Software, Hell Yeah!**

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

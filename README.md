# <img width="48px" height="48px" src="https://camo.githubusercontent.com/39d8cf29263594898012e20b654c95d4337cca642e48574366a993c6d0f8a742/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f72656163742e737667" /> React + <img width="48px" height="48px" src="https://camo.githubusercontent.com/186fbed5f21edb485a85b1f566feaa25c97a233a3b97768096ae0229fc55b14f/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747970657363726970742e737667" /> TypeScript + Vite + TailwindCSS + React Router DOM

## ❗Non devi fare altro che copiare questa cartella e iniziare a lavorare i passaggi qui sotto inseriti servono solo come promemoria di quello fatto

Questo template serve per velocizzare il processo di creazione di applicativi con il seguente stack tecnologico

## Tech Stack

Dillinger uses a number of open source projects to work properly:

- Vite
- React
- Typescript
- TailwindCSS
- React Router DOM

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

React Router DOM

```sh
npm install react-router-dom
```

Trovi la configurazione per react router dom nel file main.ts

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

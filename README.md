# Inicializar un proyecto

Inicializamos el proyecto

```bash
npm init
```

Inicializar un proyecto react sin el componente react-cli

```bash
npm install --save webpack webpack-cli webpack-dev-server
npm install --save react react-dom
npm install --save babel-core babel-loader babel-preset-react babel-preset-env
```

Generamos el siguiente arbol

```bash
mkdir dist
mkdir src
touch webpack.config.js
touch .babelrc
touch dist/index.html
touch src/app.js
```


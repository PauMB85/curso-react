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

## Validar las propiedades entrada

si se quiere validar las entradas de un compoenete se debe de instalar el siguiente paquete

```bash
npm install --save prop-types
```

## Redux

Es una librería que surge para entender como fluyen los cambios en los datos a través de la app.
El estado se almacena en un __store__, estos estados son inmutables, si queremos un nuevo estado, lo creamos de nuevo.


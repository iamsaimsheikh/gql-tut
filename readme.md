# Setting Up Apollo with TypeScript

To set up Apollo Server with TypeScript, follow these steps:

1. Follow the instructions provided in the [Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/getting-started).
   
2. Install the `tsc-alias` package using npm:

    ```bash
    npm install --save-dev tsc-alias
    ```

   This package correctly transpiles import paths when TypeScript (.ts) files are converted to JavaScript (.js).

3. Modify the `scripts` section in your `package.json` file as follows:

    ```json
    "scripts": {
        "compile": "tsc && tsc-alias",
        "start": "npm run compile && nodemon ./dist/index.js"
    }
    ```

   This change ensures that TypeScript is compiled correctly using `tsc` and `tsc-alias`, and then the application starts with `nodemon`.

4. Add the following additional options to your `tsconfig.json` file after the compiler options:

    ```json
    "tsc-alias": {
        "resolveFullPaths": true,
        "verbose": false
    }
    ```

   These options configure `tsc-alias` to resolve full paths and suppress verbose output.


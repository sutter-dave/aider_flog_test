# Project Setup

## Project Creation

To set up the project environment, install necessary dependencies, and create the basic directory structure, follow these steps:

1. Initialize a new project with npm.
2. Install React and ReactDOM.
3. Install TypeScript and set up a `tsconfig.json` file.
4. Install and configure Webpack as the build tool.
5. Create a basic directory structure:
    - `src`: This is where all the source code will reside.
        - `components`: This is where all the React components will reside.
        - `contexts`: This is where all the React contexts will reside.
        - `reducers`: This is where all the reducers will reside.
        - `types`: This is where all the TypeScript types will reside.
        - `utils`: This is where all the utility functions will reside.
    - `docs`: This is where all the design documents will reside. The structure of this folder mirrors the structure of the `src` folder.
6. Install and configure ESLint as the linter and Prettier as the formatter.
7. Install and configure Jest and React Testing Library as the testing tools.
8. Use React's built-in state management features like `useState`, `useContext`, and `useReducer`.
9. Additional Dependencies
   - Open AI API: `openai`
   - Webpack Dev Server: `webpack-dev-server`

## Design Documents

For each code file, there is a corresponding high-level design document. These documents are synchronized with their corresponding code files throughout the application's lifecycle. For more details, refer to the [Design Documents](../ext/DesignDocuments.md) guide.


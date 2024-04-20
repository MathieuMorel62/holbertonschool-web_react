# <p align="center">TypeScript</p>

![typescript](https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/156d644d-5376-46c5-bb35-702a451e527a)
t
## 📝 Description

The TypeScript project is designed to demonstrate TypeScript's advanced capabilities in type management and interface structuring. This project consists of several tasks that guide the user through different techniques to strengthen type security within a TypeScript application, including the creation of classes, the implementation of interfaces, and the use of generic types.

## 📚 Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

## 🛠️ Technologies and Tools Used

- **TypeScript**: Used for its ability to add a static type check to JavaScript, thus improving the maintainability and quality of the code.
- **Webpack and Babel**: Used to transpile and bundle TypeScript scripts into JavaScript executable in the browser.
- **ESLint**: Configured for TypeScript to maintain consistent code quality and detect coding style errors.
- **Jest**: Used for writing unit tests for TypeScript scripts.

## 📋 Prerequisite

- Node.js version 12.x or higher
- npm for dependency management
- A code editor such as Visual Studio Code with support for TypeScript

## 📊 Data Files

<details>
<summary>package.json</summary>
<br>

```json
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

</details>
<details>
<summary>.eslintrc.js</summary>
<br>

```js
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

</details>
<details>
<summary>tsconfig.json</summary>
<br>

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

</details>
<details>
<summary>webpack.config.js</summary>
<br>

```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

</details>

## 🚀 Installation and Configuration

1. Clone the GitHub repository:

```bash
git clone https://github.com/MathieuMorel62/holbertonschool-web_react/
```

2. Navigate to the project's directory:

```bash
cd TypeScript
```

3. Install the project's dependencies:

```bash
npm install
```

4. Compile the project:

```bash
npm run build
```

## 💡 Use

To execute the transpiled script:

```bash
npm run start-dev
```

This will launch the application in your default browser at the address `localhost:8080`.

## ✨ Main Features

- `Interface Management`: Creation and use of interfaces to define the shape of objects, thus increasing the robustness of the code.
- `Generic Types`: Use of generic types to create reusable components.

## 📝 Task List

| Number | Task                     | Description                                                                 |
| ------ | ------------------------ | --------------------------------------------------------------------------- |
| 0      | [**Student Interface**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_0/js/main.ts) | Defines the basic properties of a student.                                 |
| 1      | [**Teacher Interface**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_1/js/main.ts) | Adds specific methods for teachers.                                         |
| 2      | [**Directors Interface**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_1/js/main.ts) | Extends the Teacher interface to include management responsibilities.       |
| 3      | [**Print Teacher**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_1/js/main.ts) | Implements a function to format teacher's name.                             |
| 4      | [**Student Class**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_1/js/main.ts) | Implements a class representing a student with methods for homework and display name. |
| 5      | [**Advanced Types Part 1**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_2/) | Explores advanced TypeScript types.                                         |
| 6      | [**Employee Functions**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_2/js/main.ts) | Functions to determine if an employee is a Director and execute appropriate tasks. |
| 7      | [**String Literal Types**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_2/js/main.ts) | Implements string literals to restrict input to specific strings.           |
| 8      | [**Ambient Namespaces**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_3/) | Uses ambient namespaces for advanced type management in TypeScript.         |
| 9      | [**Namespace & Declaration Merging**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_4/) | Explores the concept of declaration merging in TypeScript namespaces.       |
| 10     | [**Brand Convention & Nominal Typing**](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/TypeScript/task_5/) | Implements nominal typing to enforce type distinctions at runtime.          |

## 📬 Contact

- **LinkedIn Profile**: [Mathieu Morel](https://www.linkedin.com/in/mathieu-morel-9ab457261/)

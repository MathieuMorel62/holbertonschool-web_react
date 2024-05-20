# <p align="center">React Redux Action Creator & Normalizr</p>

## 📝 Description

The **React Redux action creator + normalizr** project aims to illustrate the use of Redux with the creative actions and the Normalizr library for state normalization. It offers a structured approach to managing the state in React applications, simplifying the process of managing complex data with Normalizr.

This project focuses on creating and managing Redux actions, standardising nested JSON data, and writing tests to ensure the robustness of the code. The main objectives include learning the normalization of state forms, the creation of asynchronous actions, and the implementation of unit tests to validate functionality.

## 📚 Resources

- [Normalizr Documentation](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [Async Actions in Redux](https://redux.js.org/advanced/async-actions)
- [Writing Tests for Redux](https://redux.js.org/recipes/writing-tests)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Getting Started and Core Concepts](https://intranet.hbtn.io/rltoken/Yd9gOVf8dlCViUZFilvDMw)
- [Redux Actions](https://intranet.hbtn.io/rltoken/QVQntahVkVJq8HCJYAOTHA)

## 🛠️ Technologies and Tools Used

- **React**: JavaScript library for building user interfaces. Chosen for its modularity and performance.
- **Redux**: A predictable state container for JavaScript applications. Used to manage the overall state of the application centrally.
- **Normalizr**: A library to standardize nested JSON data. Used to simplify the management of complex state forms.
- **Jest**: JavaScript test framework. Chosen for its complete and easy-to-use test capabilities.
- **Babel**: A JavaScript transpiler. Used to compile ES6+ code in JavaScript compatible with current browsers.

## 📋 Prerequisite

- ![Ubuntu](https://img.shields.io/badge/ubuntu-18.04-orange)
- ![NodeJS](https://img.shields.io/badge/node.js-12.x.x-green)
- ![NPM](https://img.shields.io/badge/npm-6.x.x-red)
- ![React](https://img.shields.io/badge/react-16.x.x-blue)
- ![Redux](https://img.shields.io/badge/redux-4.x.x-purple)

## 📊 Data Files
<details>
<summary>notifications.json</summary>
<br>

```json
[
  {
    "id": "5debd76480edafc8af244228",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      "isRead": true,
      "type": "urgent",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  {
    "id": "5debd764507712e7a1307303",
    "author": {
      "id": "5debd7648ba8641ce0a34ea4",
      "name": {
        "first": "Norton",
        "last": "Grimes"
      },
      "email": "norton.grimes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 37
    },
    "context": {
      "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
      "isRead": false,
      "type": "urgent",
      "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et."
    }
  },
  {
    "id": "5debd76444dd4dafea89d53b",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
      "isRead": false,
      "type": "urgent",
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed."
    }
  }
]
```

</details>
<details>
<summary>login-success.json</summary>
<br>

```json
{
  "first_name": "Johann",
  "last_name": "Salva",
  "email": "johann.salva@holberton.nz",
  "profile_picture": "http://placehold.it/32x32"
}
```

</details>

## 🚀 Installation and Configuration

1. Step 1: Clone the GitHub repository on your local machine.

```sh
git clone https://github.com/MathieuMorel62/holbertonschool-web_react.git
```

2. Step 2: Navigate to the project directory.

```sh
cd 0x08_react_redux_action_creator_normalizr
```

3. Step 3: Install the project dependencies.

```sh
npm install
```

4. Step 4: Run the project in development mode.

```sh
npm start
```

5. Step 5: Access the application by visiting the URL in your browser.

```sh
http://localhost:8564/
```

6. Step 6: Run the tests to verify the project functionality.

```sh
npm test
```

## ✨ Main Features

- **Reading JSON data**: The project allows you to read and display `notifications.json` data in a list.

- **Data normalization**: Using Normalizr to normalize nested JSON data for easier state management.

- **Redux actions**: Creation of Redux actions to manage user interactions and update the overall status.

- **Asynchronous actions**: Management of asynchronous actions with Redux Thunk for simulated API calls.

- **Unit Tests**: Writing unit tests to validate the proper functioning of Redux actions and reducers.

## 📝 List of Tasks

| Number | Task | Description |
| ------ | ----------------------- | ------------------------------------------------------------------------------- |
| 0 | [Read data from a JSON](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_0/dashboard/src/schema/) | Reuse the latest dashboard project and read data from a JSON file. |
| 1 | [Normalize a nested JSON](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_1/dashboard/src/schema/) | Set up a schema using Normalizr to normalize a nested JSON. |
| 2 | [Filter a normalized Schema](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_2/dashboard/src/schema/) | Modify the function to use the normalized dataset. |
| 3 | [Create actions for the course list](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_3/dashboard/src/actions/) | Create action types and action creators for the course list. |
| 4 | [Create actions for the UI](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_4/dashboard/src/actions/) | Create action types and action creators for the UI, including login and logout. |
| 5 | [Create actions for the notification list](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_5/dashboard/src/actions/) | Create action types and action creators for the notification list. |
| 6 | [Bound the actions](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_6/dashboard/src/actions/) | Bind the action creators for course, notification, and UI actions. |
| 7 | [Async Action Creators](https://github.com/MathieuMorel62/holbertonschool-web_react/blob/main/0x08_react_redux_action_creator_normalizr/task_7/dashboard/src/actions/) | Set up Redux Thunk for async actions and simulate an API. |

## 📬 Contact
- LinkedIn Profile: [Mathieu Morel](https://www.linkedin.com/in/mathieu-morel62/)

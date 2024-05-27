# <p align="center">🌟 React Redux Reducer + Selector 🌟</p>

![redux](https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/aeab7cff-f98a-44b3-871e-e1250e75a64c)

## 📝 Description

This project focuses on using Redux to manage the status in a React application. In particular, it explores the creation of reducers and selectors to effectively structure the state and allow optimized access to data. The project is divided into several stages, covering aspects such as the use of Immutable.js to ensure the immutability of the state, and the integration of Normalizr to standardize application data.

The main objectives of this project include the creation of reducers for different entities of the application, the implementation of selectors to access data effectively, and the writing of unit tests to ensure the proper functioning of reducers and selectors. This project is an excellent opportunity to deepen the understanding of advanced state management with Redux in a React environment.

## 📚 Ressources
- [Reducers](https://intranet.hbtn.io/rltoken/Cwo5XN0svnvN6XoNfwiZlg)
- [Selectors](https://intranet.hbtn.io/rltoken/mSlNeXTcjO5DBBAOmVa5mA)
- [Writing tests](https://intranet.hbtn.io/rltoken/sIYwv5SZH_iJY7wYLz2QbA)
- [Immutable Map documentation](https://intranet.hbtn.io/rltoken/SqjOTNwTpQO4lz5duBmADQ)
- [Normalizr](https://intranet.hbtn.io/rltoken/Yeo-tmTACFPKLH0H-O30QQ)
- [Normalizing State Shape](https://intranet.hbtn.io/rltoken/8z0vVTsnuLq5c3MT21KQ7Q)

## 🛠️ Technologies and Tools Used

- **React**: Used to build the user interface.
- **Redux**: Manages the state of the application in a predictable way.
- **Immutable.js**: Guarantees the immutability of states in reducers.
- **Normalizr**: Facilitates the normalization of complex data.
- **Jest**: Used to write and run unit tests.

## 📋 Prerequisite

- ![Vi](https://img.shields.io/badge/vi-blue) ![Vim](https://img.shields.io/badge/vim-blue) ![Emacs](https://img.shields.io/badge/emacs-blue) ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-blue)
- ![Ubuntu](https://img.shields.io/badge/ubuntu-18.04-purple)
- ![Node.js](https://img.shields.io/badge/node.js-12.x.x-green)
- ![Npm](https://img.shields.io/badge/npm-6.x.x-red)

## 🚀 Installation and Configuration

1. **Step 1:** Clone the GitHub repository

```sh
git clone https://github.com/MathieuMorel62/holbertonschool-web_react.git
```

2. **Step 2:** Navigate to the project directory

```sh
cd react_redux_reducer_selector
```

3. **Step 3:** Install the dependencies

```sh
npm install
```

4. **Step 4:** Configure the project (if necessary)

- Make sure that the `package.json` and `.babelrc` files are configured correctly.

5. **Step 5:** Start the tests to verify the installation

```sh
npm run test
```

## ✨ Main Features

1. **Display of the notification drawer**: Allows you to display or hide the notification drawer according to the user's actions.

2. **User connection**: Manages the user's connection status, from connected to disconnected depending on the successful or failed connection actions.

3. ** Course management**: Loads and updates the list of courses with actions to select or deselect courses.

4. **Management of notifications**: Loads and updates the list of notifications with actions to mark them as read or unread, and to filter the types of notifications.

5. **Use of Immutable.js**: Guarantees the immutability of states for optimal performance.

## 📝 List of Tasks

| Number | Task | Description |
| ------ | ----------------------- | ------------------------------------------------------------------------------- |
| 0 | [Write a basic reducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_0/dashboard/src/reducers/uiReducer.js) | Create the initial state and reduction functions for the user interface. |
| 1 | [Use Immutable for the UI Reducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_1/dashboard/src/reducers/uiReducer.js) | Use Immutable.js to ensure the immutability of the state. |
| 2 | [Create a reducer for Courses](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_2/dashboard/src/reducers/courseReducer.js) | Create a reducer to manage the list of courses and associated actions. |
| 3 | [Create the reducer for notifications](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_3/dashboard/src/reducers/notificationReducer.js) | Create a reducer to manage the list of notifications and associated actions. |
| 4 | [Normalizr & Immutable](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_4/dashboard/src/schema/courses.js) | Use Normalizr and Immutable.js to simplify and optimize state mutations. |
| 5 | [Selectors](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_reducer_selector/task_5/dashboard/src/selectors/notificationSelector.js) | Create selectors to effectively access notification reducer data. |

## 📬 Contact
- LinkedIn Profile: [Mathieu Morel](https://www.linkedin.com/in/mathieu-morel62/)

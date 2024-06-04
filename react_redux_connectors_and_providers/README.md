# <p align="center">🌟 React Redux Connectors and Providers 🌟</p>

![connector](https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/ef639a57-f50a-4edf-a3c2-ae1e99e976da)

## 📝 Description

This project aims to demonstrate the use of connectors and suppliers in a React application using Redux. It highlights the creation and management of Redux stores, the use of connectors to map the status and actions to components, as well as the implementation of middleware for the management of asynchronous actions.

The main features include creating blinds, connecting components to Redux states, managing asynchronous actions with Redux Thunk, and improving performance with Redux Reselect. This project provides a solid basis for understanding and applying Redux concepts in complex React applications.

## 📚 Resources
- [Redux CreateStore](https://redux.js.org/api/createstore)
- [Redux Connect](https://react-redux.js.org/api/connect)
- [Redux Provider](https://react-redux.js.org/api/provider)
- [Redux Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [Redux Reselect](https://github.com/reduxjs/reselect)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [JavaScript Info](https://javascript.info/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## 🛠️ Technologies and Tools Used

- **React**: Used to create dynamic and interactive user interfaces. React allows you to build reusable components that make development more efficient.

- **Redux**: A predictable state container for JavaScript applications. Redux helps manage the state of the application centrally, making it easier to debug and test.

- **Redux Thunk**: Middleware for Redux that allows you to write action creators that return a function instead of an action. This makes it possible to delay the sending of the action until certain conditions are met.

- **Redux Reselect**: A library to create memorized selectors for Redux. It helps to improve the performance of selectors by avoiding unnecessary recalculations.

- **Redux DevTools**: A set of development tools for Redux that allows you to track the actions and status of the application in real time.

- **Immutable.js**: Used to manage immutable data structures. This helps prevent side effects and maintain data integrity.

- **Visual Studio Code**: A code editor used to write and edit project code. It offers debugging features, extensions and Git integration.


## 📋 Prerequisites

- ![OS](https://img.shields.io/badge/ubuntu-18.04_LTS-pink)
- ![NodeJS](https://img.shields.io/badge/node-12.x.x-green)
- ![npm](https://img.shields.io/badge/npm-6.x.x-red)
- ![React](https://img.shields.io/badge/react-17.0.2-blue)
- ![Redux](https://img.shields.io/badge/redux-4.2.1-purple)
- ![Redux Thunk](https://img.shields.io/badge/redux--thunk-2.4.2-orange)


## 📊 Data Files
<details>
<summary>courses.json</summary>
<br>

```json
[
  {
    "id": "1",
    "name": "ES6",
    "credit": 60
  },
  {
    "id": "2",
    "name": "Webpack",
    "credit": 20
  },
  {
    "id": "3",
    "name": "React",
    "credit": 40
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
      "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
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
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  },
  {
    "id": "5debd76485ee4dfd1284f97b",
    "author": {
      "id": "5debd764f07f50822352e252",
      "name": {
        "first": "Roach",
        "last": "Cameron"
      },
      "email": "roach.cameron@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
      "isRead": true,
      "type": "urgent",
      "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
    }
  },
  {
    "id": "5debd7644e561e022d66e61a",
    "author": {
      "id": "5debd764e66586653a8a33f3",
      "name": {
        "first": "Christy",
        "last": "Collier"
      },
      "email": "christy.collier@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 27
    },
    "context": {
      "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
      "isRead": false,
      "type": "urgent",
      "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
    }
  },
  {
    "id": "5debd7644aaed86c97bf9d5e",
    "author": {
      "id": "5debd764f5017139ce541857",
      "name": {
        "first": "Mason",
        "last": "Douglas"
      },
      "email": "mason.douglas@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 31
    },
    "context": {
      "guid": "de55f849-8fca-4ac7-afbb-41751f09d0c6",
      "isRead": false,
      "type": "default",
      "value": "Cursus metus aliquam eleifend mi in nulla posuere. "
    }
  },
  {
    "id": "5debd76413f0d5e5429c28a0",
    "author": {
      "id": "5debd76456a6a030695e6a70",
      "name": {
        "first": "Marshall",
        "last": "Wynn"
      },
      "email": "marshall.wynn@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "8094c267-ab84-47e1-8801-58ddd23f3b2a",
      "isRead": false,
      "type": "default",
      "value": "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit"
    }
  },
  {
    "id": "5debd7642e815cd350407777",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": {
        "first": "Cherry",
        "last": "Miles"
      },
      "email": "cherry.miles@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "3068c575-d619-40af-bf12-dece1ee18dd3",
      "isRead": true,
      "type": "default",
      "value": "Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim"
    }
  },
  {
    "id": "5debd764c1127bc5a490a4d0",
    "author": {
      "id": "5debd76470dcced4a244fe7f",
      "name": {
        "first": "Sykes",
        "last": "Fulton"
      },
      "email": "sykes.fulton@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 36
    },
    "context": {
      "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      "isRead": false,
      "type": "default",
      "value": "Cursus risus at ultrices mi."
    }
  },
  {
    "id": "5debd7646ef31e0861ec1cab",
    "author": {
      "id": "5debd7645c8d811b8c6a235d",
      "name": {
        "first": "Valentine",
        "last": "Juarez"
      },
      "email": "valentine.juarez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "1d3918d0-67e6-44a4-9031-72d7750234de",
      "isRead": true,
      "type": "default",
      "value": "Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing"
    }
  },
  {
    "id": "5debd764a4f11eabef05a81d",
    "author": {
      "id": "5debd764d0b0e7ed3e45ee6d",
      "name": {
        "first": "Maryann",
        "last": "Larson"
      },
      "email": "maryann.larson@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 32
    },
    "context": {
      "guid": "98fe7af4-8300-461f-a376-c147b2987616",
      "isRead": false,
      "type": "default",
      "value": "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac"
    }
  },
  {
    "id": "5debd764af0fdd1fc815ad9b",
    "author": {
      "id": "5debd764fb6db3a5c21ce617",
      "name": {
        "first": "Naomi",
        "last": "Hayes"
      },
      "email": "naomi.hayes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 30
    },
    "context": {
      "guid": "cd1a09cf-ad6e-4478-9662-18a292807e2e",
      "isRead": false,
      "type": "urgent",
      "value": "Nulla malesuada pellentesque elit eget gravida cum sociis"
    }
  },
  {
    "id": "5debd76468cb5b277fd125f4",
    "author": {
      "id": "5debd764f7234e1d44828515",
      "name": {
        "first": "Knowles",
        "last": "Vazquez"
      },
      "email": "knowles.vazquez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 28
    },
    "context": {
      "guid": "0f446b01-37c3-4884-9dc6-316f23b7711b",
      "isRead": false,
      "type": "urgent",
      "value": "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel"
    }
  },
  {
    "id": "5debd764de9fa684468cdc0b",
    "author": {
      "id": "5debd764ec7c8d21449be7d7",
      "name": {
        "first": "Greta",
        "last": "Benjamin"
      },
      "email": "greta.benjamin@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 23
    },
    "context": {
      "guid": "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
      "isRead": false,
      "type": "default",
      "value": "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue"
    }
  }
]
```

</details>


## 🚀 Installation and Configuration

1. Step 1: Clone the repository

```bash
git clone https://github.com/MathieuMorel62/holbertonschool-web_react.git
```

2. Step 2: Navigate to the project folder

```bash
cd react_redux_connectors_and_providers
```

3. Step 3: Install the dependencies

```bash
npm install
```

4. Step 4: Run the application

```bash
npm start
```

5. Step 5: Run the tests

```bash
npm run test
```

## 📸 Screenshot

https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/c8589b2d-c42e-4de9-9f68-44fe38631d2b

<img width="49%" alt="Capture d’écran 2024-06-04 à 16 43 17" src="https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/e8347fac-edd5-4bc8-b02e-fe02f0c4df35"> <img width="49%" alt="Capture d’écran 2024-06-04 à 16 42 54" src="https://github.com/MathieuMorel62/holbertonschool-web_react/assets/113856302/df65996b-8705-4a7f-9e71-dca73a8bdbd6">



## 💡 Use

- Example of use 1:

1. Make sure that the project is properly installed and configured by following the installation instructions.

2. Start the application with `npm start`.

3. Open your browser and go to `http://localhost:8564`.

4. Log in with the credentials provided.

5. Use course and notification management features by navigating through the user interface.

## ✨ Main Features

1. **Management of notifications**: Users can view a list of notifications, mark notifications as read or unread, and filter notifications by type (urgent or default).

2. **User authentication**: The project includes a login and logout feature, managing the user's status with Redux.

3. **Concourse management**: Users can view a list of courses, select or deselect courses, and see the credits associated with each course.

4. **Asynchronous Middleware**: Using Redux Thunk to manage asynchronous actions such as connection requests.

5. **Saved selectors**: Use of Redux Reselect to improve performance by avoiding unnecessary recalculation of selectors.


## 📝 List of Tasks

| Number | Stain | Description |
| ------ | ----------------------- | ------------------------------------------------------------------------------- |
| 0 | [Write mapStateToProps](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_0/dashboard/src/App/App.js) | Connect the component to the Redux state using mapStateToProps. |
| 1 | [Create a small store](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_0/dashboard/src/index.js) | Create a Redux store using createStore and connect the application status. |
| 2 | [Test MapStateToProps](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_0/dashboard/src/App/App.test.js) | Test the mapStateToProps function to verify that it returns the right object. |
| 3 | [Update mapStateToProps](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_1/dashboard/src/App/App.js) | Update the mapStateToProps function to include a new property of the Redux state. |
| 4 | [Connect your actions creators](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_1/dashboard/src/App/App.js) | Connect the action creators to a component using mapDispatchToProps. |
| 5 | [Refactor your code](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_1/dashboard/src/App/App.js) | Refactor the code to use the props instead of the local state of the component. |
| 6 | [Update your tests](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_1/dashboard/src/App/App.test.js) | Update unit tests to support the new state properties. |
| 7 | [Async actions & Thunk middleware](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/index.js) | Implement asynchronous actions with Redux Thunk. |
| 8 | [Connect LoginRequest to the App](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/App/App.js) | Connect the creator loginRequest action to the main component of the application. |
| 9 | [Connect user state to the Footer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/Footer/Footer.js) | Connect the user's state to the Footer component. |
| 10 | [Connect Logout action creator to the Header](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/Header/Header.js) | Connect the logout creator action to the Header component. |
| 11 | [Modify the uiReducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/reducers/uiReducer.js) | Modify the uiReducer to manage login and logout actions. |
| 12 | [Modify the test suites](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_2/dashboard/src/) | Update test suites for modified components. |
| 13 | [Understand how to use the Redux Chrome extension](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_3/dashboard/src/index.js) | Install and use the Redux DevTools extension for Chrome. |
| 14 | [Combine store: Root reducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_4/dashboard/src/reducers/rootReducer.js) | Create a root reducer by combining several reducers. |
| 15 | [Combine store: modify the application](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_4/dashboard/src/index.js) | Modify the application to use the root reducer. |
| 16 | [Combine store: write the tests](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_reaux_connectors_and_providers/task_4/dashboard/src/reducers/rootReducer.test.js) | Write the tests for the root reducer. |
| 17 | [Connect notifications: New Action Creator](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_5/dashboard/src/actions/notificationActionCreators.js) | Add new action creators for notifications. |
| 18 | [Connect notifications: Improve reducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_5/dashboard/src/reducers/notificationReducer.js) | Improve the notification reducer to manage the loading state. |
| 19 | [Connect notifications to the reducer](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_5/dashboard/src/Notifications/Notifications.js) | Connect notifications to the reducer and the corresponding actions. |
| 20 | [Connect notifications: clean up](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_5/dashboard/src/App/App.js) | Clean old functions and test data for notifications. |
| 21 | [Connect notifications: update the test suites](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_5/dashboard/src/) | Update test suites for notifications. |
| 22 | [Selectors](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_6/dashboard/src/Notifications/) | Use selectors to improve performance. |
| 23 | [Connect courses: create a course selector](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_7/dashboard/src/selectors/) | Create a selector for courses. |
| 24 | [Connect courses: create a fetch courses function](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_7/dashboard/src/actions/) | Create a function to retrieve courses from the API. |
| 25 | [Connect the courses component](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_7/dashboard/src/CourseList/) | Connect the course component to the corresponding actions and selectors. |
| 26 | [Memoized selectors: Redux Reselect](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_8/dashboard/src/selectors/notificationSelector.js) | Use Redux Reselect to create memorized selectors. |
| 27 | [Memoized selectors: update the UI](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_8/dashboard/src/Notifications/Notifications.js) | Update the user interface to use the new selectors. |
| 28 | [Memoized selectors: update the test suite](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_8/dashboard/src/) | Update tests for new selectors. |
| 29 | [Container/Component](https://github.com/MathieuMorel62/holbertonschool-web_react/tree/main/react_redux_connectors_and_providers/task_9/dashboard/src/) | Use the concept of containers and components to simplify the architecture. |

## 📬 Contact
- LinkedIn Profile: [Mathieu Morel](https://www.linkedin.com/in/mathieu-morel62/)

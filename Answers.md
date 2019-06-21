1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .concat()
    .filter()
    .map()
    .split()

    Method used to create a new object while extending the properties of another object: .concat() or the spread operator (...state)

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `store` is the global state that is saved in the application.
    `reducers` received the result of the actions and mutate the `store` data.
    `actions` are the methods and functions that are used to manipulate the data passed in or sent out data through API calls.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is used globally and can be passed through `mapStateToProps` in Redux. Component state is the state called in on that one component, where the state can only be passed down like a waterfall.

1.  What is middleware?

    A middleware is a function that takes in a function, does something with that data and function, and returns a function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` allows us to do asynchronous programming. It changes our `action-creators` by allowing us to pass in an extra `dispatch` function in order to create or call asynchronous operations.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    { connect } from 'react-redux'

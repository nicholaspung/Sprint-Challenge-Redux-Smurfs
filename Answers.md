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

    -----

    `store` contains our state for our application.
    `action creators` are functions that creates an action. It's a function that returns an object that just happens to be an action.
    `actions` are simply objects with up to two properties - a `type` property and optional `payload` property. They are packets of information that contain an action type and some data that we want associated with that action type.
    `reducers` are pure functions that calculate the new version of state based on the current state and a given `action`. It can be described as the portion of state that it represents.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is used globally and can be passed through `mapStateToProps` in Redux. Component state is the state called in on that one component, where the state can only be passed down like a waterfall.

1.  What is middleware?

    A middleware is a function that takes in a function, does something with that data and function, and returns a function.

    -------

    A middleware function is a function that returns a function that returns a function. It can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions. The possibilities are endless!

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` allows us to do asynchronous programming. It changes our `action-creators` by allowing us to pass in an extra `dispatch` function in order to create or call asynchronous operations.

    --------

    `redux-thunk` provides the ability to handle asynchronous operations inside our `action creaotrs`. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    { connect } from 'react-redux'

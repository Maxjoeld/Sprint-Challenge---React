

1. What is React JS? How does it differ from other JavaScript Frameworks?
React is a javscript library for building user interfaces and uses jsx.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
ComponentWillMount- Updates state, last minute Optimization
Render()- Prepares and structures jsx code
componentDidMount()- Updates state and triggers re-render

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

Class based component - class based components are used  when we have a component that needs to be aware of state etc data changing over time, reacting to user events and keeping track  of some aspect of state.


Function based components - used whenever were taking in information and spitting out some jsx- a functional component can contain a class based component. Functions simply render data and can not alter the state. Props are passed within the functional component to alter any attributes.

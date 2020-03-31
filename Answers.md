# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Answer:
React JS is a JS library that was developed by facebook. The key difference between React and other libraries is that it relies on components to render content. React is a single page application which means there is only one html file that is used but React injects our "app" into a single div in the html through the use of a querySelector. Once your page is loaded up components are only rendered as needed and if any part of one component changes based on state or props only components that are impacted by that change will re-render(if you want them too, this too is customizable). React is fast, clean, and re-useable.

1. What does it mean to think in react?

Answer:
It's good to think in componenents with the idea of passing props down. It's recommended that you sketch out your basic components and decide what the state/props flow of your app will be.

1. Describe state.

Answer:
State is an object that lives within a (stateful)component.

1. Describe props.

Answer:
Props or properties is data that is passed down from parent to child components

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Answer:

-   Side effects are anything outside the scope of the function such as a network requests.
-   In a functional component you would implement the "useEffect" hook, in class components you would use a lifecycle method such as componentDidMount.

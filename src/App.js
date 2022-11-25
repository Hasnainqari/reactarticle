import './App.css';

function App() {
  return (
    <div>
      <h1>What Is React?</h1>
      <p>
        React is a declarative, efficient, and flexible JavaScript library for building user interfaces.<br /> It lets you compose complex UIs from small and isolated pieces of code called “components”.<br /> React has a few different kinds of components,<br /> but we'll start with React.Component subclasses: class ShoppingList extends React.</p>
      <h1>
        SPA Vs MPA
      </h1>
      <p>The difference between SPA and MPA is that MPAs secures each page to its core. <br /> Therefore, it takes more time and effort to maintain the security; hence, page loading time is more.<br />  SPAs secure endpoints faster, but the security level is low. SPAs generally rely on JavaScript.</p>
      <h1>
        Angular Vs React
      </h1>
      <p>There are a lot of comparable and unique features in each of them,<br /> and both are well suited for creating a project with efficiency in any number of different circumstances.<br /> However, you need to factor in other variables like budget,<br /> time, effectiveness, learning curve, and so on before deciding.</p>
      <h1>
        Framework Vs library
      </h1>
      <p>Libraries provide developers with predefined <br />functions and classes to make their work easier and boost the development process.<br /> Framework, on the other hand, is like the foundation upon which developers build applications for <br />specific platforms</p>
      <h1>
        Dom vs Virtual dom
      </h1>
      <p>
        DOM is an interface that allows the script to update the content,<br /> style, and structure of the document. Virtual DOM is just like a blueprint of a machine,<br /> can do the changes in the blueprint but those changes will not directly apply to the machine
      </p>
    </div>
  );
}

export default App;

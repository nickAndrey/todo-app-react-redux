import React from "react";
import "./App.css";
import "./components/root-variables.css";
import TodoAppInput from "./components/todo-app-input/todo-app-input";
import TodoAppList from "./components/todo-app-list/todo-app-list";

/*   Just simple todo-app ¯\_(ツ)_/¯  */

function App() {
  return (
    <div className="layout">
      <header className="header"></header>
      <main className="main">
        <TodoAppInput />
        <TodoAppList />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

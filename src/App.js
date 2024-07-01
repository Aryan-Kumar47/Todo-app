import './App.css';
import React from "react";
import { DataProvider } from "./context/DataContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TaskDetails from "./components/TaskDetails";
import PageNotFound from "./components/PageNotFound";

function App() {

  return (
    <DataProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTodo" element={<AddTodo />} />

          <Route path="/edit" element={<EditTodo />} />

          <Route path="/todo/:id" element={<TaskDetails />} />

          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;

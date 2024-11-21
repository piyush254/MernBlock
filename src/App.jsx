import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import YourComponent from "./pages/YourComponent";
import UserInput from "./pages/UserInput";
import CategorySelector from "./pages/CategorySelector";
import Header from "./pages/Header";
import CodeSnippet from "./pages/CodeSnippet";
import ServiceCheckbox from "./pages/ServiceCheckbox.jsx"
import NotificationForm from "./pages/NotificationForm.jsx";


function App() {
  <NotificationForm />
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="YourComponent" element={<YourComponent />} />
        <Route path="userInput" element={<UserInput />} />
        <Route path="CategorySelector" element={<CategorySelector />} />
        <Route path="CodeSnippet" element ={<CodeSnippet />} />
        <Route path="ServiceCheckbox" element = {<ServiceCheckbox />} />
        <Route path="NotificationForm" element = {<NotificationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

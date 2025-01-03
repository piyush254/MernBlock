import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")}>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/YourComponent" className={({ isActive }) => (isActive ? "active" : "")}>
              Your Component
            </NavLink>
          </li>
          <li>
            <NavLink to="/userInput" className={({ isActive }) => (isActive ? "active" : "")}>
              User Input
            </NavLink>
          </li>
          <li>
            <NavLink to="/CategorySelector" className={({ isActive }) => (isActive ? "active" : "")}>
              Category Selector
            </NavLink>
          </li>
          <li>
          <NavLink to="/CodeSnippet" className={({ isActive }) => (isActive ? "active" : "")}>
          CodeSnippet
            </NavLink>
          </li>
          <li>
          <NavLink to="/ServiceCheckbox" className={({ isActive }) => (isActive ? "active" : "")}>
            Service Checkbox
            </NavLink>
        </li>
        <li>
          <NavLink to="/NotificationForm" className={({ isActive }) => (isActive ? "active" : "")}>
              Notification Form
            </NavLink>
        </li>
        <li>
          <NavLink to="/ButtonsAndDiv" className={({ isActive }) => (isActive ? "active" : "")}>
          Buttons And Div
            </NavLink>
        </li>
        <li>
          <NavLink to="AllTest" className={({ isActive }) => (isActive ? "active" : "")}>
            All Test
          </NavLink>
        </li>
         <li>
          <NavLink to="ClickOutsideHandler" className={({ isActive }) => (isActive ? "active" : "")}>
          Click Outside Handler
          </NavLink>
        </li>
        <li>
          <NavLink to="FilterComponent" className={({ isActive }) => (isActive ? "active" : "")}>
          Filter Component
          </NavLink>
        </li>
        <li>
          <NavLink to="InfiniteScrollComponent" className={({ isActive }) => (isActive ? "active" : "")}>
          Infinite Scroll Component
          </NavLink>
        </li>
          <li>
          <NavLink to="blankpage" className={({ isActive }) => (isActive ? "active" : "")}>
          Blank Page
          </NavLink>
        </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
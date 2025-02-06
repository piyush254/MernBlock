import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/YourComponent"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Your Component
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/userInput"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              User Input
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/CategorySelector"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Category Selector
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/CodeSnippet"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CodeSnippet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ServiceCheckbox"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Service Checkbox
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/NotificationForm"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Notification Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ButtonsAndDiv"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Buttons And Div
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="AllTest"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All Test
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="ClickOutsideHandler"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Click Outside Handler
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="FilterComponent"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Filter Component
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="InfiniteScrollComponent"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Infinite Scroll Component
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="blankpage"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blank Page
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink
              to="FetchProfilePack"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Fetch Profile Pack
            </NavLink>
          </li>
          <li
          className="nav-item"
          >
            <NavLink
              to="cards"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cards
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink
              to="TestGroup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Test Group
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink
              to="OtpConfirmation"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Otp Confirmation
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink
              to="DietitianCard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
            Dietitian Card
            </NavLink>
          </li>  
          <li className="nav-item">
            <NavLink
              to="ToggleSwitch"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
            Toggle Switch
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink
              to="HealthConsultation"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
           Health Consultation
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

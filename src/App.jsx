import React from "react";
import {  BrowserRouter as Router,  Routes, Route,  NavLink } from "react-router-dom";
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
import ServiceCheckbox from "./pages/ServiceCheckbox.jsx";
import NotificationForm from "./pages/NotificationForm.jsx";
import ButtonsAndDiv from "./pages/ButtonsAndDiv.jsx";
import Footer from "./pages/Footer.jsx";
import AllTests from "./pages/All-Test.jsx";
import ClickOutsideHandler from "./pages/ClickOutsideHandler.jsx";
import FilterComponent from "./pages/FilterComponent.jsx";
import InfiniteScrollComponent from "./pages/InfiniteScrollComponent.jsx";
import FetchProfilePack from "./pages/FetchProfilePack.jsx";
import Card from "./pages/Card.jsx";
import TestGroups from "./pages/TestGroups.jsx";
// import OtpConfirmation from "./pages/otpConfirmation.jsx";
import OtpConfirmation from "./pages/OtpConfirmation.jsx"
import DietitianCard from "./pages/DietitianCard.jsx";
import ToggleSwitch from "./pages/ToggleSwitch.jsx";
import HealthConsultation from "./pages/HealthConsultation.jsx";
import DoctorList from "./pages/DoctorList.jsx"
import QuotePopup from "./pages/QuotePopup.jsx"
import ScrollChangeNumber from "./pages/ScrollChangeNumber"
import AgeCategorizer from "./pages/AgeCategorizer";
import ExpandingDiv from "./pages/ExpandingDiv"

function App() {

  const mockData = [
    {
      OURPACKAGE: "Full Body Checkup",
      PACKAGE_ID: "123",
      FASTING_FLAG: "CF",
      OFFER_PRICE: 999,
      PROVIDER_ID: "456",
    },
    {
      OURPACKAGE: "Diabetes Check",
      PACKAGE_ID: "789",
      FASTING_FLAG: "NF",
      OFFER_PRICE: 499,
      PROVIDER_ID: "012",
    },
  ];
  const data = ["Immunity"];


  return (
    <Router>
      <Header />
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
        <Route path="CodeSnippet" element={<CodeSnippet />} />
        <Route
          path="ServiceCheckbox"
          element={<ServiceCheckbox data={data} />}
        />
        <Route path="NotificationForm" element={<NotificationForm />} />
        <Route path="ButtonsAndDiv" element={<ButtonsAndDiv />} />
        <Route
          path="AllTest"
          element={
            <AllTests
              data={mockData}
              citySlug="mumbai"
              color="blue"
              queryString="some-query"
            />
          }
        />
        <Route path="ClickOutsideHandler" element={<ClickOutsideHandler />} />
        <Route path="FilterComponent" element={<FilterComponent />} />
        <Route
          path="InfiniteScrollComponent"
          element={<InfiniteScrollComponent />}
        />
        <Route path="FetchProfilePack" element={<FetchProfilePack />} />
        <Route path="cards" element={<Card />} />
        <Route path="TestGroup" element={<TestGroups />} />
        <Route path="OtpConfirmation" element={<OtpConfirmation />} />
        <Route path="DietitianCard" element={<DietitianCard/>} />
        <Route path="ToggleSwitch" element={<ToggleSwitch />} />
        <Route path="HealthConsultation" element={<HealthConsultation/>} />
        <Route path="DoctorList" element={<DoctorList/>} />
        <Route path="QuotePopup" element={<QuotePopup/>} />
        <Route path="ScrollChangeNumber" element={<ScrollChangeNumber/>} />
        <Route path="AgeCategorizer" element={<AgeCategorizer/>} />
        <Route path="ExpandingDiv" element={<ExpandingDiv/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

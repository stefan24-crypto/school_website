import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ForStaffPage from "./pages/ForStaffPage";
import ForStudents from "./pages/ForStudents";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <Layout>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forstaff" element={<ForStaffPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forstudents" element={<ForStudents />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
